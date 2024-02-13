import Image from "next/image";
import React from "react";
import MusicButton from "@/components/shared/buttons/MusicButton";

const MusicItem = ({ item: { title, name, image, primaryArtists, id } }) => {
  return (
    <div className="music-item w-[10rem] h-[14rem]  bg-transparent hover:bg-gray-500 transition-all duration-150 rounded-md cursor-pointer flex flex-col p-2">
      <div className="w-full h-full relative">
        <div className="absolute bottom-0 right-0 play-button hidden">
          <MusicButton id={id} size={50} name={name} />
        </div>
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
