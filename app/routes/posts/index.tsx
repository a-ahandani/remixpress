import { useLoaderData } from "remix";
import { getPosts } from "~/api/posts/getPosts";
import type { Post } from "~/types/posts";
import Excerpt from "~/components/Posts/components/Excerpt";
import { Typography } from "@mui/material";

export const loader = async () => {
  return getPosts();
};

export default function Posts() {
  const posts = useLoaderData<Post[]>();

  return (
    <div>
      <Typography variant="h1">Posts</Typography>
      <div>
        {posts.map(({ id, ...rest }) => (
          <Excerpt key={id} {...rest} sx={{ mt: 4, ml: 3 }} />
        ))}
      </div>
    </div>
  );
}
