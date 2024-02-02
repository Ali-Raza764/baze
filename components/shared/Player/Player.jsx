// CustomAudioPlayer.js
import { useState, useEffect, useRef } from "react";
import { AiFillSetting } from "react-icons/ai";
import { FiSliders } from "react-icons/fi";

const CustomAudioPlayer = ({ musicData }) => {
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const audioRef = useRef();

  useEffect(() => {
    const audio = audioRef.current;

    const handleTimeUpdate = () => {
      setCurrentTime(audio.currentTime);
      setDuration(audio.duration);
    };

    const handlePlayPause = () => {
      setIsPlaying(!isPlaying);
      if (isPlaying) {
        audio.pause();
      } else {
        audio.play();
      }
    };

    const handleSeek = (e) => {
      const { duration, currentTime } = audio;
      const newTime = (e.nativeEvent.offsetX / e.target.clientWidth) * duration;
      setCurrentTime(newTime);
      audio.currentTime = newTime;

      if (!isPlaying) {
        audio.play();
      }
    };

    audio.addEventListener("timeupdate", handleTimeUpdate);

    return () => {
      audio.removeEventListener("timeupdate", handleTimeUpdate);
    };
  }, [isPlaying]);

  return (
    <div className="w-full flex items-center justify-between">
      <div className="flex items-center gap-x-2">
        {/* Display song image */}
        {musicData?.image && (
          <img
            src={musicData.image[1].link}
            alt={musicData.name}
            className="rounded-md cursor-pointer"
            width={50}
            height={50}
          />
        )}
        {/* Display song details */}
        <div className="flex flex-col">
          <h3 className="text-lg font-semibold text-ellipsis line-clamp-1 w-[10rem]">
            {musicData?.name || musicData.title}
          </h3>
          <h4 className="text-sm text-gray-400">
            {(musicData?.primaryArtists &&
              musicData?.primaryArtists[0].name) ||
              musicData?.primaryArtists}
          </h4>
        </div>
      </div>

      {/* Audio controls and progress bar */}
      <div className="flex flex-col items-center">
        <div className="w-full relative cursor-pointer" onClick={handleSeek}>
          <div className="bg-gray-300 h-1 rounded-full">
            <div
              className="bg-[#1ed760] h-1 rounded-full"
              style={{
                width: `${(currentTime / duration) * 100}%`,
              }}
            ></div>
          </div>
        </div>
        <audio
          ref={audioRef}
          src={musicData?.downloadUrl[4].link}
          controls
          autoPlay
          className="border-none outline-none rounded-none w-full"
        ></audio>
      </div>

      {/* Control buttons */}
      <div className="flex items-center gap-x-5">
        <AiFillSetting
          className="text-2xl text-[#1ed760] cursor-pointer"
          onClick={handleSettingsClick}
        />
        <FiSliders
          className="text-2xl text-[#1ed760] cursor-pointer"
          onClick={handleSlidersClick}
        />
      </div>
    </div>
  );
};

export default CustomAudioPlayer;
