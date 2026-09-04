import { create } from "zustand";

const SESSION_KEY = "site-unlocked";

const useLockStore = create((set) => ({
  isUnlocked: sessionStorage.getItem(SESSION_KEY) === "true",
  powerState: "on", // "on" | "restarting" | "off"

  unlock: () =>
    set(() => {
      sessionStorage.setItem(SESSION_KEY, "true");
      return { isUnlocked: true };
    }),

  lock: () =>
    set(() => {
      sessionStorage.removeItem(SESSION_KEY);
      return { isUnlocked: false };
    }),

  restart: () => {
    sessionStorage.removeItem(SESSION_KEY);
    set({ powerState: "restarting" });
    setTimeout(() => window.location.reload(), 1200);
  },

  shutDown: () =>
    set(() => {
      sessionStorage.removeItem(SESSION_KEY);
      return { powerState: "off" };
    }),

  turnOn: () => window.location.reload(),
}));

export default useLockStore;
