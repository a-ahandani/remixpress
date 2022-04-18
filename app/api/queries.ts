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
          url
          size
          scheme
          height
          foundAvatar
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
export const AUTHOR = gql`
  fragment Author on User {
    avatar(size: 300) {
      url
      size
      foundAvatar
    }
    description
    firstName
    isContentNode
    lastName
    locale
    name
    nickname
    slug
    uri
    url
    userId
  }
`;

export const NODE = gql`
  ${COMMENT}
  ${CATEGORY}
  ${TAG}
  ${AUTHOR}

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
    excerpt
    uri
    content
    date
    commentStatus
    featuredImage {
      node {
        uri
        mediaItemUrl
        mediaDetails {
          sizes {
            file
            sourceUrl
            width
            height
          }
        }
      }
    }
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
    author {
      node {
        ...Author
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
    excerpt
    date
    commentStatus
    featuredImage {
      node {
        uri
        mediaItemUrl
        mediaDetails {
          sizes {
            file
            sourceUrl
            width
            height
          }
        }
      }
    }
    author {
      node {
        ...Author
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
    commentStatus
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
