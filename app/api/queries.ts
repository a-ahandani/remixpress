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

export const NODE = gql`
  ${COMMENT}
  fragment Post on Post {
    __typename
    id
    databaseId
    title
    uri
    content
    date
    comments(first: 100, where: { parent: null }) {
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
  fragment Page on Page {
    id
    databaseId
    title
    uri
    content
    date
    comments(first: 100, where: { parent: null }) {
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
