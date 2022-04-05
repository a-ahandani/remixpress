// @flow
import { useState, useMemo, useEffect } from "react";
import LayoutContext from "~/components/Layout/context";
import { isFunction } from "lodash";
import type { LayoutProviderProps } from "./types";

function LayoutProvider(props: LayoutProviderProps) {
  const { children, defaultLayoutState } = props;
  const [layoutState, setLayoutState] = useState(defaultLayoutState);

  const layoutContext = useMemo(
    () => ({
      layoutState,
      setLayoutState,
    }),
    [layoutState]
  );

  return (
    <LayoutContext.Provider value={layoutContext}>
      {isFunction(children) ? children(layoutContext) : children}
    </LayoutContext.Provider>
  );
}

export default LayoutProvider;
