import Image from "next/image";
import Link from "next/link";
import React from "react";

const ArtistItem = ({ item: { title, image, id } }) => {
  return (
    <Link
      href={`/artist/${id}`}
      className="music-item w-[9rem] h-[12rem]  bg-transparent hover:bg-gray-500 transition-all duration-150 rounded-md cursor-pointer flex-props-b flex-col p-2"
    >
      <Image
        src={image[2].link}
        width={100}
        height={100}
        alt={"song Image"}
        className="w-full rounded-full"
      />
      <h3 className="w-full text-ellipsis line-clamp-1 text-xl font-sans font-semibold">{title}</h3>
    </Link>
  );
};

export default ArtistItem;
