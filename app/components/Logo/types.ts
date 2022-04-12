import type { LinkProps, TypographyProps } from "@mui/material";

export type LogoProps = LinkProps & {
  description?: string;
  title?: string;
  hideDescription?: boolean;
  size?: "small" | "medium" | "large";
  LogoTypographyProps?: TypographyProps;
};
