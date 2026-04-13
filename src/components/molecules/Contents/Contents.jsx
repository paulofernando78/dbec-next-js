import styles from "./Contents.module.css";

import { Fragment } from "react";
import { Bold } from "@/components/atoms/Bold";
import { ContentToken } from "@/components/molecules/ContentToken";
import { Content, ContentLink } from "@/lib/svg-imports.js";

export const Contents = ({ items = [] }) => {
  return (
    <>
      <div className="flex-align">
        <Content />
        <span>
          <Bold>Contents</Bold>
        </span>
      </div>
      <nav>
        <ul>
          {items.map((item, index) => {
            const key = item.href || item.id || `item-${index}`;

            return (
              <Fragment key={key}>
                {item.title && (
                  <span className={styles.title}>
                    <ContentToken text={item.title} />
                  </span>
                )}

                {item.href && (
                  <li className="flex-align">
                    <ContentLink className="icon-position" />
                    <a href={`#${item.href}`}>
                      {Array.isArray(item.label) ? (
                        <ContentToken text={item.label} />
                      ) : (
                        item.label
                      )}
                    </a>
                  </li>
                )}
              </Fragment>
            );
          })}
        </ul>
      </nav>
    </>
  );
};
