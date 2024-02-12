"use client";
import { MusicCarousel } from "@/components";
import Image from "next/image";
import { useState } from "react";

const GenreBox = ({ genre, color }) => (
  <div
    className="m-2 rounded-md shadow-md w-[10rem] h-[10rem]"
    style={{ backgroundColor: color }}
  >
    <h3 className="flex items-center justify-center h-12 text-2xl font-semibold font-sans text-left w-full text-black">
      {genre}
    </h3>
  </div>
);

const Search = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchData = async (e) => {
    e.preventDefault();
    const search = e.target.search.value;
    if (search) {
      try {
        // Show loader before fetching data
        setLoading(true);
        const res = await fetch(`https://saavn.dev/search/all?query=${search}`);
        const data = await res.json();
        setData(data.data);
      } catch (error) {
        console.error;
      } finally {
        // Hide loader after data fetching is done
        setLoading(false);
      }
    }
  };

  return (
    <div className="w-full min-h-screen">
      <div className="seacrh w-full p-2 px-4">
        <form onSubmit={fetchData}>
          <input
            type="search"
            name="search"
            id="search"
            placeholder="Songs, Albums, Artists"
            className="outline-none bg-gray-600 p-2 text-xl rounded-2xl w-full mb-3"
          />
        </form>
      </div>
      {!data ? (
        <div className="w-full">
          <h1 className="text-3xl font-bold font-sans">
            Search <strong className="text-green-500">Now</strong>
          </h1>
          <div className="flex flex-wrap justify-around mt-3">
            <GenreBox genre="Songs" color="#E6E1F0" />
            <GenreBox genre="Playlists" color="#F4E9F4" />
            <GenreBox genre="Artists" color="#F0E9F4" />
            <GenreBox genre="Albums" color="#E9F4F2" />
          </div>
        </div>
      ) : !loading ? (
        <div className="results h-full w-full flex flex-col">
          <div className="songs">
            <h2 className="text-3xl font-semibold font-sans mt-5">Songs</h2>
            <MusicCarousel data={data?.songs?.results} type={"songs"} />
          </div>
          <div className="albums">
            <h2 className="text-3xl font-semibold font-sans mt-5">Albums</h2>
            <MusicCarousel data={data?.albums?.results} type={"albums"} />
          </div>
          <div className="albums">
            <h2 className="text-3xl font-semibold font-sans mt-5">Artists</h2>
            <MusicCarousel data={data?.artists?.results} type={"artists"} />
          </div>
        </div>
      ) : (
        ""
      )}
      {/* Loader */}
      {loading && (
        <div className="h-[80vh] w-full flex items-center justify-center">
          <Image
            src={"/assets/WMDx.gif"}
            alt="Loading..."
            width={100}
            height={100}
          />
        </div>
      )}
    </div>
  );
};

export default Search;
