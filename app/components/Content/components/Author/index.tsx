import { Box, Divider, Typography } from "@mui/material";
import Gravatar from "react-gravatar";
import type { AuthorProps } from "./types";

export default function Author({ data }: AuthorProps) {
  return (
    <div>
      <Divider sx={{ mb: 2 }} light variant="fullWidth" textAlign="center">
        <Typography variant="caption">AUTHOR</Typography>
      </Divider>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          justifyContent: "center",
          alignItems: "center",
          pb: 2,
        }}
      >
        <Box sx={{ p: 1, flex: 1 }}>
          <Gravatar
            size={400}
            style={{ width: "100%", height: "auto" }}
            email="a.e.ahandani@gmail.com"
          />
        </Box>
        <Box sx={{ pl: 3, flex: 2.2 }}>
          <Typography variant="h4" gutterBottom>
            {data?.firstName} {data?.lastName}
          </Typography>
          <Typography variant="body2">{data?.description}</Typography>
        </Box>
      </Box>
    </div>
  );
}
