import { ReactNode } from "react";

export type LayoutStateProps = { isMenuOpen: boolean };

export type LayoutProviderProps = {
  children: ReactNode;
  defaultLayoutState: LayoutStateProps;
};
