import { create } from "zustand";

const useGiftStore = create((set) => ({
  isOpen: false,

  openGift: () => set({ isOpen: true }),
  closeGift: () => set({ isOpen: false }),
}));

export default useGiftStore;
