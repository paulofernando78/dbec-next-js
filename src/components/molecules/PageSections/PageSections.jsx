import { Children, isValidElement } from "react";

import { Contents } from "@/components/molecules/Contents";
import { formatSectionLabel } from "@/utils/formatSectionLabel";

export const PageSections = ({ children }) => {
  // Convert children into a normal array and keep only valid React elements
  const childArray = Children.toArray(children).filter(isValidElement);

  const items = childArray
    // Keep only Section components
    .filter((child) => child.type?.displayName === "Section")
    .map((child) => ({
      // This becomes the anchor target in Contents: href="#audio-player"
      href: child.props.id,
      // Use the custom label if it exists, otherwise build one from the id
      label: child.props.label ?? formatSectionLabel(child.props.id),
    }));

  return (
    <>
      {/* Build the Contents menu automatically from the Section components */}
      <Contents items={items} />

      {/* Render the original sections below the Contents */}
      {children}
    </>
  );
};

// What PageSections is doing:

// receives all the JSX inside it as children
// turns those children into an array
// keeps only the ones that are Section
// reads each section’s id and optional label
// creates the items array for Contents
// renders Contents
// then renders the sections normally