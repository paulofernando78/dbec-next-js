import { ContentToken } from "@/components/molecules/ContentToken";

export const Line = ({as: Tag = "p", ...props}) => {
  return (
    <Tag>
      <ContentToken {...props} />
    </Tag>
  );
};