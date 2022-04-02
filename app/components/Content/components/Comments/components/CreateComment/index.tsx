import { useTransition, useActionData, Form } from "remix";
import { useEffect, useRef } from "react";
import {
  TextField,
  Box,
  Grid,
  Button,
  Typography,
  Collapse,
} from "@mui/material";
import { useState } from "react";
import type { CreateCommentProps } from "./types";
export default function CreateComment({
  commentOn,
  parent,
}: CreateCommentProps) {
  const transition = useTransition();
  const actionData = useActionData();

  const isSubmitting = transition.state == "submitting";
  const isReloading = transition.type === "actionReload";

  const formRef = useRef<HTMLFormElement | null>(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!isSubmitting) {
      formRef.current?.reset();
    }
  }, [isSubmitting]);

  useEffect(() => {
    if (open && isReloading) {
      setOpen(false);
    }
  }, [open, isReloading]);

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
        <Form ref={formRef} method="post">
          {parent && <input type="hidden" name="parent" value={parent} />}
          {commentOn && (
            <input type="hidden" name="commentOn" value={commentOn} />
          )}
          <Grid sx={{ mt: 1 }} container spacing={1}>
            <Grid
              item
              xs={12}
              sm={4}
              sx={{ display: "flex", flexDirection: "column" }}
            >
              <TextField
                label="Name"
                name="author"
                size="small"
                required
                sx={{ mb: 1 }}
              />
              <TextField
                label="Email"
                type="email"
                placeholder="Enter a valid email address"
                name="authorEmail"
                size="small"
              />
            </Grid>
            <Grid item xs={12} sm={8}>
              <TextField
                label="Comment"
                name="content"
                required
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
                  type="submit"
                  disableElevation
                >
                  Submit
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Form>
      </Collapse>
    </Box>
  );
}
