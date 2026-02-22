export function baseToken({
  icons = [],
  audio,
  bullet = true,
  parts = [],
  phonetics,
  englishTerm,
  portugueseTerm,
  englishDefinition,
  portugueseDefinition,
  englishExample,
  portugueseExample,
  portugueseTranslation,
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

  if (englishTerm) {
    if (Array.isArray(englishTerm)) {
      englishTerm.forEach((p) => blocks.push(p));
    } else {
      blocks.push({ part: englishTerm, type: "bold" });
    }
  }
  blocks.push(" ");

  if (portugueseTerm) {
    blocks.push({ part: portugueseTerm, type: "bold-portuguese" });
  }
  blocks.push(" ");

  if (englishDefinition) {
    blocks.push({ part: englishDefinition, type: "portuguese" });
  }
  blocks.push(" ");

  if (portugueseDefinition) {
    blocks.push({ part: portugueseDefinition, type: "portuguese" });
  }
  blocks.push(" ");

  if (englishExample) {
    blocks.push({ part: englishExample, type: "" });
  }
  blocks.push(" ");

  if (portugueseExample) {
    blocks.push({ part: portugueseExample, type: "portuguese" });
  }
  blocks.push(" ");

  if (portugueseTranslation) {
    blocks.push({ part: portugueseTranslation, type: "portuguese" });
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

//! Exports

// audio
export const audio = (src) => ({
  audio: src,
});

// bold
export const bold = (text) => ({
  part: text,
  type: "bold"
})

// bold
export const italic = (text) => ({
  part: text,
  type: "italic"
})

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

// portuguese
export const portuguese = (text) => ({
  part: text,
  type: "portuguese",
});

export const instruction = (opts) =>
  baseToken({
    ...opts,
    icons: ["attention"],
    bullet: false,
    square: false,
  });

export const text = ({ icons = [], ...opts }) =>
  baseToken({
    icons,
    ...opts,
    bullet: false,
    square: false,
  });

export const note = ({ icons = [], ...opts }) =>
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
    part: "vs ",
    type: "connector",
  },
  ...wordRowList({ ...right, square: false }),
];
export const expression = (opts) =>
  baseToken({
    ...opts,
    bullet: false,
    square: false,
  });

export const example = (opts) =>
  baseToken({
    ...opts,
    bullet: true,
    square: false,
  });
