"use client";

import styles from "./Image.module.css";
import { useState, useRef, useEffect } from "react";
import { toCssUnit } from "../../../utils/toCssUnit";

export const Image = ({
  src,
  alt = "",
  width,
  height,
  className,
  ratio,
  ...props
}) => {
  const [loading, setLoading] = useState(true);
  const imgRef = useRef(null);

  useEffect(() => {
    setLoading(true);

    if (imgRef.current?.complete) {
      setLoading(false);
    }
  }, [src]);

  const wrapperStyle = {
    ...(width != null && { width: toCssUnit(width) }),
    ...(height != null && { height: toCssUnit(height) }),
  };

  const isImgRatio = ratio === "16-9";

  return (
    <div
      className={`${styles.img} ${isImgRatio ? styles["ratio-16-9"] : ""}`}
      style={wrapperStyle}
    >
      {loading && <div className={styles.spinner}></div>}

      <img
        ref={imgRef}
        src={src}
        alt={alt}
        loading="lazy"
        onLoad={() => setLoading(false)}
        onError={() => setLoading(false)}
        style={{ opacity: loading ? 0 : 1 }}
        {...props}
        className={`img ${className ?? ""}`}
      />
    </div>
  );
};
