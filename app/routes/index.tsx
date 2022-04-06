import { useLoaderData } from "remix";
import { getPosts } from "~/api/getPosts";
import qs from "query-string";

import type { Query } from "~/types/posts";
import type { LoaderFunction } from "remix";
import type { Posts } from "~/api/getPosts";

import Excerpt from "~/components/Content/components/Excerpt";
import { PrevNext } from "~/components/Pagination";

import { Typography } from "@mui/material";

export const loader: LoaderFunction = async ({ request }) => {
  const url = new URL(request.url);
  const params = qs.parse(url.search, { parseNumbers: true }) as Query;
  return getPosts(params);
};

export default function Posts() {
  const { nodes, pageInfo } = useLoaderData<Posts>();

  return (
    <div>
      <PrevNext pageInfo={pageInfo} />

      <Typography variant="h1">Posts</Typography>
      <div>
        {nodes.map(({ id, ...rest }) => (
          <Excerpt {...rest} key={id} />
        ))}
      </div>
      <PrevNext pageInfo={pageInfo} />
    </div>
  );
}
