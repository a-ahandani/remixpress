import { ReactNode } from "react";
import type { SettingsContextProps } from "./context";

export type SettingsProps = {
  children: ReactNode;
  defaultSettings?: SettingsContextProps;
};
