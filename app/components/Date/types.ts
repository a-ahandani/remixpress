import type { Post } from "~/types/posts";

export type DateProps = Pick<Post, "date"> & {
  format?: string;
};
