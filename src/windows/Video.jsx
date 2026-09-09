import { useEffect, useRef, useState } from "react";
import { Play, Pause, Volume2, VolumeX } from "lucide-react";
import WindowWrapper from "@hoc/WindowWrapper.jsx";
import { WindowControls } from "@components";
import useWindowStore from "@store/window.js";
import { formatTime } from "@lib/utils.js";

const CONTROLS_HIDE_DELAY = 2500;

const Video = () => {
  const { windows } = useWindowStore();
  const data = windows.videofile?.data;

  const videoRef = useRef(null);
  const hideTimeoutRef = useRef(null);

  const [isPlaying, setIsPlaying] = useState(true);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isMuted, setIsMuted] = useState(true);
  const [showControls, setShowControls] = useState(true);

  useEffect(() => () => clearTimeout(hideTimeoutRef.current), []);

  if (!data) return null;

  const { name, videoUrl } = data;

  const scheduleHideControls = () => {
    clearTimeout(hideTimeoutRef.current);
    hideTimeoutRef.current = setTimeout(
      () => setShowControls(false),
      CONTROLS_HIDE_DELAY,
    );
  };

  const handleMouseMove = () => {
    setShowControls(true);
    if (isPlaying) scheduleHideControls();
  };

  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) video.play();
    else video.pause();
  };

  const toggleMute = () => {
    const video = videoRef.current;
    if (!video) return;
    video.muted = !video.muted;
    setIsMuted(video.muted);
  };

  const handleSeek = (event) => {
    const value = Number(event.target.value);
    if (videoRef.current) videoRef.current.currentTime = value;
    setCurrentTime(value);
  };

  const progressPercent = duration ? (currentTime / duration) * 100 : 0;

  return (
    <>
      <div id="window-header">
        <WindowControls target="videofile" />
        <h2 className="text-sm font-semibold">{name}</h2>
      </div>

      <div className="video-player" onMouseMove={handleMouseMove}>
        <video
          ref={videoRef}
          src={videoUrl}
          autoPlay
          muted
          onClick={togglePlay}
          onTimeUpdate={(e) => setCurrentTime(e.target.currentTime)}
          onLoadedMetadata={(e) => setDuration(e.target.duration)}
          onPlay={() => {
            setIsPlaying(true);
            scheduleHideControls();
          }}
          onPause={() => {
            setIsPlaying(false);
            setShowControls(true);
            clearTimeout(hideTimeoutRef.current);
          }}
          onEnded={() => {
            setIsPlaying(false);
            setShowControls(true);
            clearTimeout(hideTimeoutRef.current);
          }}
        />

        <div className={`video-controls ${showControls ? "" : "video-controls-hidden"}`}>
          <button
            type="button"
            onClick={togglePlay}
            aria-label={isPlaying ? "Pause" : "Play"}
          >
            {isPlaying ? <Pause size={16} /> : <Play size={16} />}
          </button>

          <span className="video-time">{formatTime(currentTime)}</span>

          <input
            type="range"
            className="video-seek"
            min={0}
            max={duration || 0}
            step={0.1}
            value={currentTime}
            onChange={handleSeek}
            style={{
              background: `linear-gradient(to right, #fff ${progressPercent}%, rgba(255,255,255,0.3) ${progressPercent}%)`,
            }}
          />

          <span className="video-time">{formatTime(duration)}</span>

          <button
            type="button"
            onClick={toggleMute}
            aria-label={isMuted ? "Unmute" : "Mute"}
          >
            {isMuted ? <VolumeX size={16} /> : <Volume2 size={16} />}
          </button>
        </div>
      </div>
    </>
  );
};

const VideoWindow = WindowWrapper(Video, "videofile");
export default VideoWindow;
