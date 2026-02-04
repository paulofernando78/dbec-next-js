import { Audio } from "@/components/atoms/Audio";
import { Bold } from "@/components/atoms/Bold";
import { Italic } from "@/components/atoms/Italic";
import { Mark } from "@/components/atoms/Mark";
import { Underline } from "@/components/atoms/Underline";
import { PartOfSpeech } from "@/components/atoms/PartOfSpeech";
import { Phonetics } from "@/components/atoms/Phonetics";
import { Portuguese } from "@/components/atoms/Portuguese";
import { PortugueseBold } from "@/components/atoms/PortugueseBold";
import { BulletPoint } from "@/components/atoms/BulletPoint";
import { SquarePoint } from "@/components/atoms/SquarePoint";
import { Connector } from "@/components/atoms/Connector";
import {
  Attention,
  USflag,
  UKflag,
  Correct,
  Incorrect,
  Compare,
} from "@/lib/svg-imports";

export const ContentToken = ({ value, text = [] }) => {
  const raw = value ?? text;
  const contentArray = Array.isArray(raw) ? raw : [raw];

  const iconMap = {
    attention: Attention,
    us: USflag,
    uk: UKflag,
    correct: Correct,
    incorrect: Incorrect,
    compare: Compare,
  };

  const legacyFlagMap = {
    usFlag: "us",
    ukFlag: "uk",
    attention: "attention",
    correct: "correct",
    incorrect: "incorrect",
    comparison: "compare",
  };

  const renderIcons = (part) => {
    const icons = [];

    // New schema: icons: ["us", "uk", "correct", etc.]
    if (Array.isArray(part.icons)) {
      part.icons.forEach((name) => {
        const Icon = iconMap[name];
        if (Icon) {
          icons.push(<Icon key={`icon-${name}`} className="icon-position" />);
        }
      });
    }

    // Legacy schema: usFlag, ukFlag, etc.
    Object.entries(legacyFlagMap).forEach(([flag, name]) => {
      if (part[flag] && !part.icons?.includes(name)) {
        const Icon = iconMap[name];
        if (Icon) {
          icons.push(<Icon key={`legacy-${name}`} className="icon-position" />);
        }
      }
    });

    return icons;
  };

  return (
    <span>
      {contentArray.map((part, i) => {
        if (typeof part === "string") return part;

        let content = part.part;

        switch (part.type) {
          case "bold":
            content = <Bold>{part.part}</Bold>;
            break;
          case "italic":
            content = <Italic>{part.part}</Italic>;
            break;
          case "mark":
            content = <Mark>{part.part}</Mark>;
            break;
          case "bold-mark":
            content = (
              <Bold>
                <Mark>{part.part}</Mark>
              </Bold>
            );
            break;
          case "underline":
            content = <Underline>{part.part}</Underline>;
            break;
          case "partOfSpeech":
            content = <PartOfSpeech>{part.part}</PartOfSpeech>;
            break;
          case "phonetics":
            content = <Phonetics>{part.part}</Phonetics>;
            break;
          case "portuguese":
            content = <Portuguese>{part.part}</Portuguese>;
            break;
          case "portuguese-bold":
            content = <PortugueseBold>{part.part}</PortugueseBold>;
            break;
          case "connector":
            content = <Connector>{part.part}</Connector>;
            break;
        }

        return (
          <span key={i}>
            {typeof part === "object" && renderIcons(part)}
            {part.audio && <Audio src={part.audio} />}
            {part.bullet && <BulletPoint />}
            {part.square && <SquarePoint />}
            {content}
          </span>
        );
      })}
    </span>
  );
};
