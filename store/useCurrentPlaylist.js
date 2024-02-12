import { create } from "zustand";

const useCurrentPlaylist = create((set) => ({
  currentPlaylist: null,
  currentSongId: null,
  updateCurrentPlaylist: (newPlaylist) => set({ currentPlaylist: newPlaylist }),
  updateCurrentSong: (newId) => set({ currentSongId: newId }),
}));

export default useCurrentPlaylist;
