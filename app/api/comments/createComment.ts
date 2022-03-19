import { gql } from "graphql-request";
import { graphql } from "~/lib/graphql";
import type { Post } from "~/types/posts";

const CREATE_COMMENT = gql`
  mutation CREATE_COMMENT {
    createComment(
      input: {
        commentOn: 149
        content: "This is a test comment, yo"
        author: "Jason"
        authorEmail: "a@b.com"
        parent: "5555"
      }
    ) {
      success
      comment {
        id
        content
        author {
          node {
            name
            email
          }
        }
        parentId
      }
    }
  }
`;

export const getPost = async ({
  slug,
}: {
  slug: string;
}): Promise<{ posts: { nodes: Post[] } }> => {
  const data = await graphql.request(CREATE_COMMENT, { slug });
  return data.post;
};
