export const Checklist = ({ items = [] }) => {
  return (
    <>
      {items.map((item, index) => (
        <span key={index} className="block flex">
          <input id={`item-${index}`} type="checkbox" />
          <label htmlFor={`item-${index}`}>{item.item}</label>
        </span>
      ))}
    </>
  );
};
