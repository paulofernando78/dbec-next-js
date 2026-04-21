//! Layout tokens
// icons
// audio
// bullet
// square
// lineBreak

//! Content tokens
// bold
// italic
// mark
// underline
// boldMark
// phonetics
// portuguese
// example

//! Builders
// baseToken
// content

//! Layout tokens
export function baseToken({
  icons = [],
  audio,
  bullet = true,
  parts = [],
  phonetics,
  connector,
  square = true,
  lineBreak,
}) {
  const blocks = [];

  if (icons.length) {
    blocks.push({ icons });
  }

  if (audio) {
    blocks.push({ audio });
  }

  if (bullet) {
    blocks.push({ bullet: true });
  }

  blocks.push(...parts);

  if (parts.length) {
    blocks.push({ part: " " });
  }

  if (phonetics) {
    blocks.push({ part: phonetics, type: "phonetics" });
    blocks.push({part: " "})
  }

  if (connector) {
    blocks.push({ part: connector, type: "connector" });
  }

  if (square) {
    blocks.push({square: true});
    blocks.push({part: " "})
  }

  if (lineBreak) {
    blocks.push({ lineBreak: true });
  }

  return blocks;
}

//! Builders
export const content = ({ icons = [], ...opts }) =>
  baseToken({
    icons,
    ...opts,
    bullet: false,
    square: false,
  });

export const attention = ({ icons = [], ...opts }) =>
  baseToken({
    ...opts,
    icons: ["attention", ...icons],
    bullet: false,
    square: false,
  });

export const word = (opts) =>
  baseToken({
    ...opts,
    square: false,
  });

export const wordRowList = (opts) =>
  baseToken({
    bullet: false,
    square: true,
    ...opts,
  });

export const wordColumnList = (opts) =>
  baseToken({
    ...opts,
    bullet: false,
  });

export const wordVariant = ({ left, right }) => [
  ...wordRowList({ ...left, square: false }),
  {
    part: "or ",
    type: "connector",
  },
  ...wordRowList({ ...right, square: false }),
];
export const wordComparison = ({ left, right }) => [
  ...wordRowList({ ...left, square: false }),
  {
    part: "vs. ",
    type: "connector",
  },
  ...wordRowList({ ...right, square: false }),
];

export const text = (parts = []) => parts;

//! Tokens
// audio
export const audio = (src) => ({
  audio: src,
});

// bold
export const bold = (text) => ({
  part: text,
  type: "bold",
});

// bold
export const italic = (text) => ({
  part: text,
  type: "italic",
});

// mark
export const stressed = (text) => ({
  part: text,
  type: "stressed",
});

// mark
export const mark = (text) => ({
  part: text,
  type: "mark",
});

// underline
export const underline = (text) => ({
  part: text,
  type: "underline",
});

// bold mark
export const boldMark = (text) => ({
  part: text,
  type: "bold-mark",
});

// phonetics
export const phonetics = (text) => ({
  part: text,
  type: "phonetics",
});

export const example = (text) => ({
  part: ` ${text}`,
  bullet: true,
  square: false,
});

// portuguese
export const portuguese = (text) => ({
  part: text,
  type: "portuguese",
});

// portuguese
export const connector = (text) => ({
  part: text,
  type: "connector",
});
