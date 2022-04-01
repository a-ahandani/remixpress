import { gql } from "graphql-request";
import { graphql } from "~/lib/graphql";
import type { Page } from "~/types/pages";
import { PAGE } from "../queries";

const GET_PAGE = gql`
  ${PAGE}
  query getPage($slug: ID!) {
    page(id: $slug, idType: URI) {
      ...page
    }
  }
`;

export const getPage = async ({
  slug,
}: {
  slug: string;
}): Promise<{ pages: { nodes: Page[] } }> => {
  const data = await graphql.request(GET_PAGE, { slug });
  return data.page;
};
