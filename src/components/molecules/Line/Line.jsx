import { InlineText } from "@/components/molecules/InlineText";

export const Line = ({ value, className = "" }) => {
  return (
    <p className={className}>
      <InlineText value={value} />
    </p>
  );
};