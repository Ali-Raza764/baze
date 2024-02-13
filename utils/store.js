"use client"
import useCurrentPlaylist from "@/store/useCurrentPlaylist";

export const updateSong = (id) => {
  const { updateCurrentSong } = useCurrentPlaylist();

  updateCurrentSong(id);
};
export const updatePlaylist = (playlist) => {
  const { updateCurrentPlaylist } = useCurrentPlaylist();

  updateCurrentPlaylist(playlist);
};
