import { useContext } from "react";
import LayoutContext, { LayoutContextProps } from "~/components/Layout/context";

function useLayout(): LayoutContextProps {
  const contextValue = useContext(LayoutContext) || {};
  if (!contextValue) {
    throw new Error(`useLayout must be used within a LayoutProvider`);
  }
  return contextValue;
}

export default useLayout;
