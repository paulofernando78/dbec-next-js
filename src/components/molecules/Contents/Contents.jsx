import { Bold } from "@/components/atoms/Bold";
import { ContentToken } from "@/components/molecules/ContentToken";
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
          {items.map((item, index) => {
            const key = item.href || item.id || `item-${index}`

            return (
                <li
                key={key}
                className={`flex-align ${item.lineBreak ? "line-break-item" : ""}`}>
                  {!item.lineBreak && <ContentLink className="icon-position" />}
                  <a href={`#${item.href}`}>
                    {Array.isArray(item.label) ? (
                      <ContentToken text={item.label} />
                    ) : (
                      item.label
                    )}
                  </a>
                </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
};
