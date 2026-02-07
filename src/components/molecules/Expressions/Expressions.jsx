import { ContentToken } from "@/components/molecules/ContentToken";

export const Expressions = ({ value = [] }) => {
  return (
    <p>
      <ContentToken value={value} />
    </p>
  );
};
