export function baseToken({
  icons = [],
  audio,
  bullet = true,
  parts = [],
  phonetics,
  pt,
  square = true,
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
  }
  blocks.push(" ");

  parts.forEach((p) => {
    blocks.push(p);
  });
  blocks.push(" ");

  if (phonetics) {
    blocks.push({ part: phonetics, type: "phonetics" });
  }
  blocks.push(" ");

  if (pt) {
    blocks.push({ part: pt, type: "portuguese" });
  }
  blocks.push(" ");

  if (square) {
    blocks.push({ square: true });
  }
  blocks.push(" ");

  return blocks;
}

export const instruction = (opts) =>
  baseToken({ ...opts, icons: [attention], square: false });

export const word = (opts) => baseToken({ ...opts, square: false });

export const wordRow = (opts) =>
  baseToken({
    ...opts,
    bullet: false,
    square: true,
  });

export const wordColumn = (opts) =>
  baseToken({
    ...opts,
    bullet: false,
  });

export const UKWordRow = (opts) =>
  baseToken({
    ...opts,
    bullet: false,
    square: true,
  });

export const example = (opts) =>
  baseToken({ ...opts, bullet: true, square: false });
