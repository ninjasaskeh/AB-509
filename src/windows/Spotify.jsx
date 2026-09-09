import { useEffect, useRef } from "react";
import {
  Home,
  Search,
  Library,
  Play,
  Pause,
  SkipBack,
  SkipForward,
  Shuffle,
  Repeat,
  Volume2,
  Heart,
  Clock,
} from "lucide-react";
import WindowWrapper from "@hoc/WindowWrapper.jsx";
import { SPOTIFY_DATA } from "@constants/index.js";
import { WindowControls } from "@components/index.js";
import { formatTime } from "@lib/utils.js";
import usePlayerStore from "@store/player.js";

const Spotify = () => {
  const { playlist } = SPOTIFY_DATA;
  const audioRef = useRef(null);
  const {
    tracks,
    currentIndex,
    isPlaying,
    currentTime,
    duration,
    setAudioRef,
    setCurrentTime,
    setDuration,
    playTrack,
    togglePlayback,
    next,
    prev,
    seek,
    onPlay,
    onPause,
  } = usePlayerStore();

  const current = tracks[currentIndex];

  useEffect(() => {
    setAudioRef(audioRef);
  }, [setAudioRef]);

  const handleSeek = (event) => seek(Number(event.target.value));

  const progressPercent = duration ? (currentTime / duration) * 100 : 0;

  return (
    <>
      <audio
        ref={audioRef}
        onTimeUpdate={(e) => setCurrentTime(e.target.currentTime)}
        onLoadedMetadata={(e) => setDuration(e.target.duration)}
        onEnded={next}
        onPlay={onPlay}
        onPause={onPause}
      />

      <div id="window-header">
        <WindowControls target="spotify" />
      </div>

      <div className="spotify-body">
        <aside className="spotify-sidebar">
          <div className="spotify-nav">
            <span>
              <Home size={18} /> Home
            </span>
            <span>
              <Search size={18} /> Search
            </span>
            <span>
              <Library size={18} /> Your Library
            </span>
          </div>

          <div className="spotify-playlist-link active">
            <img src={playlist.cover} alt={playlist.title} />
            <div className="min-w-0">
              <p className="spotify-playlist-name">{playlist.title}</p>
              <p className="spotify-playlist-owner">Playlist</p>
            </div>
          </div>
        </aside>

        <div className="spotify-main">
          <div className="spotify-playlist-header">
            <img
              src={playlist.cover}
              alt={playlist.title}
              className="spotify-cover"
            />
            <div>
              <p className="spotify-kicker">Playlist</p>
              <h1>{playlist.title}</h1>
              <p className="spotify-description">{playlist.description}</p>
              <p className="spotify-meta">
                {playlist.owner} · {tracks.length} songs
              </p>
            </div>
          </div>

          <table className="spotify-tracklist">
            <thead>
              <tr>
                <th>#</th>
                <th>Title</th>
                <th>Album</th>
                <th>
                  <Clock size={14} />
                </th>
              </tr>
            </thead>
            <tbody>
              {tracks.map((track, index) => (
                <tr
                  key={track.title}
                  className={index === currentIndex ? "active" : ""}
                  onClick={() => playTrack(index)}
                >
                  <td>
                    <span className="spotify-track-number">
                      {index === currentIndex && isPlaying ? (
                        <Pause size={14} />
                      ) : (
                        index + 1
                      )}
                    </span>
                  </td>
                  <td>
                    <div className="spotify-track-title">
                      <img src={track.cover} alt={track.title} loading="lazy" />
                      <div className="min-w-0">
                        <p className="spotify-track-name">{track.title}</p>
                        <p className="spotify-track-artist">{track.artist}</p>
                      </div>
                    </div>
                  </td>
                  <td className="spotify-track-album">{track.album}</td>
                  <td className="spotify-track-duration">{track.duration}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="spotify-now-playing">
        <div className="spotify-now-track">
          <img src={current.cover} alt={current.title} />
          <div className="min-w-0">
            <p className="spotify-track-name">{current.title}</p>
            <p className="spotify-track-artist">{current.artist}</p>
          </div>
          <Heart size={16} className="spotify-heart" />
        </div>

        <div className="spotify-now-controls">
          <div className="spotify-now-buttons">
            <Shuffle size={15} />
            <SkipBack size={16} onClick={prev} />
            <button
              type="button"
              className="spotify-play-btn"
              onClick={togglePlayback}
              aria-label={isPlaying ? "Pause" : "Play"}
            >
              {isPlaying ? <Pause size={14} /> : <Play size={14} />}
            </button>
            <SkipForward size={16} onClick={next} />
            <Repeat size={15} />
          </div>
          <div className="spotify-progress">
            <span>{formatTime(currentTime)}</span>
            <input
              type="range"
              className="spotify-seek"
              min={0}
              max={duration || 0}
              step={0.1}
              value={currentTime}
              onChange={handleSeek}
              style={{
                background: `linear-gradient(to right, #fff ${progressPercent}%, rgba(255,255,255,0.2) ${progressPercent}%)`,
              }}
            />
            <span>{duration ? formatTime(duration) : current.duration}</span>
          </div>
        </div>

        <div className="spotify-volume">
          <Volume2 size={16} />
          <div className="spotify-progress-bar">
            <div className="spotify-progress-fill" style={{ width: "70%" }} />
          </div>
        </div>
      </div>
    </>
  );
};

const SpotifyWindow = WindowWrapper(Spotify, "spotify");
export default SpotifyWindow;
