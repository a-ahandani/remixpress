import { Divider, Button } from "@mui/material";
import { Link as RmxLink } from "remix";
import { ArrowBackOutlined } from "@mui/icons-material";
import type { BackToBlogProps } from "./types";

export default function BackToBlog({}: BackToBlogProps) {
  return (
    <Divider sx={{ mb: 3 }} light variant="fullWidth" textAlign="center">
      <Button
        component={RmxLink}
        disableRipple
        variant="text"
        color="inherit"
        sx={{ fontSize: (theme) => theme.typography.caption.fontSize }}
        to={"/"}
        startIcon={<ArrowBackOutlined />}
      >
        Back to blog
      </Button>
    </Divider>
  );
}
