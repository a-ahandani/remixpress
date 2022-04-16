import type { Post } from "~/types";
import type { TitleProps } from "~/components/Content/components/Title/types";

export type ExcerptProps = Post & {
  hideCommentsButton?: boolean;
  TitleProps?: TitleProps;
};
