import { SxProps } from "@mui/system";
import { Maybe } from "~/types/utils";

export type AvatarProps = {
  name?: Maybe<string>;
  image?: Maybe<string>;
  size?: number;
  sx?: SxProps;
};
