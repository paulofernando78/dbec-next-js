import styles from "./DialogueLesson.module.css";
import { Image } from "@/components/atoms/Image";
import { AudioPlayer } from "@/components/atoms/AudioPlayer";
import { Dialogue } from "@/components/molecules/Dialogue";
import {
  content,
  icon,
  audio,
  bold,
  italic,
  underline,
  portuguese,
} from "@/helpers/content";

export const DialogueLesson = ({ imgSrc, imgAlt, description, audioPlayer, lines = [], speaker }) => {
  return (
    <div className="line-break">
      <Image
        src={imgSrc}
        alt={imgAlt}
        ratio="16-9"
      />
      <div>
        <p><b>Listen to the dialogue.</b></p>
        <p><em>{description}</em></p>
      </div>
      {audioPlayer && <AudioPlayer src={audioPlayer} />}
      <Dialogue lines={lines} />
    </div>
  );
};
