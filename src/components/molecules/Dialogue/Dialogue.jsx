import styles from "./Dialogue.module.css";
import { Bold } from "@/components/atoms/Bold";
import { AudioPlayer } from "@/components/atoms/AudioPlayer";
import { ContentToken } from "@/components/molecules/ContentToken";

export const Dialogue = ({ title, speaker, lines = [] }) => {
  return (
    <div className="line-break">
      {lines.map((line, index) => (
        <p key={index} className={styles.lines}>
          {line.speaker && <Bold>{line.speaker}:{" "}</Bold>}
          <ContentToken
            value={line.line}
            phonetics={line.phonetics}
            portuguese={line.portuguese}
          />
        </p>
      ))}
    </div>
  );
};
