import { Post as PostDto } from "~/types/wordpress_types";

export type Post = {
  slug: string;
  title: string;
} & PostDto;
