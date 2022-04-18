import { useMemo, useEffect } from "react";
import SettingsContext from "~/components/Settings/context";
import { useFetcher } from "remix";
import { isFunction, keyBy } from "lodash";
import Analytics, { AnalyticsInstance } from "analytics";
// @ts-ignore
import googleAnalytics from "@analytics/google-analytics";
import type { SettingsProviderProps } from "./types";
import type { Settings } from "~/types";

let ga: AnalyticsInstance;

function SettingsProvider(props: SettingsProviderProps) {
  const { children, defaultSettings } = props;
  const {
    load: fetchSettings,
    data: settings,
    state: settingsState,
  } = useFetcher<Settings>();

  const analytics = useMemo(() => {
    if (
      !ga &&
      defaultSettings?.configs?.googleTrackingId &&
      defaultSettings?.configs?.siteTitle
    ) {
      ga = Analytics({
        app: defaultSettings?.configs?.siteTitle,
        plugins: [
          googleAnalytics({
            trackingId: defaultSettings?.configs?.googleTrackingId,
          }),
        ],
      });
    }
    return ga;
  }, [
    defaultSettings?.configs?.googleTrackingId,
    defaultSettings?.configs?.siteTitle,
  ]);

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
      analytics,
    };
  }, [settings, settingsState]);

  return (
    <SettingsContext.Provider value={settingsContext}>
      {isFunction(children) ? children(settingsContext) : children}
    </SettingsContext.Provider>
  );
}

export default SettingsProvider;
