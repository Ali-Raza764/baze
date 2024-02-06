import useCurrentSong from "@/store/useCurrentSong";
import Image from "next/image";
import React from "react";
import { AiFillPlayCircle } from "react-icons/ai";
import MusicButton from "../shared/buttons/MusicButton";

const MusicItem = ({
  item: { title, name, image, album, primaryArtists, id },
}) => {
  return (
    <div className="music-item w-[9rem] h-[12rem]  bg-transparent hover:bg-gray-500 transition-all duration-150 rounded-md cursor-pointer flex flex-col p-2">
      <div className="w-full h-full relative">
        <MusicButton id={id} />
        <Image
          src={image[2].link}
          alt={"Song Image"}
          width={50}
          height={50}
          className="w-full rounded-lg"
        />
      </div>
      <h3 className="text-xl font-semibold text-ellipsis line-clamp-1">
        {name || title}
      </h3>
      <h4 className="text-sm text-gray-400 mt-1">
        {primaryArtists[0].name || primaryArtists}
      </h4>
    </div>
  );
};

export default MusicItem;
