"use client";
import useCurrentPlaylist from "@/store/useCurrentPlaylist";
import { FaPauseCircle, FaPlayCircle } from "react-icons/fa";

const SongButton = ({ songId, playlist }) => {
  const { currentSongId, updateCurrentSong, updateCurrentPlaylist } =
    useCurrentPlaylist();
  const handlePlay = () => {
    updateCurrentSong(songId);
    updateCurrentPlaylist(playlist);
  };
  return (
    <button onClick={handlePlay}>
      {currentSongId && currentSongId == songId ? (
        <FaPauseCircle size={40} className="text-green-500" />
      ) : (
        <FaPlayCircle size={40} className="text-green-500" />
      )}
    </button>
  );
};

export default SongButton;
