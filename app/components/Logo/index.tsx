import { Link as RmxLink } from "remix";
import { Box, Typography, Link } from "@mui/material";

export default function Logo({ ...rest }) {
  return (
    <Link
      {...rest}
      component={RmxLink}
      to={"/"}
      color="text.primary"
      sx={{
        textDecoration: "none",
        ...rest?.sx,
      }}
    >
      <Typography sx={{ fontWeight: "bold" }} variant="h5">
        AHANDANI.
      </Typography>
      <Typography sx={{ fontWeight: "light" }} variant="caption">
        AHAMAD ESMAEILZADEH AHANDANI
      </Typography>
    </Link>
  );
}
