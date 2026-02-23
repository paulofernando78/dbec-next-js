export const toCssUnit = (value) => {
  if (value == null) return undefined;
  return typeof value === "number" ? `${value}px` : value;
};
