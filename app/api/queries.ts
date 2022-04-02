import { gql } from "graphql-request";

export const COMMENT = gql`
  fragment Comment on Comment {
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

export const CATEGORY = gql`
  fragment Category on Category {
    name
    id
    slug
    uri
  }
`;

export const TAG = gql`
  fragment Tag on Tag {
    name
    id
    slug
    uri
  }
`;

export const NODE = gql`
  ${COMMENT}
  ${CATEGORY}
  ${TAG}
  fragment Post on Post {
    __typename
    id
    databaseId
    title
    uri
    content
    date
    categories {
      nodes {
        ...Category
      }
    }
    tags {
      nodes {
        ...Tag
      }
    }
    comments(first: 100, where: { parent: null }) {
      nodes {
        ...Comment
        replies {
          nodes {
            ...Comment
            replies {
              nodes {
                ...Comment
                replies {
                  nodes {
                    ...Comment
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
        ...Comment
        replies {
          nodes {
            ...Comment
            replies {
              nodes {
                ...Comment
                replies {
                  nodes {
                    ...Comment
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

export const POSTS = gql`
  ${CATEGORY}
  ${TAG}
  fragment Post on Post {
    id
    title
    excerpt
    slug
    categories {
      nodes {
        ...Category
      }
    }
    tags {
      nodes {
        ...Tag
      }
    }
    commentCount
    date
    dateGmt
  }
`;
