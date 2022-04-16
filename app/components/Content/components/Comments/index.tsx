import Comment from "./components/Comment";
import CreateComment from "./components/CreateComment";
import { isEmpty } from "lodash";
import { Box, Divider, Typography } from "@mui/material";

import type { CommentsProps } from "./types";
export default function Comments({
  comments,
  child,
  databaseId,
  commentStatus,
  sx,
}: CommentsProps) {
  const canCreate = commentStatus !== "closed";
  return (
    <Box sx={sx} id="comments">
      {!child && (
        <>
          <Divider sx={{ mb: 6 }} light variant="fullWidth" textAlign="center">
            <Typography variant="caption">
              {commentStatus === "closed" ? "COMMENTS ARE CLOSED" : "COMMENTS"}
            </Typography>
          </Divider>

          {canCreate && (
            <CreateComment sx={{ mb: 8 }} open commentOn={databaseId} />
          )}
        </>
      )}
      {comments?.nodes?.map((comment) => {
        const {
          content,
          date,
          id: commentId,
          databaseId: commentDatabaseId,
          author,
          replies,
        } = comment || {};
        const hasReplies = !isEmpty(replies?.nodes);

        return (
          <Box
            sx={{
              borderRight: (theme) => ({
                xs: "none",
                sm:
                  hasReplies && !child
                    ? `1px solid ${theme.palette.grey[300]}`
                    : "none",
              }),
              p: 0,
              mb: 2,
            }}
          >
            <Comment
              sx={{ px: 0, pb: { xs: 0, sm: 2 } }}
              key={commentId}
              author={author}
              date={date}
            >
              {content}
            </Comment>
            {canCreate && (
              <CreateComment
                sx={{ mb: 2, px: { xs: 0, sm: 2 } }}
                parent={commentDatabaseId}
                parentAuthor={author?.node}
                commentOn={databaseId}
              />
            )}
            {hasReplies && (
              <Box>
                <Comments databaseId={databaseId} comments={replies} child />
              </Box>
            )}
          </Box>
        );
      })}
    </Box>
  );
}
