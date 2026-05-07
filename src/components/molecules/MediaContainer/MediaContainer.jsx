import { VideoPlayer } from "@/components/atoms/VideoPlayer";
import { MediaLayout } from "@/components/molecules/MediaLayout";
import { Image } from "@/components/atoms/Image";
import { Line } from "@/components/molecules/Line";
import { Paragraph } from "@/components/molecules/Paragraph";
import { dictionary } from "@/helpers/content";

export const MediaContainer = ({
  groups = [],
}) => {
  return (
    <div className="line-break">
      {groups.map((item, index) => (
        <MediaLayout className="border"
          mediaPosition={item.mediaPosition}
          key={index}
        >
          {item.img && (
            <Image
              src={dictionary(item.img)}
              alt=""
              width={250}
              height={250}
            />
          )}

          <div>
            {item.line && (
              <Line value={item.line} />
            )}
  
            {item.paragraph && (
              <Paragraph value={item.paragraph} />
            )}
          </div>
        </MediaLayout>
      ))}
    </div>
  );
};
