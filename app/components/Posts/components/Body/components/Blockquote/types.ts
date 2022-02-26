import { ReactNode } from "react";
import type { BlockComponentBaseProps } from "~/components/Posts/components/Body";

export type BlockquoteProps = BlockComponentBaseProps & {
  children: ReactNode;
};
