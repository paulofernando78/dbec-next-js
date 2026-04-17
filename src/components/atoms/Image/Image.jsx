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

  const isImgRatio = ratio === "16-9"

  return (
    <div
    className={`${styles.img} ${isImgRatio ? styles["ratio-16-9"]: ""}`}
    style={wrapperStyle}>
      <img
        src={src}
        alt={alt}
        loading="lazy"
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover", // <img> is inline by default
          display: "block",
        }}
        {...props}
        className={`img ${className ?? ""}`}
      />
    </div>
  );
};
