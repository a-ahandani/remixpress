import { Typography } from "@mui/material";
import dayjs from "dayjs";
import type { DateProps } from "./types";

export default function Date({
  date,
  format = "dddd, MMM DD, YYYY",
  ...rest
}: DateProps) {
  const day = dayjs(date);
  return (
    <Typography variant="caption" {...rest}>
      {day.format(format)}
    </Typography>
  );
}
