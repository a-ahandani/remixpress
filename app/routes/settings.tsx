import type { LoaderFunction } from "@remix-run/node";
import { getSettings } from "~/api/getSettings";

export const loader: LoaderFunction = async () => {
  return getSettings();
};

export default function Settings() {
  return <></>;
}
