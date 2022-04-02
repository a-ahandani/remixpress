import { ReactNode } from "react";
import type { TypographyProps } from "@mui/material";

export type TitleProps = TypographyProps & {
  children: ReactNode;
  to?: string;
};
