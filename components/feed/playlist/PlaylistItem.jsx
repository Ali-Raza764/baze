import Image from "next/image";
import Link from "next/link";
import React from "react";

const PlaylistItem = ({ item: { title, image, songCount, id } }) => {
  return (
    <Link href={`/playlist/${id}`}>
      <div className="music-item w-[10rem] h-[14rem]  bg-transparent hover:bg-gray-500 transition-all duration-150 rounded-md cursor-pointer flex flex-col p-2">
        <div className="w-full h-full relative">
          <Image
            src={image[2].link}
            alt={"Playlist Image"}
            width={50}
            height={50}
            className="w-full rounded-lg"
          />
        </div>
        <h3 className="text-xl font-semibold text-ellipsis line-clamp-1">
          {title}
        </h3>
        <h4 className="text-sm text-gray-400 mt-1">Songs: {songCount}</h4>
      </div>
    </Link>
  );
};

export default PlaylistItem;
