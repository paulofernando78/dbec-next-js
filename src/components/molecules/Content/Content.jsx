import { Bold } from "@/components/atoms/Bold";
import { Contents } from "@/lib/svg-imports.js"

export const Content = ({ items = [] }) => {
  return (
    <>
      <span>
        <Bold>Contents</Bold>
      </span>
      <nav>
        <ul>
          {items.map((item, index) => (
            <div key={index} className="flex">
              <Contents />
              <li >
                <a href={`#${item.href}`}>{item.label}</a>
              </li>
            </div>
          ))}
        </ul>
      </nav>
    </>
  );
};
