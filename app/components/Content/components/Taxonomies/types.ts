import { Taxonomy } from "~/types/posts";
import type { ChipProps } from "@mui/material";

export type TaxonomiesProps = {
  data?: Taxonomy[];
  ChipProps?: ChipProps;
};
