import { useLoaderData } from "remix";
import { getPosts } from "~/api/getPosts";
import qs from "query-string";
import type { Post, Query } from "~/types/posts";
import type { LoaderFunction } from "remix";
import { useQueryParams, NumberParam, StringParam } from "use-query-params";

import Excerpt from "~/components/Content/components/Excerpt";

import {
  Typography,
  FormControl,
  InputLabel,
  Select,
  ButtonGroup,
  Button,
} from "@mui/material";

export const loader: LoaderFunction = async ({ request }) => {
  const url = new URL(request.url);
  const params = qs.parse(url.search, { parseNumbers: true }) as Query;
  return getPosts(params);
};

export default function Posts() {
  const { nodes, pageInfo } = useLoaderData<{
    nodes: Post[];
    pageInfo: {
      endCursor?: string;
      hasNextPage: boolean;
      hasPreviousPage: boolean;
      startCursor: string;
    };
  }>();

  const { endCursor, hasNextPage, hasPreviousPage, startCursor } = pageInfo;

  const pagingOptions = [5, 10, 15, 20];

  const [query, setQuery] = useQueryParams({
    limit: NumberParam,
    after: StringParam,
    before: StringParam,
  });

  return (
    <div>
      <Typography variant="h1">Posts</Typography>
      <div>
        {nodes.map(({ id, ...rest }) => (
          <Excerpt {...rest} key={String(id)} />
        ))}
      </div>
      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <InputLabel htmlFor="grouped-native-select">Page size</InputLabel>
        <Select
          native
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

        <ButtonGroup variant="text" aria-label="text button group">
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
      </FormControl>
    </div>
  );
}
