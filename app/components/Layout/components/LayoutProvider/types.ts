import { ReactNode } from "react";

export type LayoutStateProps = { isMenuOpen: boolean };

export type LayoutProviderProps = {
  children: ReactNode | Function;
  defaultLayoutState: LayoutStateProps;
};
