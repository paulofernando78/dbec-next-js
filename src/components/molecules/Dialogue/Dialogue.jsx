import styles from "./Dialogue.module.css";
import { Italic } from "@/components/atoms/Italic";
import { Bold } from "@/components/atoms/Bold";
import { AudioPlayer } from "@/components/atoms/AudioPlayer";
import { ContentToken } from "@/components/molecules/ContentToken";

export const Dialogue = ({ description, audioPlayer, lines = [] }) => {
  return (
    <div className="line-break">
      <p><Italic>{description}</Italic></p>
      <AudioPlayer src={audioPlayer}/>
      {lines.map((line, index) => (
        <p key={index} className={styles.lines}>
          {line.speaker && <Bold>{line.speaker} </Bold>}
          <ContentToken
            value={line.text}
            phonetics={line.phonetics}
            portuguese={line.portuguese}
          />
        </p>
      ))}
    </div>
  );
};
