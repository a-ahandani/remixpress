import type { LinkProps } from "@mui/material";

export type LogoProps = LinkProps & {
  description?: string;
  title?: string;
  hideDescription?: boolean;
  size?: "small" | "medium" | "large";
};
