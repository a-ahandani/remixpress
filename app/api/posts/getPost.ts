import { gql } from "graphql-request";
import { graphql } from "~/lib/graphql";
import type { Post } from "~/types/posts";

const GET_POST = gql`
  query getPost($slug: ID!) {
    post(id: $slug, idType: SLUG) {
      id
      databaseId
      title
      uri
      content
      date
      comments(first: 100) {
        nodes {
          id
          content
          parentId
          date
          dateGmt
          author {
            node {
              avatar {
                foundAvatar
                default
                size
                url
              }
              name
              id
            }
          }
          replies {
            nodes {
              id
              date
              content
              author {
                node {
                  avatar {
                    foundAvatar
                    default
                    size
                    url
                  }
                  name
                  id
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
