// @flow
import { useState, useMemo, useEffect } from "react";
import SettingsContext from "~/components/Settings/context";
import { useFetcher } from "remix";
import { isFunction } from "lodash";
import type { SettingsProviderProps } from "./types";
import type { Settings } from "~/api/getSettings";

function SettingsProvider(props: SettingsProviderProps) {
  const { children, defaultSettings } = props;
  const [settings, setSettings] = useState(defaultSettings);

  const {
    load: fetchSettings,
    data,
    state: settingsState,
  } = useFetcher<Settings>();

  useEffect(() => {
    if (!data) {
      fetchSettings("/settings");
    }
  }, [data]);

  useEffect(() => {
    if (settingsState === "idle" && data) {
      setSettings({ ...settings, ...data });
    }
  }, [data, settingsState]);

  const settingsContext = useMemo(
    () => ({
      settings,
      setSettings,
    }),
    [settings]
  );

  return (
    <SettingsContext.Provider value={settingsContext}>
      {isFunction(children) ? children(settingsContext) : children}
    </SettingsContext.Provider>
  );
}

export default SettingsProvider;
