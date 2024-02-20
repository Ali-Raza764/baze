"use client";
import { useEffect, useState } from "react";
import MusicPlayer from "./Player";
import { AiFillPlayCircle } from "react-icons/ai";
import useCurrentPlaylist from "@/store/useCurrentPlaylist";

const Player = () => {
  const [musicData, setData] = useState(null);
  let { currentSongId } = useCurrentPlaylist();

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `https://saavn.dev/songs?id=${currentSongId}`
      );
      const result = await response.json();
      setData(result.data[0]);
    };

    if (currentSongId) {
      fetchData();
    }
  }, [currentSongId]);

  if (!currentSongId) {
    return (
      <div className="w-[100vw] hidden md:flex items-center justify-center p-1 bg-black">
        <h2 className="font-semibold font-sans w-full text-2xl text-center flex-props-c">
          <AiFillPlayCircle size={50} className="text-green-500" />
          Play A Song Now
        </h2>
      </div>
    );
  }

  return (
    musicData && (
      <MusicPlayer
        name={musicData.name}
        artist={musicData.primaryArtists}
        url={musicData.downloadUrl[4].link}
        id={musicData.id}
        images={musicData.image}
      />
    )
  );
};

export default Player;
