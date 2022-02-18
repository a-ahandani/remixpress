import { useLoaderData } from "remix";
import type { LoaderFunction } from "remix";
import { getPost } from "./api/getPost";

export const loader: LoaderFunction = async ({ params }) => {
  return getPost({ slug: params.slug as string });
};

export default function PostSlug() {
  const { title, content } = useLoaderData();

  return (
    <div>
      <h1>{title}</h1>
      <p>{content}</p>
    </div>
  );
}
