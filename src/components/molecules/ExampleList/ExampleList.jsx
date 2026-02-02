import { ContentToken } from "@/components/molecules/ContentToken";

export const ExampleList = ({ items = [] }) => {
  return (
    <div>
      {items.map((value, i) => (
        <p key={i}>
          <ContentToken value={value} />
        </p>
      ))}
    </div>
  );
};
