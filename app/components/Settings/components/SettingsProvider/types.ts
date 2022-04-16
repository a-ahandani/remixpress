import { ReactNode } from "react";
import type { SettingsContextProps } from "../../context";

export type SettingsProps = SettingsContextProps & {};

export type SettingsProviderProps = {
  children: ReactNode;
  defaultSettings?: SettingsProps;
};
