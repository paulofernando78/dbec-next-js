import Whiteboard from "@/components/molecules/Whiteboard";
import Ribbon from "@/components/atoms/Ribbon";
import Card from "@/components/atoms/Card";
import Paragraph from "@/components/molecules/Whiteboard/Paragraph";
import AudioPlayer from "@/components/atoms/AudioPlayer/AudioPlayer";

export default function Mock() {
  return (
    <>
      <Whiteboard
        title="Title (Mock)"
        subtitle="Subtitle"
        description="Description"
      />
      <div className="line-break">
      <Paragraph>
        <span className="red-5 bold italic underlined">Lorem</span> ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </Paragraph>
      <Ribbon label="CARD"/>
      <Card>Hi! Welcome to your student’s website. Here, you’ll find a lot of interesting materials. Please, use it wisely.</Card>
      <Ribbon label="PARAGRAPH"/>
      <AudioPlayer src=""/>
      <Paragraph imgSrc="/img/paragraph-1.avif" imgAlt="Paragraph pic 1" imgPosition="left">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Paragraph>
      </div>
    </>
    
  )
}




