import styles from "./Dialogue.module.css";
import { Italic } from "@/components/atoms/Italic";
import { Bold } from "@/components/atoms/Bold";
import { AudioPlayer } from "@/components/atoms/AudioPlayer";
import { ContentToken } from "@/components/molecules/ContentToken";
import { Image } from "@/components/atoms/Image";

export const Dialogue = ({
  title,
  description,
  audioPlayer,
  imgs = [],
  lines = [],
}) => {
  const lead = description ?? title;

  return (
    <div className="line-break">
      {lead && (
        <p>
          <Italic>{lead}</Italic>
        </p>
      )}
      {Array.isArray(imgs) && imgs.length > 0 && (
        <div className="flex-align">
          {imgs.map((img, index) => (
            <Image
              key={index}
              src={img.img}
              alt={img.alt}
              width={img.width}
              height={img.height}
            />
          ))}
        </div>
      )}
      {audioPlayer && <AudioPlayer src={audioPlayer} />}
      {lines.map((line, index) => (
        <p key={index} className={styles.lines}>
          {line.speaker && <Bold>{line.speaker} </Bold>}
          <ContentToken
            value={line.audio ? [{ audio: line.audio }, ...(line.text || [])] : line.text}
            phonetics={line.phonetics}
            portuguese={line.portuguese}
          />
        </p>
      ))}
    </div>
  );
};
