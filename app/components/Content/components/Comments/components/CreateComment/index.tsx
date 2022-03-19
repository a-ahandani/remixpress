import {
  TextField,
  Box,
  Grid,
  Button,
  Typography,
  Collapse,
} from "@mui/material";
import { useState } from "react";

import type { CreateCommentProps, CreateCommentTypes } from "./types";
export default function CreateComment({ parentId }: CreateCommentProps) {
  const [open, setOpen] = useState(false);
  const [formValue, setFormValue] = useState<CreateCommentTypes>();

  function handleSubmit() {
    console.log(formValue, parentId);
  }
  return (
    <Box className="comment-box">
      <Button
        size="small"
        onClick={() => setOpen(!open)}
        variant="text"
        disableRipple
        disableFocusRipple
        disableTouchRipple
        disableElevation
      >
        Reply
      </Button>
      <Collapse in={open}>
        <Grid sx={{ mt: 1 }} container spacing={1}>
          <Grid
            item
            xs={12}
            sm={4}
            sx={{ display: "flex", flexDirection: "column" }}
          >
            <TextField
              id="outlined-multiline-flexible"
              label="Name"
              onChange={(e) =>
                setFormValue({ ...formValue, name: e.target.value })
              }
              size="small"
              sx={{ mb: 1 }}
            />
            <TextField
              id="outlined-multiline-flexible"
              label="Email"
              onChange={(e) =>
                setFormValue({ ...formValue, email: e.target.value })
              }
              size="small"
            />
          </Grid>
          <Grid item xs={12} sm={8}>
            <TextField
              id="outlined-multiline-flexible"
              label="Comment"
              onChange={(e) =>
                setFormValue({ ...formValue, comment: e.target.value })
              }
              multiline
              fullWidth
              minRows={2.4}
            />
          </Grid>
          <Grid item xs={12}>
            <Box
              sx={{
                mx: 1,
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <Typography sx={{ flex: 1 }} variant="caption">
                Emails wont be published.
              </Typography>
              <Button
                size="small"
                variant="contained"
                onClick={handleSubmit}
                disableElevation
              >
                Submit
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Collapse>
    </Box>
  );
}
