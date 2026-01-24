import { Bold } from "@/components/atoms/Bold";

export const PortugueseBold = ({ children, className = "" }) => {
  return <span className={`portuguese ${className}`.trim()}><Bold>{children}</Bold></span>;
};
