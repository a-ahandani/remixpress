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

export type Menu = {
  menuItems: {
    nodes: {
      title?: string;
      target?: string;
      path: string;
      parentId?: string;
      parentDatabaseId?: string;
      order: string;
      description?: string;
      id: string;
      label?: string;
    }[];
    name: string;
    slug: string;
  };
};
export type CommonSettings = {
  generalSettingsTitle: string;
  generalSettingsLanguage: string;
  generalSettingsDateFormat: string;
  generalSettingsDescription: string;
};

export type Settings = {
  allSettings: CommonSettings;
  menus: {
    nodes: Menu[];
  };
};

export const getSettings = async (): Promise<Settings> => {
  const data = (await graphql.request(GET_SETTINGS)) as Settings;
  return data;
};
