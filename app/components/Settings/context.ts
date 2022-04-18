import { createContext } from "react";
import type { CommonSettings, Menu, SiteConfigs } from "~/types";
import { AnalyticsInstance } from "analytics";

export interface SettingsContextProps {
  configs?: SiteConfigs;
  analytics?: AnalyticsInstance;
  common?: CommonSettings;
  menus?: {
    [slug: string]: Menu;
  };
  state?: "loading" | "idle" | "submitting";
}

const SettingsContext = createContext<SettingsContextProps>(
  {} as SettingsContextProps
);

export default SettingsContext;
