import { create } from "zustand";
import { persist } from "zustand/middleware";

const useCurrentSong = create((set) => ({
  data: {},
  updateSong: (newData) => set({ data: newData }),
}));

export default useCurrentSong;
