// @flow
import { createContext } from "react";
import type { SettingsProps } from "./components/SettingsProvider/types";

export interface SettingsContextProps {
  setSettings: (params: SettingsProps) => void;
  settings?: SettingsProps;
}

const SettingsContext = createContext<SettingsContextProps>(
  {} as SettingsContextProps
);

export default SettingsContext;
