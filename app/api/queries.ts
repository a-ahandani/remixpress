import { gql } from "graphql-request";

export const COMMENT = gql`
  fragment comment on Comment {
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
  }
`;
