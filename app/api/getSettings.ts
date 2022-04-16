import { gql } from "graphql-request";
import { graphql } from "~/lib/graphql";
import type { Settings } from "~/types";

const GET_SETTINGS = gql`
  query GetSettings {
    allSettings {
      generalSettingsTitle
      generalSettingsLanguage
      generalSettingsDateFormat
      generalSettingsDescription
    }
    menus {
      nodes {
        name
        slug
        menuItems {
          nodes {
            title
            target
            label
            id
            path
            parentId
            parentDatabaseId
            order
            description
          }
        }
      }
    }
  }
`;

export const getSettings = async (): Promise<Settings> => {
  const data = (await graphql.request(GET_SETTINGS)) as Settings;
  return data;
};
