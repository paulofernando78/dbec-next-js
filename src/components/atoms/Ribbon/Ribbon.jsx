import style from "./Ribbon.module.css"

export const Ribbon = ({ className, bgColor, label, textColor = "#ffffff" }) => {
  return (
    <div className={`${style.ribbon} ${className}`} style={{backgroundColor: bgColor, color: textColor}}>
      <span className={style.label}>{label}</span>
    </div>
  )
}