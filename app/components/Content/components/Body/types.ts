import { SxProps } from "@mui/system";
import { AtLeastOne } from "~/types/utils";
import { ReactNode } from "react";

type BaseBodyProps = {
  body: string;
  children?: ReactNode;
  sx?: SxProps;
};

export type BodyProps = AtLeastOne<BaseBodyProps>;
