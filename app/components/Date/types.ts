import type { TypographyProps } from "@mui/material";
import { Maybe } from "~/types/utils";

export type DateProps = TypographyProps & {
  format?: string;
  date?: Maybe<string>;
};
