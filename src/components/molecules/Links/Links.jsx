import styles from "./Links.module.css";

import Link from "next/link";
import { LinkIcon } from "@/lib/svg-imports";
import { Phonetics } from "@/components/atoms/Phonetics";

export const Links = ({ groups = [] }) => {
  return (
    <div className="line-break">
      {groups.map((group, groupIndex) => (
        <div key={groupIndex}>
          <span className={styles.title}>{group.title}</span>
          <div>
            {(group.items || []).map((item, linkIndex) => (
              <div key={linkIndex}>
                <Link
                  key={linkIndex}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.linkHeight}
                >
                  <LinkIcon className="icon-position" />
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
    </div>
  );
};
