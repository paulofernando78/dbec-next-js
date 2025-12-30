
export const Comparison = ({ data = [] }) => {
  return (
    <>
      {Array.isArray(data) &&
        data.map((item, index) => (
          <div key={index}>
            {item.comparison.map((subItem, index) => (
              <p key={index}>
                {subItem.word}{" "}
                <span className="phonetics">{subItem.phonetics}</span>{" "}
                <span className="portuguese">{subItem.translation}</span>
              </p>
            ))}
          </div>
        ))}
    </>
  );
};
