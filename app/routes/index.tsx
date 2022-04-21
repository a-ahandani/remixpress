import { useLoaderData } from "remix";
import { Box } from "@mui/material";
import { getPosts } from "~/api/getPosts";
import qs from "query-string";
import Title from "~/components/Content/components/Title";

import type { Query } from "~/types";
import type { LoaderFunction } from "remix";
import type { Posts } from "~/api/getPosts";

import Excerpt from "~/components/Content/components/Excerpt";
import { PrevNext } from "~/components/Pagination";

export const loader: LoaderFunction = async ({ request }) => {
  const url = new URL(request.url);
  const params = qs.parse(url.search, { parseNumbers: true }) as Query;
  return getPosts(params);
};

export default function Posts() {
  const { nodes, pageInfo } = useLoaderData<Posts>();

  return (
    <div>
      <Title
        sx={{
          fontSize: (theme) => ({
            xs: theme.typography.h3.fontSize,
            sm: theme.typography.h2.fontSize,
          }),
          mb: 8,
        }}
        variant="h1"
      >
        Posts
      </Title>

      <div>
        {nodes.map(({ id, ...rest }) => (
          <Excerpt
            TitleProps={{
              gutterBottom: true,
              sx: {
                fontSize: (theme) => ({
                  xs: theme.typography.h5.fontSize,
                }),
              },
            }}
            {...rest}
            key={id}
          />
        ))}
      </div>
      <Box sx={{ p: 6, display: "flex", justifyContent: "center" }}>
        <PrevNext pageInfo={pageInfo} />
      </Box>
    </div>
  );
}
