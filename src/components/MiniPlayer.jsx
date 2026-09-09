import { Pause, Play, SkipBack, SkipForward } from "lucide-react";
import useWindowStore from "@store/window.js";
import usePlayerStore from "@store/player.js";

const MiniPlayer = () => {
  const spotifyOpen = useWindowStore((s) => s.windows.spotify.isOpen);
  const openWindow = useWindowStore((s) => s.openWindow);
  const { tracks, currentIndex, isPlaying, togglePlayback, next, prev } =
    usePlayerStore();

  const visible = !spotifyOpen && isPlaying;
  const current = tracks[currentIndex];

  return (
    <div className={`mini-player ${visible ? "mini-player-visible" : ""}`}>
      <img
        src={current.cover}
        alt={current.title}
        className="mini-player-cover"
        onClick={() => openWindow("spotify")}
      />

      <div className="mini-player-info" onClick={() => openWindow("spotify")}>
        <p className="mini-player-title">{current.title}</p>
        <p className="mini-player-artist">{current.artist}</p>
      </div>

      <div className="mini-player-controls">
        <SkipBack size={14} onClick={prev} />
        <button
          type="button"
          onClick={togglePlayback}
          aria-label={isPlaying ? "Pause" : "Play"}
        >
          {isPlaying ? <Pause size={13} /> : <Play size={13} />}
        </button>
        <SkipForward size={14} onClick={next} />
      </div>
    </div>
  );
};

export default MiniPlayer;
