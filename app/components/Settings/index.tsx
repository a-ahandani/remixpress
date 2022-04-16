import SettingsProvider from "~/components/Settings/components/SettingsProvider";
import type { SettingsProps } from "./types";

export default function Settings({ children, defaultSettings }: SettingsProps) {
  return (
    <SettingsProvider defaultSettings={defaultSettings}>
      {children}
    </SettingsProvider>
  );
}
