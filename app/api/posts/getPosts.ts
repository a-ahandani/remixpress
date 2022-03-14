import { gql } from "graphql-request";
import { graphql } from "~/lib/graphql";
import type { Post, Query } from "~/types/posts";

const GET_POSTS = gql`
  query getPosts($first: Int, $last: Int, $after: String, $before: String) {
    posts(first: $first, last: $last, after: $after, before: $before) {
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
      pageInfo {
        hasNextPage
        endCursor
        hasPreviousPage
        startCursor
      }
    }
  }
`;

export const getPosts = async ({
  limit = 5,
  after,
  before,
}: Query): Promise<{ posts: { nodes: Post[] } }> => {
  const data = await graphql.request(GET_POSTS, {
    first: after ? limit : before ? null : limit,
    last: before ? limit : null,
    after,
    before,
  });
  return data.posts;
};
