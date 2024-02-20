import useCurrentPlaylist from "@/store/useCurrentPlaylist";
import React, { useState } from "react";
import { FaCompactDisc, FaList } from "react-icons/fa";
import { MdClose } from "react-icons/md";

const Playlist = ({ songs, name, currentSongId }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { updateCurrentSong } = useCurrentPlaylist();

  const toggleSheet = () => {
    setIsOpen(!isOpen);
  };

  const changeSong = (songId) => {
    updateCurrentSong(songId);
  };
  return (
    <div className="flex-props-c">
      <button onClick={toggleSheet}>{<FaList size={20} />}</button>
      <div
        className={`sheet fixed -bottom-10 left-0 w-full bg-black p-4 ${
          isOpen ? "h-[80%]" : "h-0"
        } transition-all duration-300 z-50`}
      >
        <div className="sheet-header mb-4">
          <div className="flex-props-b">
            <h2 className="text-xl font-bold">{name}</h2>
            <button onClick={toggleSheet}>
              <MdClose size={30} />
            </button>
          </div>
        </div>
        <div className="sheet-content overflow-auto h-full">
          {songs.map((song) => (
            <div
              key={song.id}
              className={`cursor-pointer flex items-center justify-between py-2 ${
                currentSongId === song.id ? "text-green-500" : ""
              } hover:text-green-500 shadow-sm shadow-gray-800`}
              onClick={() => changeSong(song.id)}
            >
              <p className="truncate text-lg font-semibold font-sans">
                {song.name}
              </p>
              {currentSongId === song.id && (
                <span className="animate-spin rounded-full p-1">
                  <FaCompactDisc size={25} />
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Playlist;
