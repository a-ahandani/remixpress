import Comment from "./components/Comment";
import { isEmpty } from "lodash";
import { Box } from "@mui/material";

import type { CommentsProps } from "./types";
export default function Comments({ comments }: CommentsProps) {
  return (
    <>
      {comments?.nodes?.map((comment) => {
        const { content, date, id, author, replies, parentId } = comment || {};
        return (
          <Box sx={{ backgroundColor: "#EEE", borderRadius: 3, p: 2, mb: 1 }}>
            <Comment key={id} author={author} date={date}>
              {content}
            </Comment>
            {!isEmpty(replies?.nodes) && (
              <Box sx={{ ml: 10 }}>
                <Comments comments={replies} />
              </Box>
            )}
          </Box>
        );
      })}
    </>
  );
}
