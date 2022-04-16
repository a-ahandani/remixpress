import { useTransition, useActionData, Form } from "remix";
import { useEffect, useRef } from "react";
import ReplyIcon from "@mui/icons-material/Reply";
import CloseIcon from "@mui/icons-material/Close";
import {
  TextField,
  Box,
  Grid,
  Button,
  IconButton,
  Tooltip,
  Typography,
  Collapse,
} from "@mui/material";
import { useState } from "react";
import type { CreateCommentProps } from "./types";
export default function CreateComment({
  commentOn,
  parent,
  parentAuthor,
  open: openProp,
  sx,
}: CreateCommentProps) {
  const transition = useTransition();
  const actionData = useActionData();
  const parentAuthorName = parentAuthor?.name;

  const isSubmitting = transition.state == "submitting";
  const isReloading = transition.type === "actionReload";

  const formRef = useRef<HTMLFormElement | null>(null);
  const [open, setOpen] = useState(openProp);

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
    <Box sx={sx}>
      {parentAuthorName && (
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-end",
            px: 1,
          }}
        >
          <Tooltip title={open ? "Close" : `Reply to ${parentAuthorName}`}>
            <IconButton
              size="small"
              aria-label={`Reply to ${parentAuthorName}`}
              onClick={() => setOpen(!open)}
            >
              {open ? (
                <CloseIcon fontSize="small" />
              ) : (
                <ReplyIcon fontSize="small" />
              )}
            </IconButton>
          </Tooltip>
        </Box>
      )}
      <Collapse in={open}>
        <Form ref={formRef} method="post">
          {parent && <input type="hidden" name="parent" value={parent} />}
          {commentOn && (
            <input type="hidden" name="commentOn" value={commentOn} />
          )}
          <Grid sx={{ mt: 1, mb: 3 }} container spacing={1}>
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
