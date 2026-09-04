import { useState } from "react";
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

const Spotify = () => {
  const { playlist, tracks } = SPOTIFY_DATA;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  const current = tracks[currentIndex];

  const playTrack = (index) => {
    if (index === currentIndex) {
      setIsPlaying((prev) => !prev);
      return;
    }
    setCurrentIndex(index);
    setIsPlaying(true);
  };

  return (
    <>
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
            <SkipBack size={16} />
            <button
              type="button"
              className="spotify-play-btn"
              onClick={() => setIsPlaying((prev) => !prev)}
              aria-label={isPlaying ? "Pause" : "Play"}
            >
              {isPlaying ? <Pause size={14} /> : <Play size={14} />}
            </button>
            <SkipForward size={16} />
            <Repeat size={15} />
          </div>
          <div className="spotify-progress">
            <span>1:12</span>
            <div className="spotify-progress-bar">
              <div className="spotify-progress-fill" />
            </div>
            <span>{current.duration}</span>
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
