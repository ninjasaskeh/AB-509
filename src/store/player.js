import { create } from "zustand";
import { SPOTIFY_DATA } from "@constants/index.js";

const { tracks } = SPOTIFY_DATA;

const usePlayerStore = create((set, get) => ({
  audioRef: null,
  tracks,
  currentIndex: 0,
  isPlaying: false,
  currentTime: 0,
  duration: 0,

  setAudioRef: (ref) => set({ audioRef: ref }),
  setCurrentTime: (currentTime) => set({ currentTime }),
  setDuration: (duration) => set({ duration }),

  loadTrack: (index, autoplay) => {
    const audio = get().audioRef?.current;
    set({ currentIndex: index, currentTime: 0, duration: 0 });
    if (!audio) return;
    audio.src = encodeURI(tracks[index].src);
    audio.load();
    if (autoplay) audio.play();
  },

  playTrack: (index) => {
    if (index === get().currentIndex) {
      get().togglePlayback();
      return;
    }
    get().loadTrack(index, true);
  },

  togglePlayback: () => {
    const audio = get().audioRef?.current;
    if (!audio) return;
    if (audio.paused) audio.play();
    else audio.pause();
  },

  next: () => {
    const { currentIndex } = get();
    get().loadTrack((currentIndex + 1) % tracks.length, true);
  },

  prev: () => {
    const { currentIndex } = get();
    get().loadTrack((currentIndex - 1 + tracks.length) % tracks.length, true);
  },

  seek: (value) => {
    const audio = get().audioRef?.current;
    if (audio) audio.currentTime = value;
    set({ currentTime: value });
  },

  onPlay: () => set({ isPlaying: true }),
  onPause: () => set({ isPlaying: false }),
}));

export default usePlayerStore;
