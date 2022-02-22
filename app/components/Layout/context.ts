// @flow
import { createContext } from "react";
import type { LayoutStateProps } from "./components/LayoutProvider/types";
export interface LayoutContextProps {
  setLayoutState: (params: LayoutStateProps) => void;
  layoutState: LayoutStateProps;
}

const LayoutContext = createContext<LayoutContextProps>(
  {} as LayoutContextProps
);

export default LayoutContext;
