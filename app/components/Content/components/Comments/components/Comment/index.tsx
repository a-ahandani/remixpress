import { Typography, Box, Divider } from "@mui/material";
import Date from "~/components/Date";
import Body from "~/components/Content/components/Body";

import type { CommentProps } from "./types";
export default function Comment({ date, author, children, sx }: CommentProps) {
  const authorName = author?.node?.name;
  return (
    <Box sx={sx}>
      <Divider sx={{ my: 2 }} light variant="fullWidth" textAlign="left">
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography sx={{ p: 0, mr: 1 }} variant="h6">
            {authorName}
          </Typography>
          <Date date={date} format="MMM DD, YYYY" />
        </Box>
      </Divider>

      <Body
        sx={{
          p: ({ typography }) => {
            return typography.body2;
          },
        }}
      >
        {children}
      </Body>
    </Box>
  );
}
