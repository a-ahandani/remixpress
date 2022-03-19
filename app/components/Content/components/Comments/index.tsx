import Comment from "./components/Comment";
import CreateComment from "./components/CreateComment";
import { isEmpty } from "lodash";
import { Box } from "@mui/material";

import type { CommentsProps } from "./types";
export default function Comments({ comments, child }: CommentsProps) {
  return (
    <>
      {!child && <CreateComment />}
      {comments?.nodes?.map((comment) => {
        const { content, date, id, author, replies } = comment || {};
        return (
          <Box sx={{ backgroundColor: "#EEE", borderRadius: 3, p: 2, mb: 1 }}>
            <Comment key={id} author={author} date={date}>
              {content}
            </Comment>
            <CreateComment parentId={id} />
            {!isEmpty(replies?.nodes) && (
              <Box>
                <Comments comments={replies} child />
              </Box>
            )}
          </Box>
        );
      })}
    </>
  );
}
