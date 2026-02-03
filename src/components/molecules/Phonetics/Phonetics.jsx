import { ContentToken } from "@/components/molecules/ContentToken";

const VARIANTS = {
  uk: {
    icons: "uk",
  },
};

export const Phonetics = ({ variant = "default", value = [] }) => {
  const meta = VARIANTS[variant];

  const tokens = meta
  ? [{ icons: [meta.icons ]}, ...value]
  : value;

  return <ContentToken value={tokens} />;
};
