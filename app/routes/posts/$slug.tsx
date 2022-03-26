import { useLoaderData, Link as RmxLink } from "remix";
import { Button } from "@mui/material";
import type { LoaderFunction, ActionFunction } from "remix";
import { ArrowBackOutlined } from "@mui/icons-material";
import type { Post } from "~/types/posts";
import { getPost } from "~/api/posts/getPost";
import { createComment } from "~/api/comments/createComment";
import Title from "~/components/Content/components/Title";
import Comments from "~/components/Content/components/Comments";
import Body from "~/components/Content/components/Body";

export const loader: LoaderFunction = async ({ params }) => {
  return getPost({ slug: params.slug as string });
};

export const action: ActionFunction = async ({ request }) => {
  const formData = await request.formData();
  const values = Object.fromEntries(formData);
  return createComment(values);
};

export default function PostSlug() {
  const { title, content, comments, databaseId } = useLoaderData<Post>();

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
      <Comments databaseId={databaseId} comments={comments} />
    </div>
  );
}
