"use client";

import { useRef, useState } from "react";
import { PlayAudio, StopAudio } from "@/lib/svg-imports.js";

export const Audio = ({ src }) => {
  const audioRef = useRef(null);
  const [playing, setPlaying] = useState(false);

  const handlePlay = () => {
    audioRef.current?.play();
    setPlaying(true);
  };

  const handleStop = () => {
    audioRef.current?.pause();
    audioRef.current.currentTime = 0;
    setPlaying(false);
  };

  const handleEnded = () => {
    setPlaying(false);
  };

  return (
    <>
      {playing ? (
        <StopAudio
          onClick={handleStop}
          className="icon-position"
        />
      ) : (
        <PlayAudio
          onClick={handlePlay}
          className="icon-position" />
      )}

      <audio ref={audioRef} src={src}
      preload="metadata"
      onEnded={handleEnded} />
    </>
  );
};
