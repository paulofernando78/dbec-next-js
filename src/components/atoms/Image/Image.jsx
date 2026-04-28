import styles from "./Image.module.css";

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
      {/* Regex: \.[a-z0-9]+$/i
          \\. = literal dot (.)
          [a-z0-9]+ = one or more letters/numbers (jpg, png, webp)
          $    = must be at the end of the string
          i    = case-insensitive (PNG, JPG)
          Used to detect if src already has a file extension.
      */}
      <img
        src={/\.[a-z0-9]+$/i.test(src) ? src : `${src}.avif`}
        alt={alt}
        loading="lazy"
        // If no extension was provided and .avif fails, fallback to .webp
        onError={(e) => {
          if (!/\.[a-z0-9]+$/i.test(src)) {
            e.currentTarget.onerror = null;
            e.currentTarget.src = `${src}.webp`;
          }
        }}
        {...props}
        className={`img ${className ?? ""}`}
      />
    </div>
  );
};
