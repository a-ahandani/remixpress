import { useLoaderData, Link as RmxLink } from "remix";
import type { LoaderFunction, ActionFunction } from "remix";
import type { Post } from "~/types/posts";
import { getNode } from "~/api/getNode";
import { createComment } from "~/api/createComment";
import Title from "~/components/Content/components/Title";
import Comments from "~/components/Content/components/Comments";
import Body from "~/components/Content/components/Body";

export const loader: LoaderFunction = async ({ params }) => {
  return getNode({ uri: params.slug as string });
};

export const action: ActionFunction = async ({ request }) => {
  const formData = await request.formData();
  const values = Object.fromEntries(formData);
  return createComment(values);
};

export default function PageSlug() {
  const { title, content, comments, databaseId } = useLoaderData<Post>();

  return (
    <div>
      <Title variant="h2">{title}</Title>
      <Body>{content}</Body>
      <Comments databaseId={databaseId} comments={comments} />
    </div>
  );
}
