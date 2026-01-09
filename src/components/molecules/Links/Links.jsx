import styles from "./Links.module.css";

import Link from "next/link";
import { Phonetics } from "@/components/atoms/Phonetics";

export const Links = ({ groups = [] }) => {
  return (
    <>
      {groups.map((group, groupIndex) => (
        <div key={groupIndex}>
          <span className={styles.title}>{group.title}</span>
          <div>
            {(group.items || []).map((item, linkIndex) => (
              <div key={linkIndex}>
                <Link
                  key={linkIndex}
                  href={item.href}
                  className={styles.linkHeight}
                >
                  {item.label}
                  <span>
                  <Phonetics>{item.phonetics}</Phonetics>
                  </span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      ))}
    </>
  );
};
