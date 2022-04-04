import { gql } from "graphql-request";
import { graphql } from "~/lib/graphql";
import type { Node } from "~/types/posts";

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

export type Settings = {
  allSettings: {
    generalSettingsTitle: string;
    generalSettingsLanguage: string;
    generalSettingsDateFormat: string;
    generalSettingsDescription: string;
  };
  menus: {
    nodes: {
      title?: string;
      target?: string;
      path: string;
      parentId?: string;
      parentDatabaseId?: string;
      order: string;
      description?: string;
    }[];
  };
};

export const getSettings = async (): Promise<Settings> => {
  const data = (await graphql.request(GET_SETTINGS)) as Settings;
  return data;
};
