import { Chip } from "@mui/material";
import { Link } from "remix";

import type { TaxonomiesProps } from "./types";
export default function Taxonomies({ data, ChipProps }: TaxonomiesProps) {
  return (
    <>
      {data?.map(({ uri: to, name }) => (
        <Chip
          {...(to && { component: Link, to, clickable: true })}
          label={name}
          size="small"
          {...ChipProps}
          sx={{ mr: 0.25, ...ChipProps?.sx }}
        />
      ))}
    </>
  );
}
