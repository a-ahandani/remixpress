import { useLoaderData, Link as RmxLink } from "remix";
import { Button } from "@mui/material";
import type { LoaderFunction, ActionFunction } from "remix";
import { ArrowBackOutlined } from "@mui/icons-material";
import type { Node } from "~/types/posts";
import { getNode } from "~/api/getNode";
import { createComment } from "~/api/createComment";
import Title from "~/components/Content/components/Title";
import Comments from "~/components/Content/components/Comments";
import Body from "~/components/Content/components/Body";

export const loader: LoaderFunction = async ({ params }) => {
  return getNode({ uri: params.uri as string });
};

export const action: ActionFunction = async ({ request }) => {
  const formData = await request.formData();
  const values = Object.fromEntries(formData);
  return createComment(values);
};

export default function PostUri() {
  const { title, content, comments, databaseId } = useLoaderData<Node>();

  return (
    <div>
      <Button
        component={RmxLink}
        disableRipple
        variant="text"
        to={"/"}
        startIcon={<ArrowBackOutlined />}
      >
        Back to blog
      </Button>

      <Title variant="h1">{title}</Title>
      <Body>{content}</Body>
      <Comments databaseId={databaseId} comments={comments} />
    </div>
  );
}
