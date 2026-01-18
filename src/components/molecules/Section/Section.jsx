import { Ribbon } from "@/components/atoms/Ribbon/";

export const Section = ({ id, label, heading = 2, children }) => {
  const HeadingTag = `h${heading}`;

  return (
    <section id={id} className="line-break">
      <Ribbon>
        <HeadingTag>{label}</HeadingTag>
      </Ribbon>
      {children}
    </section>
  );
};
