import Image from "next/image";
import React from "react";
import { FaPlay, FaDownload } from "react-icons/fa"; // Import play and download icons

const SongDetails = async ({ params }) => {
  const response = await fetch(`https://saavn.dev/songs?id=${params.songId}`);
  const result = await response.json();
  const data = result.data[0];

  return (
    <div className="w-full flex flex-col md:flex-row  gap-x-4 text-white rounded-lg shadow-md">
      <Image
        src={data.image[2].link}
        alt="Cover Image"
        width={500}
        height={500}
        objectFit="cover"
        className="rounded-lg h-[20rem]"
      />
      <div className="flex justify-start items-start flex-col gap-y-2 w-full">
        <h1 className="text-2xl font-semibold font-sans text-left line-clamp-2 text-ellipsis">
          {data.name}
        </h1>
        <h2 className="text-xl text-gray-400 font-semibold line-clamp-1 text-ellipsis text-left">
          {data.primaryArtists}
        </h2>
        <p className="text-sm text-gray-500">
          {data.album.name} - {data.year}
        </p>
        <div className="flex items-center gap-x-4 mt-2">
          <button className="bg-green-500 p-4 rounded-full">
            <FaPlay size={32} />
          </button>
          <a href={data.downloadUrl[4].link} download>
            <button className="flex items-center gap-x-2 bg-blue-500 px-4 py-2 rounded-md">
              <FaDownload />
              <span>Download</span>
            </button>
          </a>
        </div>
        <p className="copyright text-sm font-sans text-gray-400 text-ellipsis line-clamp-1">
          {data.copyright}
        </p>
      </div>
    </div>
  );
};

export default SongDetails;
