import { Avatar as MuiAvatar, Box, Typography } from "@mui/material";

import type { AvatarProps } from "./types";

export default function Avatar({ name, image, size, sx }: AvatarProps) {
  return (
    <MuiAvatar
      alt={name}
      src={image}
      sx={{ width: size, height: size, ...sx }}
    />
  );
}
