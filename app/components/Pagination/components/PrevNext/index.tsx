import { ButtonGroup, Button } from "@mui/material";
import { useQueryParams, NumberParam, StringParam } from "use-query-params";

import type { PrevNextProps } from "./types";

export default function PrevNext({ pageInfo }: PrevNextProps) {
  const { endCursor, hasNextPage, hasPreviousPage, startCursor } = pageInfo;

  const [query, setQuery] = useQueryParams({
    limit: NumberParam,
    after: StringParam,
    before: StringParam,
  });

  return (
    <ButtonGroup variant="outlined" size="small" disableElevation>
      <Button
        disabled={!hasPreviousPage}
        onClick={() => {
          setQuery({
            before: startCursor,
            after: undefined,
          });
        }}
      >
        Previous
      </Button>
      <Button
        disabled={!hasNextPage}
        onClick={() => {
          setQuery({
            after: endCursor,
            before: undefined,
          });
        }}
      >
        Next
      </Button>
    </ButtonGroup>
  );
}
