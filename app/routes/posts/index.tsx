import { useLoaderData } from "remix";
import { getPosts } from "~/api/posts/getPosts";
import qs from "query-string";
import type { Post, Query } from "~/types/posts";
import type { LoaderFunction } from "remix";
import Excerpt from "~/components/Content/components/Excerpt";
import { useSearchParams } from "react-router-dom";
import { Typography, FormControl, InputLabel, Select } from "@mui/material";

export const loader: LoaderFunction = async ({ request }) => {
  const url = new URL(request.url);
  const params = qs.parse(url.search, { parseNumbers: true }) as Query;
  return getPosts(params);
};

export default function Posts() {
  const { nodes, pageInfo } = useLoaderData<{ nodes: Post[]; pageInfo: {} }>();
  const pagingOptions = [5, 10, 15, 20];
  const [searchParams, setSearchParams] = useSearchParams();

  return (
    <div>
      <Typography variant="h1">Posts</Typography>
      <div>
        {nodes.map(({ id, ...rest }) => (
          <Excerpt {...rest} key={String(id)} />
        ))}
      </div>
      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <InputLabel htmlFor="grouped-native-select">Grouping</InputLabel>
        <Select
          native
          defaultValue={5}
          onChange={(e) => {
            const limit = String(e.target.value);
            setSearchParams({ limit });
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
