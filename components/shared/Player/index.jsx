"use client";
import useCurrentSong from "@/store/useCurrentSong";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { AiFillSetting } from "react-icons/ai";
import { FiSliders } from "react-icons/fi";

const Player = () => {
  let { data } = useCurrentSong();
  const [musicData, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`https://saavn.me/songs?id=${data?.id}`);
      const result = await response.json();
      setData(result.data[0]);
    };

    // Set data to null if it's an empty object
    if (data && Object.keys(data).length === 0) {
      data = null;
    }

    // Fetch data if data is not null
    if (data) {
      fetchData();
    }
  }, [data]);

  if (!data || Object.keys(data).length === 0) {
    return;
  }

  return (
    <div className="bg-[#000] w-full flex-props-b h-14 pl-6 md:p-0 border-b">
      <Link href={`/songdetails/${data?.id}`}>
        <div className="flex-props-c gap-x-2">
          {data?.image && (
            <Image
              src={data.image[1].link}
              alt={data.name}
              width={50}
              height={50}
              className="rounded-md cursor-pointer"
            />
          )}
          <div className="flex flex-col">
            <h3 className="text-lg font-semibold font-sans text-ellipsis line-clamp-1 w-[10rem]">
              {data?.name}
            </h3>
            <h4 className="text-sm text-gray-400">
              {data?.primaryArtists && data?.primaryArtists[0].name}
            </h4>
          </div>
        </div>
      </Link>
      <audio
        src={musicData?.downloadUrl[4].link}
        controls
        autoPlay
        title={data?.name || data?.title}
        className="border-none  rounded-none w-full md:w-[28rem] outline-none audio-player"
      ></audio>
      <div className="other hidden md:flex items-center justify-center gap-x-5 mr-3">
        <AiFillSetting className="text-2xl text-[#1ed760]" />
        <FiSliders className="text-2xl text-[#1ed760]" />
      </div>
    </div>
  );
};

export default Player;
