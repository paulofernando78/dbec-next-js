"use client";

import styles from "./contentPage.module.css";

import { Emoji } from "@/components/organisms/Emoji";

export default function Home() {
  return (
    <div className="line-break-double">
      <div className="line-break">
        <div className={styles.welcomeContainer}>
          <Emoji />
        </div>
      </div>
    </div>
  );
}
