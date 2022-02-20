import { useLoaderData } from "remix";
import type { LoaderFunction } from "remix";
import { getPost } from "~/api/posts/getPost";
import { Typography, Box } from "@mui/material";

export const loader: LoaderFunction = async ({ params }) => {
  return getPost({ slug: params.slug as string });
};

export default function PostSlug() {
  const { title, content } = useLoaderData();

  return (
    <div>
      <Typography variant="h1">{title}</Typography>
      <Box sx={{ mt: 4 }}>
        <Typography variant="body1">{content}</Typography>
      </Box>
    </div>
  );
}
