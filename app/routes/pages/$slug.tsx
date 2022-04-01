import { useLoaderData, Link as RmxLink } from "remix";
import type { LoaderFunction, ActionFunction } from "remix";
import type { Page } from "~/types/pages";
import { getPage } from "~/api/pages/getPage";
import { createComment } from "~/api/comments/createComment";
import Title from "~/components/Content/components/Title";
import Body from "~/components/Content/components/Body";

export const loader: LoaderFunction = async ({ params }) => {
  return getPage({ slug: params.slug as string });
};

export default function PageSlug() {
  const { title, content } = useLoaderData<Page>();
  return (
    <div>
      <Title variant="h2">{title}</Title>
      <Body>{content}</Body>
    </div>
  );
}
