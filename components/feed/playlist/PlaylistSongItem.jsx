import Image from "next/image";
import React from "react";
import { AiOutlineMenu } from "react-icons/ai";
import SongButton from "./SongButton";

const PlaylistSongItem = ({ data, playlist }) => {
  return (
    <div className="w-full h-max p-2 border-b flex-props-b">
      <div className="flex items-center gap-x-3">
        <SongButton songId={data.id} playlist={playlist} />
        <Image
          src={data.image[2].link}
          alt="Image"
          width={50}
          height={50}
          className="rounded-md"
        />
      </div>
      <p className="text-md text-gray-200 w-32 text-ellipsis line-clamp-1">
        {data.name}
      </p>
      <AiOutlineMenu />
    </div>
  );
};

export default PlaylistSongItem;
