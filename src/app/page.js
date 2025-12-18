import { Whiteboard } from "@/components/molecules/Whiteboard";
import { Text } from "@/components/molecules/Text";

export default function Home() {
  return (
    <div className="line-break-double">
      <Whiteboard title="Home Page" />
      <div className="line-break">
        <Text playAudio="/audio/welcome.mp3">
          Hey there! Welcome to{" "}
          <span className="bold">DAILY BASIS ENGLISH COURSE</span> website.
          Here, you’ll find a lot of interesting materials. Please, use it
          wisely.
        </Text>
      </div>
    </div>
  );
}
