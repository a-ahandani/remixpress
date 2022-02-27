import { ReactNode } from "react";
import { SxProps } from "@mui/system";
import { TypographyProps } from "@mui/material";

export type TitleProps = TypographyProps & {
  children: ReactNode;
  sx?: SxProps;
  to?: string;
};
