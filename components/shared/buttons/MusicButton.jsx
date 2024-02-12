"use client";
import useCurrentPlaylist from "@/store/useCurrentPlaylist";
import React from "react";
import { AiFillPauseCircle, AiFillPlayCircle } from "react-icons/ai";

const MusicButton = ({ id, size, name }) => {
  const { currentSongId, updateCurrentSong, updateCurrentPlaylist } =
    useCurrentPlaylist();
  const handlePlay = () => {
    const playlist = {
      name: "Playlist",
      songCount: 1,
      songs: [{ name: name, id: id }],
    };
    updateCurrentSong(id);
    updateCurrentPlaylist(playlist);
  };
  return (
    <button className="music-button w-full h-full flex-props-c  block transition-all duration-300">
      {currentSongId && currentSongId === id ? (
        <AiFillPauseCircle
          size={size}
          className={`pause button text-[4rem] text-[#1ed760] text-center `}
        />
      ) : (
        <AiFillPlayCircle
          onClick={handlePlay}
          size={size}
          className="play-button text-[4rem] text-[#1ed760] text-center"
        />
      )}
    </button>
  );
};

export default MusicButton;
