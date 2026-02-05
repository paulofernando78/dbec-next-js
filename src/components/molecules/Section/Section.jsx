import styles from "./Section.module.css"

import { Ribbon } from "@/components/atoms/Ribbon/";

export const Section = ({ id, label, heading = 2, children }) => {
  const HeadingTag = `h${heading}`;

  return (
    <section id={id} className={styles.scrollOffset}>
      <Ribbon className="line-break-item">
        <HeadingTag>{label}</HeadingTag>
      </Ribbon>
      {children}
    </section>
  );
};
