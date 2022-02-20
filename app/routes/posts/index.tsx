import { Link, useLoaderData } from "remix";
import { getPosts } from "~/api/posts/getPosts";
import type { Post } from "~/types/posts";
import { Typography } from "@mui/material";

export const loader = async () => {
  return getPosts();
};

export default function Posts() {
  const posts = useLoaderData<Post[]>();

  return (
    <div>
      <Typography variant="h1">Posts</Typography>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <Link to={post.slug}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
