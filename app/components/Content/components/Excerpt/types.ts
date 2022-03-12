import type { Post } from "~/types/posts";
import { AtLeastOne } from "~/types/utils";

export type BaseExcerptProps = Post & {};

export type ExcerptProps = AtLeastOne<BaseExcerptProps>;
