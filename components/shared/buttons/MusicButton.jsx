"use client";
import useCurrentSong from "@/store/useCurrentSong";
import React from "react";
import { AiFillPauseCircle, AiFillPlayCircle } from "react-icons/ai";

const MusicButton = ({ id }) => {
  let { CurrentSongId, updateSong } = useCurrentSong();
  const playSong = async () => {
    updateSong(id);
  };
  return (
    <button className="music-button w-full h-full absolute flex-props-c  block transition-all duration-300">
      {CurrentSongId && CurrentSongId === id ? (
        <AiFillPauseCircle
          className={`pause button text-[4rem] text-[#1ed760] text-center `}
        />
      ) : (
        <AiFillPlayCircle
          onClick={playSong}
          className="play-button text-[4rem] text-[#1ed760] text-center hidden"
        />
      )}
    </button>
  );
};

export default MusicButton;
