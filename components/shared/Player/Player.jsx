import { useRef, useState } from "react";
import { BiSolidDownload, BiLoader } from "react-icons/bi";
import Image from "next/image";
import Link from "next/link";
import JsFileDownloader from "js-file-downloader";
import { FaPause, FaPlay, FaVolumeUp } from "react-icons/fa";
import { GiNextButton, GiPreviousButton } from "react-icons/gi";
import useCurrentPlaylist from "@/store/useCurrentPlaylist";
import Playlist from "./Playlist";

const Player = ({ name, images, artist, url, id }) => {
  const [progress, setProgress] = useState("0");
  const [playing, setPlaying] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [downloading, setDownloading] = useState(false);
  const audio = useRef();
  const { currentPlaylist, currentSongId, updateCurrentSong } =
    useCurrentPlaylist();

  const togglePlaying = () => {
    setPlaying((prevPlaying) => {
      const newState = !prevPlaying;
      newState ? audio.current.play() : audio.current.pause();
      return newState;
    });
  };

  const handleVolume = (e) => {
    audio.current.volume = e.target.value / 100;
  };

  const handleSliderChange = (e) => {
    const newProgress = e.target.value;
    setProgress(newProgress);
    if (!isDragging) {
      audio.current.currentTime = (newProgress * audio.current.duration) / 100;
    }
  };

  const handleSliderInteractionStart = () => {
    setIsDragging(true);
  };

  const handleSliderInteractionEnd = () => {
    setIsDragging(false);
    audio.current.currentTime = (progress * audio.current.duration) / 100;
  };

  const handleTimeUpdate = () => {
    if (!isDragging) {
      setProgress((audio.current.currentTime / audio.current.duration) * 100);
    }
  };

  const changeSong = () => {
    if (currentPlaylist && currentSongId) {
      const currentIndex = currentPlaylist.songs.findIndex(
        (song) => song.id === currentSongId
      );
      if (currentIndex === currentPlaylist.songs.length - 1) {
        return;
      }
      const newIndex = currentIndex + 1;
      const newSongId = currentPlaylist.songs[newIndex].id;
      updateCurrentSong(newSongId);
    }
  };

  const handleDownload = () => {
    new JsFileDownloader({
      onloadstart: () => setDownloading(true),
      url,
      filename: name + ".m4a",
      forceDesktopMode: true,
    })
      .then(() => setDownloading(false))
      .catch((error) => console.error(error));
  };

  return (
    <div className="h-[10vh] shadow-md md:shadow-none shadow-gray-500 w-full flex justify-between items-center bg-black border-b md:border-none">
      <Link href={`/songdetails/${id}`} className="flex">
        <Image
          src={images[1].link}
          alt="Img"
          width={50}
          height={50}
          className="h-12 w-12 rounded-sm mr-1"
        />
        <div className="flex flex-col">
          <h3 className="w-[32vw] md:w-[17vw] line-clamp-1 text-ellipsis font-semibold font-sans">
            {name}
          </h3>
          <p className="w-[32vw] md:w-[17vw] line-clamp-1 text-ellipsis text-sm text-gray-400">
            {artist}
          </p>
        </div>
      </Link>

      <div className="controls flex flex-col items-center justify-center md:w-[50%] w-[50%]">
        <input
          type="range"
          name="slider"
          id="slider"
          min={0}
          max={100}
          step={1}
          value={parseInt(progress)}
          onChange={handleSliderChange}
          onMouseDown={handleSliderInteractionStart}
          onMouseUp={handleSliderInteractionEnd}
          onTouchStart={handleSliderInteractionStart}
          onTouchEnd={handleSliderInteractionEnd}
          className="w-full cursor-pointer mb-1 song-slider"
        />
        <audio
          src={url}
          ref={audio}
          autoPlay
          onPause={() => setPlaying(false)}
          onPlay={() => setPlaying(true)}
          onTimeUpdateCapture={handleTimeUpdate}
          onEnded={changeSong}
        ></audio>
        <div className="flex items-center justify-between md:justify-center w-full px-1">
          <div className="audio-controls flex items-center gap-x-3">
            <div className="cursor-pointer">
              <GiPreviousButton size={20} />
            </div>
            <div className="cursor-pointer" onClick={togglePlaying}>
              {playing ? <FaPause size={20} /> : <FaPlay size={20} />}
            </div>
            <div className="cursor-pointer">
              <GiNextButton size={20} onClick={changeSong} />
            </div>
          </div>
          <div className="md:hidden">
            <Playlist
              songs={currentPlaylist.songs}
              name={currentPlaylist.name}
              currentSongId={currentSongId}
            />
          </div>
          <button
            onClick={handleDownload}
            disabled={downloading}
            className="md:hidden"
          >
            {downloading ? (
              <BiLoader className="animate-spin" size={25} />
            ) : (
              <BiSolidDownload size={25} />
            )}
          </button>
        </div>
      </div>
      <div className="other md:flex-props-b  hidden md:flex gap-x-5">
        <Playlist
          songs={currentPlaylist.songs}
          name={currentPlaylist.name}
          currentSongId={currentSongId}
        />
        <div className="volume relative w-full h-full">
          <button className="w-full toggle-volume">
            <FaVolumeUp size={25} />
          </button>
          <input
            type="range"
            name="volume"
            id="volume"
            min={0}
            defaultValue={50}
            max={100}
            onChange={handleVolume}
            className="volume-slider absolute -top-[4.2rem] -right-[3.4rem] hidden"
          />
        </div>
        <button onClick={handleDownload} disabled={downloading}>
          {downloading ? (
            <BiLoader className="animate-spin" size={25} />
          ) : (
            <BiSolidDownload size={25} />
          )}
        </button>
      </div>
    </div>
  );
};

export default Player;
