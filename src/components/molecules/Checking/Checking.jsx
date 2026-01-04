import styles from "./Checking.module.css";

import { Bold } from "@/components/atoms/Bold";
import { BulletPoint } from "@/components/atoms/BulletPoint";

export const Checking = ({ type, ccq = [] }) => {
  return (
    <div>
      <div className={styles.header}>
        <Bold>{type}</Bold>
      </div>

      <div className={`${styles.card} line-break`}>
        {ccq.map((d, dIndex) => (
          <div key={dIndex}>
            {(d.block || []).map((b, bIndex) => (
              <div key={bIndex}>
                <p>{b.example}</p>

                {(b.questions || []).map((q, qIndex) => (
                  <p key={qIndex}>
                    <BulletPoint /> {q.question}
                  </p>
                ))}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};
