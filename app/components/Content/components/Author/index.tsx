import { Box, Avatar, Typography } from "@mui/material";
import Gravatar from "react-gravatar";
import type { AuthorProps } from "./types";
export default function Author({ data }: AuthorProps) {
  if (!data) return null;
  return (
    <Box
      sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
    >
      <Box sx={{ p: 3 }}>
        {/* {data.avatar?.url && (
          <Avatar
            alt={`${data.firstName} ${data.lastName}`}
            src={}
            sx={{ width: data.avatar?.size, height: data.avatar?.size }}
          />
        )} */}
        <Gravatar size={150} email="a.e.ahandani@gmail.com" />
      </Box>
      <Box>
        <Typography variant="h4">
          {data.firstName} {data.lastName}
        </Typography>
        <Typography variant="body2">{data.description}</Typography>
      </Box>
    </Box>
  );
}
