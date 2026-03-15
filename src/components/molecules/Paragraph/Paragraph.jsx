"use client";

import { ContentToken } from "@/components/molecules/ContentToken";
import { normalizeParagraphValue } from "@/utils/contentAdapters";

export const Paragraph = ({ value, text, blocks, ...props }) => {
  return (
    <p>
      <ContentToken value={normalizeParagraphValue({ value, text, blocks })} {...props} />
    </p>
  );
};
