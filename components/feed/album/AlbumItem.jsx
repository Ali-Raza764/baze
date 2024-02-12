import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaHeadphones } from "react-icons/fa";

const AlbumItem = ({
  item: { name, artists, image, releaseDate, id, year, artist },
}) => {
  return (
    <Link
      href={`/albumdetails/${id}`}
      className="music-item w-[10rem] h-[14rem]  bg-transparent hover:bg-gray-500 transition-all duration-150 rounded-md cursor-pointer flex flex-col p-2"
    >
      <div className="w-full h-full relative">
        <div className="w-full h-full controls absolute top-0 right-0 left-0 bottom-0 hidden transition-all duration-300 items-center justify-center">
          <FaHeadphones className="text-[4rem] text-[#1ed760] text-center" />
        </div>
        <Image
          src={image[2].link}
          width={50}
          height={50}
          alt={"song Image"}
          className="w-full rounded-lg"
        />
      </div>
      <h3 className="text-xl font-semibold text-ellipsis line-clamp-1">
        {name}
      </h3>
      <div className="flex items-center w-full gap-x-2 text-sm text-gray-400 mt-1">
        <div>{releaseDate?.split("-")[0] || year}</div>
        <div className="separator h-2 w-2 bg-gray-600 rounded-full"></div>
        <h4 className="text-ellipsis line-clamp-1">
          {artists ? artists[0].name : artist}
        </h4>
      </div>
    </Link>
  );
};

export default AlbumItem;
