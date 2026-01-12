import { Ribbon } from "@/components/atoms/Ribbon/";

export const Section = ({ label, heading = 2, children }) => {
  const HeadingTag = `h${heading}`;

  return (
    <section className="line-break">
      <Ribbon>
        <HeadingTag>{label}</HeadingTag>
      </Ribbon>
      {children}
    </section>
  );
};
