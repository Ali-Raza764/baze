"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import MusicItem from "./song/MusicItem";
import AlbumItem from "./album/AlbumItem";
import ArtistItem from "./artist/ArtistItem";
import PlaylistItem from "./playlist/PlaylistItem";

const MusicCarousel = ({ data, type }) => {
  return (
    <Swiper
      className="w-full mt-3"
      spaceBetween={50}
      slidesPerView={7}
      breakpoints={{
        0: {
          slidesPerView: 2,
        },
        400: {
          slidesPerView: 3,
        },
        639: {
          slidesPerView: 4,
        },
        865: {
          slidesPerView: 4,
        },
        1000: {
          slidesPerView: 7,
        },
        1500: {
          slidesPerView: 8,
        },
        1700: {
          slidesPerView: 9,
        },
      }}
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
    >
      {type == "songs" &&
        data?.map((item) => {
          return (
            <SwiperSlide key={item.id}>
              <MusicItem item={item} />
            </SwiperSlide>
          );
        })}
      {type == "albums" &&
        data?.map((item) => {
          return (
            <SwiperSlide key={item.id}>
              <AlbumItem item={item} />
            </SwiperSlide>
          );
        })}
      {type == "artists" &&
        data?.map((item) => {
          return (
            <SwiperSlide key={item.id}>
              <ArtistItem item={item} />
            </SwiperSlide>
          );
        })}
      {type == "playlists" &&
        data?.map((item) => {
          return (
            <SwiperSlide key={item.id}>
              <PlaylistItem item={item} />
            </SwiperSlide>
          );
        })}
    </Swiper>
  );
};

export default MusicCarousel;
