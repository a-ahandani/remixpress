import type { Pagination } from "~/api/getPosts";
import { BoxProps } from "@mui/material";

export type PrevNextProps = Pick<BoxProps, "sx"> & {
  pageInfo: Pagination;
};
