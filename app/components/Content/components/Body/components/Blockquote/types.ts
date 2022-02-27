import { ReactNode } from "react";
import type { BlockComponentBaseProps } from "~/components/Content/components/Body";

export type BlockquoteProps = BlockComponentBaseProps & {
  children: ReactNode;
};
