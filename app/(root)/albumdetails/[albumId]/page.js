import { MusicCarousel } from "@/components";
import Image from "next/image";
import React from "react";

const AlbumDetails = async ({ params }) => {
  const response = await fetch(`https://saavn.dev/albums?id=${params.albumId}`);
  const result = await response.json();
  const data = result.data;

  return (
    <div className="w-full">
      <div className="w-full flex flex-col md:flex-row md:gap-x-7">
        <div>
          <Image
            src={data.image[2].link}
            alt={"Album Cover"}
            height={800}
            width={500}
            className="rounded-md"
          />
        </div>
        <div className="w-full">
          <h1 className="text-2xl font-semibold font-sans text-left line-clamp-2 text-ellipsis">
            {data.name}
          </h1>
          <h2 className="text-xl text-gray-400 font-semibold line-clamp-1 text-ellipsis text-left">
            {data.primaryArtists}
          </h2>
          <p className="text-md text-gray-600 font-serif">Year: {data.year}</p>
          <p className="text-md text-gray-600 font-serif">
            Release Date: {data.releaseDate}
          </p>
          <p className="text-md text-gray-600 font-serif">
            Song Count: {data.songCount}
          </p>
        </div>
      </div>
      <div className="w-full">
        <h2 className="text-xl font-semibold font-sans text-left mt-6">Songs</h2>
        <MusicCarousel data={data.songs} type={"songs"} />
      </div>
    </div>
  );
};

export default AlbumDetails;
