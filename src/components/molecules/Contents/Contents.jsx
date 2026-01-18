import { Bold } from "@/components/atoms/Bold";
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
              <ContentLink />
              <li>
                <a href={`#${item.href}`}>{item.label}</a>
              </li>
            </div>
          ))}
        </ul>
      </nav>
    </>
  );
};
