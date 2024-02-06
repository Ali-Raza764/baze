import { create } from "zustand";

const useCurrentSong = create((set) => ({
  CurrentSongId: "",
  updateSong: (newId) => set({ CurrentSongId: newId }),
}));

export default useCurrentSong;
