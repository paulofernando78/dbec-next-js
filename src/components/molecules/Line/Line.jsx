import { ContentToken } from "@/components/molecules/ContentToken";

export const Line = ({as: Tag = "span", 
  className,
  ...props}) => {
  return (
    <Tag className={className}>
      <ContentToken {...props} />
    </Tag>
  );
};