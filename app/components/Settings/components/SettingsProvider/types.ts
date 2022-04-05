import { ReactNode } from "react";
import type { Settings } from "~/api/getSettings";

export type SettingsProps = Settings & {};

export type SettingsProviderProps = {
  children: ReactNode;
  defaultSettings?: SettingsProps;
};
