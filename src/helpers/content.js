export function baseToken({
  icons = [],
  audio,
  bullet = true,
  parts = [],
  phonetics,
  pt,
  connector,
  square = true,
  lineBreak,
}) {
  const blocks = [];

  if (Array.isArray(icons) && icons.length > 0) {
    blocks.push({ icons });
  }

  if (audio) {
    blocks.push({ audio });
  }

  if (bullet) {
    blocks.push({ bullet: true });
    blocks.push(" ");
  }

  parts.forEach((p) => {
    blocks.push(p);
  });

  if (parts.length > 0) {
    blocks.push(" ");
  }

  if (phonetics) {
    blocks.push({ part: phonetics, type: "phonetics" });
  }

  blocks.push(" ");

  if (pt) {
    blocks.push({ part: pt, type: "portuguese" });
  }
  blocks.push(" ");

  if (connector) {
    blocks.push({ part: connector, type: "connector" });
  }

  if (square) {
    blocks.push({ square: true });
  }
  blocks.push(" ");

  if (lineBreak) {
    blocks.push({ lineBreak: true });
  }

  return blocks;
}

export const instruction = (opts) =>
  baseToken({
    ...opts,
    icons: [attention],
    square: false,
  });

export const note = (opts) =>
  baseToken({
    ...opts,
    icons: ["attention"],
    bullet: false,
    square: false,
  });

export const word = (opts) =>
  baseToken({
    ...opts,
    square: false,
  });

export const wordRowList = (opts) =>
  baseToken(
    {
      ...opts,
      bullet: false,
      square: true,
    },
  );

export const wordColumnList = (opts) =>
  baseToken({
    ...opts,
    bullet: false,
  });

export const wordComparison = ({ left, right }) => [
  ...wordRowList({ ...left, square: false }),
  {
    part: "vs ",
    type: "connector",
  },
  ...wordRowList({ ...right, square: false }),
  { lineBreak: true },
];
export const example = (opts) =>
  baseToken({
    ...opts,
    bullet: true,
    square: false,
  });
