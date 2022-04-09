import type { BoxProps } from "@mui/material";
import { AtLeastOne } from "~/types/utils";
import { ReactNode } from "react";

type BaseBodyProps = {
  body: string;
  children?: ReactNode;
} & BoxProps;

export type BodyProps = AtLeastOne<BaseBodyProps>;
