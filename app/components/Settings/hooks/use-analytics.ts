import { useEffect } from "react";
import useSettings from "~/components/Settings/hooks/use-settings-context";

function useAnalytics({
  type,
  title,
  url,
}: {
  type?: string;
  title?: string;
  url?: string;
}) {
  const settings = useSettings();

  useEffect(() => {
    settings?.analytics?.page({
      type,
      title,
      url,
    });
  }, [url, title, type]);
}

export default useAnalytics;
