import type { AvatarProps as MuiAvatarProps } from "@mui/material";
import { Maybe } from "~/types/utils";

export type AvatarProps = {
  name?: Maybe<string>;
  image?: Maybe<string>;
  size?: number;
} & MuiAvatarProps;
