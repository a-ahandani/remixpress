import { ReactNode } from "react";
import SettingsProvider from "~/components/Settings/components/SettingsProvider";

export default function Settings({ children }: { children: ReactNode }) {
  return <SettingsProvider>{children}</SettingsProvider>;
}
