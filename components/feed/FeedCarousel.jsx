import React from "react";
import MusicItem from "./song/MusicItem";
import "./Feed.css";
import AlbumItem from "./album/AlbumItem";
import ArtistItem from "./artist/ArtistItem";
import PlaylistItem from "./playlist/PlaylistItem";

const FeedCarousel = ({ data, type }) => {
  return (
    <div className="w-full md:p-4 flex items-center overflow-x-scroll h-full feed-car">
      {/* Ensure that the container has a fixed width */}
      <div className="flex cover">
        {type == "songs" &&
          data?.map((item) => {
            return <MusicItem item={item} key={item.id} />;
          })}
        {type == "albums" &&
          data?.map((item) => {
            return <AlbumItem item={item} key={item.id}/>;
          })}
        {type == "artists" &&
          data?.map((item) => {
            return <ArtistItem item={item} key={item.id}/>;
          })}
        {type == "playlists" &&
          data?.map((item) => {
            return <PlaylistItem item={item} key={item.id}/>;
          })}
      </div>
    </div>
  );
};

export default FeedCarousel;
