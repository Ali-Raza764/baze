import PlaylistSongItem from "@/components/feed/playlist/PlaylistSongItem";
import Image from "next/image";
import React from "react";

const editData = (data) => {
  let idArray = [];
  data.forEach((item, i) => {
    idArray[i] = { id: item.id, name: item.name };
  });
  return idArray;
};

const Playlist = async ({ params }) => {
  const res = await fetch(`https://saavn.dev/playlists?id=${params.id}`, {
    cache: "force-cache",
  });
  const result = await res.json();
  const data = result.data;
  const playlist = {
    name: data.name,
    songCount: data.songCount,
    songs: editData(data.songs),
  };

  return (
    <div className="w-full-h-full flex-props-b flex-col md:flex-row p-2">
      <div className="md:w-[50%] max-h-full md:h-[30rem]">
        <Image src={data.image[2].link} alt="Image" width={400} height={400} />
        <h1 className="text-3xl font-semibold font-sans mt-3">{data.name}</h1>
        <div className="w-full flex  gap-x-8">
          <h2 className="text-xl font-semibold font-sans mt-3 text-gray-400">
            Songs: {data.songCount}
          </h2>
          <h2 className="text-xl font-semibold font-sans mt-3 text-gray-400">
            Followers: {data.followerCount}
          </h2>
        </div>
      </div>
      <div className=" w-full md:w-[50%] max-h-full">
        <h2 className="text-3xl font-semibold font-sans mt-3">Songs</h2>
        <div
          className="w-full p-2 playlist-songs-container
        h-[30rem] overflow-y-scroll scrollbar-thumb-blue scrollbar-thumb-rounded scrollbar-w-2 scrolling-touch"
        >
          {data.songs.map((item) => {
            return <PlaylistSongItem key={item.id} data={item} playlist={playlist} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Playlist;
// https://saavn.dev/playlists?id=159144718
