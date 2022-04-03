import { Taxonomies } from "~/types/posts";
import type { ChipProps } from "@mui/material";

export type TaxonomiesProps = {
  data: Taxonomies;
  ChipProps?: ChipProps;
};
