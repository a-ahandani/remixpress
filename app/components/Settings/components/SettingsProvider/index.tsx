// @flow
import { useState, useMemo, useEffect } from "react";
import SettingsContext from "~/components/Settings/context";
import { useFetcher } from "remix";
import { isFunction, keyBy } from "lodash";
import type { SettingsProviderProps } from "./types";
import type { Settings } from "~/api/getSettings";

function SettingsProvider(props: SettingsProviderProps) {
  const { children, defaultSettings } = props;
  const {
    load: fetchSettings,
    data: settings,
    state: settingsState,
  } = useFetcher<Settings>();

  useEffect(() => {
    if (!settings) {
      fetchSettings("/settings");
    }
  }, [settings]);

  const settingsContext = useMemo(() => {
    return {
      ...defaultSettings,
      common: settings?.allSettings,
      menus: keyBy(settings?.menus.nodes, "slug"),
      state: settingsState,
    };
  }, [settings, settingsState]);

  return (
    <SettingsContext.Provider value={settingsContext}>
      {isFunction(children) ? children(settingsContext) : children}
    </SettingsContext.Provider>
  );
}

export default SettingsProvider;
