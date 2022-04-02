import { gql } from "graphql-request";
import { graphql } from "~/lib/graphql";
import type { Post } from "~/types/posts";
import { NODE } from "./queries";

const GET_NODE = gql`
  ${NODE}
  query GetNodeByUri($uri: String!) {
    nodeByUri(uri: $uri) {
      __typename
      ...Post
      ...Page
    }
  }
`;

export const getNode = async ({
  uri,
}: {
  uri: string;
}): Promise<{ posts: { nodes: Post[] } }> => {
  const data = await graphql.request(GET_NODE, { uri });
  return data.nodeByUri;
};
