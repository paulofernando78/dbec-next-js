import style from "./Ribbon.module.css";

export const Ribbon = ({
  label,
  bgColor,
  textColor = "#ffffff",
  className,
  children,
}) => {
  return (
    <div
      className={`${style.ribbon} ${className}`}
      style={{ backgroundColor: bgColor, color: textColor }}
    >
      {children ?? label}
    </div>
  );
};
