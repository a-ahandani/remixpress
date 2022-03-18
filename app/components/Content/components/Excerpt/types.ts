import type { Post } from "~/types/posts";
export type ExcerptProps = Pick<
  Post,
  "slug" | "commentCount" | "excerpt" | "title" | "date"
> & {};
