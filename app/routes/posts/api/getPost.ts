import { gql } from "graphql-request";
import { graphql } from "~/lib/graphql";
import { Post as PostDto } from "~/lib/wordpress_types";

const GET_POST = gql`
  query getPost($slug: ID!) {
    post(id: $slug, idType: SLUG) {
      id
      databaseId
      title
      uri
      content
      date
    }
  }
`;

export type Post = {
  slug: string;
  title: string;
} & PostDto;

export const getPost = async ({
  slug,
}: {
  slug: string;
}): Promise<{ posts: { nodes: Post[] } }> => {
  const data = await graphql.request(GET_POST, { slug });
  return data.post;
};
