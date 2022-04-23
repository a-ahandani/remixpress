import { useMemo, useEffect, useRef } from "react";
import SettingsContext from "~/components/Settings/context";
import { useFetcher } from "remix";
import { isFunction, keyBy } from "lodash";
import Analytics, { AnalyticsInstance } from "analytics";
//@ts-ignore
import googleTagManager from "@analytics/google-tag-manager";
import type { SettingsProviderProps } from "./types";
import type { Settings } from "~/types";

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

  const googleTagManagerId = defaultSettings?.configs?.googleTagManagerId;

  const ga = useRef<AnalyticsInstance>();

  const analytics = useMemo(() => {
    if (!ga.current) {
      ga.current = Analytics({
        plugins: [
          googleTagManager({
            containerId: googleTagManagerId,
          }),
        ],
      });
    }
    return ga.current;
  }, [googleTagManagerId]);

  const settingsContext = useMemo(() => {
    return {
      ...defaultSettings,
      analytics,
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
