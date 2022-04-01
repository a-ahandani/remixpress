import { gql } from "graphql-request";

export const COMMENT = gql`
  fragment comment on Comment {
    id
    databaseId
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

export const POST = gql`
  ${COMMENT}
  fragment post on Post {
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
`;
export const PAGE = gql`
  ${COMMENT}
  fragment page on Page {
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
`;
