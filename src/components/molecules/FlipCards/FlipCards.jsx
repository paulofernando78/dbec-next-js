import { GridLayout } from "@/components/molecules/GridLayout";
import { FlipCard } from "@/components/molecules/FlipCard";

export const FlipCards = ({ cards = [] }) => {
  return (
    <GridLayout>
      {cards.map((card, index) => (
        <FlipCard key={index} {...card} />
      ))}
    </GridLayout>
  );
};
