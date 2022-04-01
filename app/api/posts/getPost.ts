import { gql } from "graphql-request";
import { graphql } from "~/lib/graphql";
import type { Post } from "~/types/posts";
import { POST } from "../queries";

const GET_POST = gql`
  ${POST}
  query getPost($slug: ID!) {
    post(id: $slug, idType: URI) {
      ...post
    }
  }
`;

export const getPost = async ({
  slug,
}: {
  slug: string;
}): Promise<{ posts: { nodes: Post[] } }> => {
  const data = await graphql.request(GET_POST, { slug });
  return data.post;
};
