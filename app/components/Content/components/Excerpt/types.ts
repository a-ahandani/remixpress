import type { Post } from "~/types/posts";

export type ExcerptProps = Post & {
  excerpt: string;
  id: string;
};
