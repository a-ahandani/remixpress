import { ReactNode } from "react";
import { LinkProps } from "remix";

export type NavLinkProps = LinkProps & {
  children: ReactNode;
};
