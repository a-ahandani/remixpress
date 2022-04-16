import { gql } from "graphql-request";
import { graphql } from "~/lib/graphql";
import type { CreateComment } from "~/types";

const CREATE_COMMENT = gql`
  mutation CREATE_COMMENT($input: CreateCommentInput!) {
    createComment(input: $input) {
      success
      comment {
        id
        content
        approved
      }
    }
  }
`;

export const createComment = async ({
  commentOn,
  content,
  author,
  authorEmail,
  parent,
}: CreateComment): Promise<unknown> => {
  const { createComment } = await graphql.request(CREATE_COMMENT, {
    input: {
      commentOn: Number(commentOn),
      content,
      author,
      authorEmail,
      parent: Number(parent),
    },
  });
  return createComment;
};
