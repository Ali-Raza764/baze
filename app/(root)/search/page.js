"use client";
import AlbumItem from "@/components/feed/album/AlbumItem";
import ArtistItem from "@/components/feed/artist/ArtistItem";
import PlaylistItem from "@/components/feed/playlist/PlaylistItem";
import MusicItem from "@/components/feed/song/MusicItem";
import { useEffect, useState } from "react";
import { FaSpinner } from "react-icons/fa";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

const Loader = () => {
  return (
    <div className="w-full h-full flex-props-c">
      <FaSpinner size={50} className="text-green-500 animate-spin" />
    </div>
  );
};
const Search = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [tab, setTab] = useState(0);
  const [query, setQuery] = useState("");
  const [count, setCount] = useState(10);

  const fetchData = async () => {
    const search = query;
    if (search) {
      try {
        setLoading(true);
        const res = await fetch(
          `https://saavn.dev/search/${
            tab == 0
              ? "songs"
              : tab === 1
              ? "albums"
              : tab === 2
              ? "artists"
              : tab === 3
              ? "playlists"
              : "all"
          }?query=${search}&limit=${count}`
        );
        const data = await res.json();
        setData(data.data);
      } catch (error) {
        console.error;
      } finally {
        setLoading(false);
      }
    }
  };
  useEffect(() => {
    if (query) {
      fetchData();
    }
  }, [tab]);

  return (
    <>
      <div className="seacrh w-full px-3 flex gap-x-3 mb-3">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            fetchData();
          }}
          className="w-full "
        >
          <input
            type="search"
            name="search"
            id="search"
            placeholder="Songs, Albums, Artists"
            className="outline-none bg-gray-600 p-2 text-xl rounded-2xl w-full"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </form>
        <input
          type="number"
          name="song-count"
          id="song-count"
          className="outline-none bg-gray-600 p-2 text-xl rounded-2xl w-[8%]"
          value={count}
          onChange={(e) => setCount(e.target.value)}
        />
      </div>
      <Tabs
        defaultIndex={tab}
        onSelect={(index) => {
          setTab(index);
          setData(null);
        }}
      >
        <TabList>
          <Tab>Songs</Tab>
          <Tab>Albums</Tab>
          <Tab>Artists</Tab>
          <Tab>Playlists</Tab>
        </TabList>

        <TabPanel>
          <h2 className="text-2xl font-semibold font-sans">Songs</h2>
          {loading && <Loader />}
          <div className="w-full flex-props-c flex-wrap p-2 gap-3">
            {!loading &&
              data &&
              data.results.map((song) => (
                <MusicItem item={song} key={song.id} />
              ))}
          </div>
        </TabPanel>
        <TabPanel>
          <h2 className="text-2xl font-semibold font-sans">Albums</h2>
          {loading && <Loader />}
          <div className="w-full flex-props-c flex-wrap p-2 gap-3">
            {!loading &&
              data &&
              data.results.map((song) => (
                <AlbumItem item={song} key={song.id} />
              ))}
          </div>
        </TabPanel>
        <TabPanel>
          <h2 className="text-2xl font-semibold font-sans">Artists</h2>
          {loading && <Loader />}
          <div className="w-full flex-props-c flex-wrap p-2 gap-3">
            {!loading &&
              data &&
              data.results.map((song) => (
                <ArtistItem item={song} key={song.id} />
              ))}
          </div>
        </TabPanel>
        <TabPanel>
          <h2 className="text-2xl font-semibold font-sans">Playlists</h2>
          {loading && <Loader />}
          <div className="w-full flex-props-c flex-wrap p-2 gap-3">
            {!loading &&
              data &&
              data.results.map((song) => (
                <PlaylistItem item={song} key={song.id} />
              ))}
          </div>
        </TabPanel>
      </Tabs>
    </>
  );
};

export default Search;
