import { Link as RmxLink } from "remix";
import { Typography, Link, Skeleton } from "@mui/material";

import useLayout from "~/components/Layout/hooks/use-layout-context";
import useSettings from "~/components/Settings/hooks/use-settings-context";
import type { LogoProps } from "./types";

export enum LOGO_TYPES {
  LARGE = "large",
  MEDIUM = "medium",
  SMALL = "small",
}

const LOGO_SIZES: {
  [key: string]: string;
} = {
  [LOGO_TYPES.LARGE]: "2.7rem",
  [LOGO_TYPES.MEDIUM]: "1.5rem",
  [LOGO_TYPES.SMALL]: "1.2rem",
};

export default function Logo({
  size = "medium",
  description,
  hideDescription,
  title,
  LogoTypographyProps,
  ...rest
}: LogoProps) {
  const settings = useSettings();
  const { layoutState, setLayoutState } = useLayout();
  const { isMenuOpen } = layoutState;

  function handleCloseMenu() {
    if (isMenuOpen)
      setLayoutState({
        ...layoutState,
        isMenuOpen: false,
      });
  }

  return (
    <Link
      {...rest}
      onClick={handleCloseMenu}
      component={RmxLink}
      to={"/"}
      prefetch="intent"
      color="text.primary"
      sx={{
        textDecoration: "none",
        ...rest?.sx,
      }}
    >
      <Typography
        {...LogoTypographyProps}
        sx={{
          fontWeight: "bold",
          fontSize: LOGO_SIZES[size],
          ...LogoTypographyProps?.sx,
        }}
        variant="h5"
      >
        {settings.state === "loading" ? (
          <Skeleton width={140} />
        ) : (
          settings.common?.generalSettingsTitle
        )}
      </Typography>
      {!hideDescription && (
        <Typography sx={{ fontWeight: "light" }} variant="caption">
          {settings.state === "loading" ? (
            <Skeleton width={220} />
          ) : (
            settings.common?.generalSettingsDescription
          )}
        </Typography>
      )}
    </Link>
  );
}
