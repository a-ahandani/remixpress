export type CreateCommentTypes = {
  name?: string;
  email?: string;
  comment?: string;
};
export type CreateCommentProps = Partial<Comment> &
  CreateCommentTypes & {
    parentId?: string;
  };
