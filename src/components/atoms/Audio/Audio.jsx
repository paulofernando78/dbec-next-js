"use client";

import { useRef, useState } from "react";
import { PlayAudio, StopAudio } from "@/lib/svg-imports.js";

let currentGlobalAudio = null;

export const Audio = ({ src }) => {
  const audioRef = useRef(null);
  const [playing, setPlaying] = useState(false);

  const handlePlay = () => {
    // audioRef.current?.play();
    // setPlaying(true);

    // grab audio
    const el = audioRef.current;
    if (!el) return;

    // Is there another audio being played?
    if (currentGlobalAudio && currentGlobalAudio !== el) {
      // if so, stop it
      currentGlobalAudio.pause();
      currentGlobalAudio.currentTime = 0;
    }

    el.play();
    currentGlobalAudio = el;
    setPlaying(true);
  };

  const handleStop = () => {
    // audioRef.current?.pause();
    // audioRef.current.currentTime = 0;
    // setPlaying(false);

    const el = audioRef.current;
    if (!el) return;

    el.pause();
    el.currentTime = 0;

    if (currentGlobalAudio === el) {
      currentGlobalAudio = null;
    }

    setPlaying(false);
  };

  const handleEnded = () => {
    const el = audioRef.current;
    if (!el) return;

    if (currentGlobalAudio === el) {
      currentGlobalAudio = null;
    }

    setPlaying(false);
  };

  const handlePause = () => {
    const el = audioRef.current;
    if (!el) return;

    // If this audio was the global one, clear it
    if (currentGlobalAudio === el) {
      currentGlobalAudio = null;
    }

    setPlaying(false);
  };

  return (
    <>
      {playing ? (
        <StopAudio onClick={handleStop} className="icon-position" />
      ) : (
        <PlayAudio onClick={handlePlay} className="icon-position" />
      )}

      <audio
        ref={audioRef}
        src={src}
        preload="metadata"
        onEnded={handleEnded}
        onPause={handlePause}
      />
    </>
  );
};
