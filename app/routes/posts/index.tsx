import { useLoaderData } from "remix";
import { getPosts } from "~/api/posts/getPosts";
import type { Post } from "~/types/posts";
import Excerpt from "~/components/Content/components/Excerpt";
import { Typography } from "@mui/material";

export const loader = async () => {
  return getPosts();
};

export default function Posts() {
  const posts = useLoaderData<Post[]>();
  console.log("-->", posts);
  return (
    <div>
      <Typography variant="h1">Posts</Typography>
      <div>
        {posts.map(({ id, ...rest }) => (
          <Excerpt {...rest} key={id} />
        ))}
      </div>
    </div>
  );
}
