import { useLoaderData, Link as RmxLink } from "remix";
import { Button, Typography, Box } from "@mui/material";
import type { LoaderFunction } from "remix";
import { ArrowBackOutlined } from "@mui/icons-material";
import type { Post } from "~/types/posts";
import { getPost } from "~/api/posts/getPost";
import Title from "~/components/Content/components/Title";
import Comments from "~/components/Content/components/Comments";
import Body from "~/components/Content/components/Body";

export const loader: LoaderFunction = async ({ params }) => {
  return getPost({ slug: params.slug as string });
};

export default function PostSlug() {
  const { title, content, comments } = useLoaderData<Post>();

  return (
    <div>
      <Button
        component={RmxLink}
        disableRipple
        variant="text"
        to={"/posts"}
        startIcon={<ArrowBackOutlined />}
      >
        Back to blog
      </Button>

      <Title variant="h2">{title}</Title>
      <Body>{content}</Body>
      <Comments comments={comments} />
    </div>
  );
}
