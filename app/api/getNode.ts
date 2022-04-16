import { gql } from "graphql-request";
import { graphql } from "~/lib/graphql";
import type { Node } from "~/types";

import { NODE } from "./queries";

const GET_NODE = gql`
  ${NODE}
  query GetNodeByUri($uri: String!) {
    nodeByUri(uri: $uri) {
      __typename
      ...PostContent
      ...PageContent
      ...TagArchive
      ...CategoryArchive
    }
  }
`;

export const getNode = async ({
  uri,
}: {
  uri: string;
}): Promise<{ posts: { nodes: Node[] } }> => {
  const data = await graphql.request(GET_NODE, { uri });
  return data.nodeByUri;
};
