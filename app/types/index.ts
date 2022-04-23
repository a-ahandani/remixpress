import type { ListConnection, Connection } from "./utils";

export type SiteConfigs = {
  siteTitle?: string;
  secondaryTitle?: string;
  twitter?: string;
  github?: string;
  email?: string;
  linkedin?: string;
  description?: string;
  keywords?: string;
  socialMediaImage?: string;
  googleTagManagerId?: string;
};

export type Query = {
  limit?: number | null;
  after?: string | null;
  before?: string | null;
};

export type Pagination = {
  hasNextPage: boolean;
  endCursor: string;
  hasPreviousPage: boolean;
  startCursor: string;
};

export type MenuItem = {
  title?: string;
  target?: string;
  path: string;
  parentId?: string;
  parentDatabaseId?: string;
  order: string;
  description?: string;
  id: string;
  label?: string;
};

export type Menu = {
  menuItems: ListConnection<MenuItem> & {
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
  allSettings?: CommonSettings;
  menus: ListConnection<Menu>;
};

export type Commenter = {
  id: string;
  name: string;
};

export type Comment = {
  content?: string;
  date: string;
  id?: string;
  databaseId?: number;
  author: Connection<Commenter>;
  replies?: ListConnection<Comment>;
};

export type Avatar = {
  foundAvatar: boolean;
  size: number;
  url: string;
};

export type User = {
  firstName: string;
  lastName: string;
  description?: string;
  avatar?: Avatar;
};

export type Comments = ListConnection<Comment>;

export type CreateComment = {
  commentOn?: number;
  author?: Commenter;
  content?: string;
  authorEmail?: string;
  parent?: number;
};

export type Author = User;

export type NodeTypes = "Post" | "Category" | "Tag" | "Page";

export type CommentStatuses = "closed" | "open";

export type Taxonomy = { uri?: string; name?: string };

export type Taxonomies = ListConnection<Taxonomy>;

export type Media = {
  mediaItemUrl: string;
  uri?: string;
  mediaDetails?: {
    sizes?: {
      file: string;
      height: string;
      sourceUrl: string;
      width: string;
    }[];
  };
};

export type Post = {
  uri: string;
  id?: string;
  slug: string;
  commentCount: number;
  excerpt?: string;
  date?: string;
  content?: string;
  categories?: Taxonomies;
  tags?: Taxonomies;
  databaseId: number;
  title?: string;
  comments?: Comments;
  commentStatus: CommentStatuses;
  author?: Connection<Author>;
  featuredImage?: Connection<Media>;
};

export type Posts = ListConnection<Post>;

export type Node = {
  __typename?: NodeTypes;
  name?: string;
  description?: string;
  posts?: Posts;
} & Post;
