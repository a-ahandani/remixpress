import { FormControl, InputLabel, Select } from "@mui/material";
import { useQueryParams, NumberParam, StringParam } from "use-query-params";

import type { PageSizeProps } from "./types";

export default function PageSize({}: PageSizeProps) {
  const pagingOptions = [5, 10, 15, 20];

  const [query, setQuery] = useQueryParams({
    limit: NumberParam,
    after: StringParam,
    before: StringParam,
  });

  return (
    <div>
      <FormControl>
        <InputLabel htmlFor="grouped-native-select">Page size</InputLabel>
        <Select
          native
          sx={{ minWidth: 100, mr: 1 }}
          defaultValue={5}
          size="small"
          value={query.limit}
          onChange={(e) => {
            const limit = Number(e.target.value);
            setQuery({ before: undefined, after: undefined, limit });
          }}
          label="Page size"
        >
          {pagingOptions.map((value, i) => (
            <option key={i} value={value}>
              {value}
            </option>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
