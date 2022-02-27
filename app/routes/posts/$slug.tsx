import { useLoaderData } from "remix";
import type { LoaderFunction } from "remix";
import { getPost } from "~/api/posts/getPost";
import { Box } from "@mui/material";
import Title from "~/components/Content/components/Title";
import Body from "~/components/Content/components/Body";

export const loader: LoaderFunction = async ({ params }) => {
  return getPost({ slug: params.slug as string });
};

export default function PostSlug() {
  const { title, content, ...rest } = useLoaderData();

  return (
    <div>
      <Title variant="h1">{title}</Title>
      <Box sx={{ mt: 4 }}>
        <Body>{content}</Body>
      </Box>
    </div>
  );
}
