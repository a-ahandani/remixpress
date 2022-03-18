import Comment from "./components/Comment";

import type { CommentsProps } from "./types";
export default function Comments({ comments }: CommentsProps) {
  return (
    <>
      {comments?.nodes?.map((comment) => {
        const { content, date, id, author, replies } = comment || {};
        return (
          <>
            <Comment key={id} author={author} date={date}>
              {content}
            </Comment>
          </>
        );
      })}
    </>
  );
}
