"use client";

import { ContentToken } from "@/components/molecules/ContentToken";

export const Paragraph = ({...props}) => {
  return (
    <p>
      <ContentToken {...props} />
    </p>
  );
};
