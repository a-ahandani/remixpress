import Comment from "./components/Comment";
import CreateComment from "./components/CreateComment";
import { isEmpty } from "lodash";
import { Box, Divider, Typography } from "@mui/material";

import type { CommentsProps } from "./types";
export default function Comments({
  comments,
  child,
  databaseId,
}: CommentsProps) {
  return (
    <div id="comments">
      <Divider sx={{ mb: 3 }} light variant="fullWidth" textAlign="center">
        <Typography variant="caption">COMMENTS</Typography>
      </Divider>
      {!child && <CreateComment commentOn={databaseId} />}
      {comments?.nodes?.map((comment) => {
        const {
          content,
          date,
          id: commentId,
          databaseId: commentDatabaseId,
          author,
          replies,
        } = comment || {};
        return (
          <Box sx={{ backgroundColor: "#EEE", borderRadius: 3, p: 2, mb: 1 }}>
            <Comment key={commentId} author={author} date={date}>
              {content}
            </Comment>
            <CreateComment parent={commentDatabaseId} commentOn={databaseId} />
            {!isEmpty(replies?.nodes) && (
              <Box>
                <Comments databaseId={databaseId} comments={replies} child />
              </Box>
            )}
          </Box>
        );
      })}
    </div>
  );
}
