function normalizeTokenArray(raw) {
  if (raw == null) {
    return [];
  }

  if (Array.isArray(raw)) {
    return raw.flatMap((item) => normalizeTokenArray(item));
  }

  return [raw];
}

function normalizeLine(line = {}) {
  const tokens = [];

  if (line.text != null) {
    tokens.push(...normalizeTokenArray(line.text));
  }

  if (line.value != null) {
    tokens.push(...normalizeTokenArray(line.value));
  }

  if (line.lineBreak) {
    tokens.push({ lineBreak: true });
  }

  return tokens;
}

export function normalizeValue(value, fallback = []) {
  const raw = value ?? fallback;

  return normalizeTokenArray(raw);
}

export function normalizeParagraphValue({ value, text, blocks }) {
  if (value != null || text != null) {
    return normalizeValue(value, text);
  }

  if (!Array.isArray(blocks)) {
    return [];
  }

  return blocks.flatMap((block, blockIndex) => {
    const lines = Array.isArray(block?.lines) ? block.lines : [];

    return lines.flatMap((line, lineIndex) => {
      const tokens = normalizeLine(line);
      const isLastLine = lineIndex === lines.length - 1;
      const shouldBreakBetweenLines = !isLastLine;

      return [
        ...tokens,
        ...(shouldBreakBetweenLines ? [{ lineBreak: true }] : []),
      ];
    });
  });
}

export function normalizeListItemValue(item = {}) {
  if (item.value != null || item.text != null) {
    return normalizeValue(item.value, item.text);
  }

  return normalizeValue(item);
}

export function normalizeCardTextLine(line = {}) {
  return normalizeValue(line.value, line.text);
}
