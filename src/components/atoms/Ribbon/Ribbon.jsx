import style from "./Ribbon.module.css";

export const Ribbon = ({
  className,
  bgColor,
  textColor = "#ffffff",
  children,
}) => {
  return (
    <div
      className={`${style.ribbon} ${className}`}
      style={{ backgroundColor: bgColor, color: textColor }}
    >
      {children}
    </div>
  );
};
