import type { Post } from "~/types/posts";
import type { TitleProps } from "~/components/Content/components/Title/types";

export type ExcerptProps = Post & {
  hideCommentsButton?: boolean;
  TitleProps?: TitleProps;
};
