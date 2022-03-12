import { SxProps } from "@mui/system";
import { AtLeastOne } from "~/types/utils";

type BaseBodyProps = {
  body: string;
  children?: string;
  sx?: SxProps;
};

export type BodyProps = AtLeastOne<BaseBodyProps>;
