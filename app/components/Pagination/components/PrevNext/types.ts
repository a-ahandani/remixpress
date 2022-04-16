import type { Pagination } from "~/types";
import { BoxProps } from "@mui/material";

export type PrevNextProps = BoxProps & {
  pageInfo: Pagination;
};
