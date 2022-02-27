import { gql } from "graphql-request";
import { graphql } from "~/lib/graphql";
import type { Post } from "~/types/posts";

const GET_POSTS = gql`
  {
    posts {
      nodes {
        id
        title
        excerpt
        slug
        categories {
          nodes {
            name
            id
          }
        }
        commentCount
        date
        dateGmt
      }
    }
  }
`;

export const getPosts = async (): Promise<{ posts: { nodes: Post[] } }> => {
  const data = await graphql.request(GET_POSTS);
  return data.posts.nodes;
};
