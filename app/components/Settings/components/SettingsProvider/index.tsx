import { useMemo, useEffect, useRef } from "react";
import SettingsContext from "~/components/Settings/context";
import { useFetcher } from "remix";
import { isFunction, keyBy } from "lodash";
import Analytics, { AnalyticsInstance } from "analytics";
//@ts-ignore
import googleAnalytics from "@analytics/google-analytics";
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

  const googleTrackingId = defaultSettings?.configs?.googleTrackingId;
  const ga = useRef<AnalyticsInstance>();

  const analytics = useMemo(() => {
    if (!ga.current && googleTrackingId) {
      ga.current = Analytics({
        plugins: [
          googleAnalytics({
            trackingId: googleTrackingId,
          }),
        ],
      });
    }
    return ga.current;
  }, [googleTrackingId]);

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
