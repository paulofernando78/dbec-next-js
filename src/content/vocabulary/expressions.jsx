import { Whiteboard } from "@/components/molecules/Whiteboard";
import { Text } from "@/components/molecules/Text";
import { Portuguese } from "@/components/atoms/Portuguese";
import { Bold } from "@/components/atoms/Bold";

export default function Expressions() {
  return (
    <>
      <Whiteboard title="Vocabulary" subtitle="For / To" />
      <div className="line-break">
        <Text playAudio="/audio/general/common-expressions.mp3"><Bold>Common expressions:</Bold></Text>
        <div>
          <Text>every now and then - de vez em quando</Text>
          <Text>all of a sudden - de uma hora para outra</Text>
          <Text>every other day - um dia sim um dia não</Text>
          <Text>anyway - enfim, de qualquer forma</Text>
          <Text>once and for all - de uma vez por todas</Text>
          <Text>thank god - graça a deus</Text>
        </div>
      </div>
    </>
  );
}
