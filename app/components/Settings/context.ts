// @flow
import { createContext } from "react";
import type { CommonSettings, Menu } from "~/api/getSettings";

export interface SettingsContextProps {
  common?: CommonSettings;
  menus?: {
    [slug: string]: Menu;
  };
  state: "loading" | "idle" | "submitting";
}

const SettingsContext = createContext<SettingsContextProps>(
  {} as SettingsContextProps
);

export default SettingsContext;
