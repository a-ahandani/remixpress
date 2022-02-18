import { gql } from "graphql-request";
import { graphql } from "~/lib/graphql";
import { Post as PostDto } from "~/lib/wordpress_types";

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
      }
    }
  }
`;

export type Post = {
  slug: string;
  title: string;
} & PostDto;

export const getPosts = async (): Promise<{ posts: { nodes: Post[] } }> => {
  const data = await graphql.request(GET_POSTS);
  return data.posts.nodes;
};
