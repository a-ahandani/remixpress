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

  fragment PostList on Post {
    __typename
    id
    title
    uri
    date
  }

  fragment PostContent on Post {
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
  fragment PageContent on Page {
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
  fragment CategoryArchive on Category {
    name
    description
    posts {
      nodes {
        ...PostList
      }
    }
  }
  fragment TagArchive on Tag {
    name
    description
    posts {
      nodes {
        ...PostList
      }
    }
  }
`;

export const POSTS = gql`
  ${CATEGORY}
  ${TAG}
  fragment PostExcerpt on Post {
    id
    title
    excerpt
    slug
    uri
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
