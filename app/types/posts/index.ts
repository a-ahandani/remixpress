import { Post as PostDto } from "~/types/wordpress_types";

export type Post = {
  slug: string;
  title: string;
} & PostDto;

export type Query = {
  first?: number;
  last?: number;
  after?: string;
  before?: string;
};
