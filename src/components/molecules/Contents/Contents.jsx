import { Bold } from "@/components/atoms/Bold";
import { InlineText } from "@/components/molecules/InlineText";
import { Content, ContentLink } from "@/lib/svg-imports.js";

export const Contents = ({ items = [] }) => {
  return (
    <>
      <div className="flex-align">
        <Content />
        <span>
          <Bold>Contents</Bold>
        </span>
      </div>
      <nav>
        <ul>
          {items.map((item, index) => (
            <div key={index} className="flex-align">
              <li className={item.lineBreak ? "line-break-item" : ""}>
                {!item.lineBreak && <ContentLink className="icon-position" />}
                <a href={`#${item.href}`}>
                  {item.label}
                  {Array.isArray(item.label) ? (
                    <InlineText text={item.label} />
                  ) : (
                    item.label
                  )}
                </a>
              </li>
            </div>
          ))}
        </ul>
      </nav>
    </>
  );
};
