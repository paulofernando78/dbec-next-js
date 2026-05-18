import { ContentToken } from "@/components/molecules/ContentToken";

export const Line = ({
  className,
  as: Tag = "span",
  ...props
}) => {
  return (
  <Tag>
    <ContentToken {...props} />
  </Tag>
  );
};
