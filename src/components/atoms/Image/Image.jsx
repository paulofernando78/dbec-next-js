import { toCssUnit } from "../../../utils/toCssUnit";

export const Image = ({
  src,
  alt = "",
  ratio = "1 / 1",
  width,
  height,
  className,
  ...props
}) => {
  const wrapperStyle = {
    aspectRatio: ratio,
    ...(width != null && { width: toCssUnit(width) }),
    ...(height != null && { height: toCssUnit(height) })
  }

  return (
    <div
        style={wrapperStyle}
        >
      <img
        src={src}
        alt={alt}
        loading="lazy"
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover", // <img> is inline by default
          display: "block"
        }}
        {...props}
        className={`img ${className ?? ""}`}
      />
    </div>
  );
};
