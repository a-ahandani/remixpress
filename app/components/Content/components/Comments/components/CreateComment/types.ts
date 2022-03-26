import type { CreateComment } from "~/types/posts";

export type CreateCommentProps = Pick<CreateComment, "commentOn"> & {
  parent?: number;
};
