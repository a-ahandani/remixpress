import type { LinkProps } from "@mui/material";

export type LogoProps = LinkProps & {
  description?: string;
  title?: string;
  loading: boolean;
};
