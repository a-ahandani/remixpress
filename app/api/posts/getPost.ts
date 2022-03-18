import { gql } from "graphql-request";
import { graphql } from "~/lib/graphql";
import type { Post } from "~/types/posts";
import { COMMENT } from "../queries";

const GET_POST = gql`
  ${COMMENT}
  query getPost($slug: ID!) {
    post(id: $slug, idType: SLUG) {
      id
      databaseId
      title
      uri
      content
      date
      comments(first: 100, where: { parent: null }) {
        # Get three levels of comments reply
        nodes {
          ...comment
          replies {
            nodes {
              ...comment
              replies {
                nodes {
                  ...comment
                  replies {
                    nodes {
                      ...comment
                    }
                  }
                }
              }
            }
          }
        }
      }
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
