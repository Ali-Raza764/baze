"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import MusicItem from "./MusicItem";
import AlbumItem from "./AlbumItem";
import ArtistItem from "./ArtistItem";

const MusicCarousel = ({ data, type }) => {
  return (
    <Swiper
      className="w-full mt-6"
      autoplay
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
    </Swiper>
  );
};

export default MusicCarousel;
