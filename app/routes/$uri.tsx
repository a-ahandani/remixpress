import { useLoaderData } from "remix";
import type { LoaderFunction, ActionFunction } from "remix";
import { getNode } from "~/api/getNode";
import type { Node } from "~/types";
import { createComment } from "~/api/createComment";
import { Box } from "@mui/material";
import Title from "~/components/Content/components/Title";
import Comments from "~/components/Content/components/Comments";
import Author from "~/components/Content/components/Author";
import Taxonomies from "~/components/Content/components/Taxonomies";
import Body from "~/components/Content/components/Body";
import BackToBlog from "~/components/Content/components/BackToBlog";

export const loader: LoaderFunction = async ({ params }) => {
  return getNode({ uri: params.uri as string });
};

export const action: ActionFunction = async ({ request }) => {
  const formData = await request.formData();
  const values = Object.fromEntries(formData);
  return createComment(values);
};

export default function PostUri() {
  const {
    title,
    content,
    comments,
    databaseId,
    categories,
    tags,
    author,
    commentStatus,
  } = useLoaderData<Node>();
  return (
    <div>
      <BackToBlog />
      <Title
        gutterBottom
        sx={{
          fontSize: (theme) => ({
            xs: theme.typography.h4.fontSize,
            sm: theme.typography.h3.fontSize,
            md: theme.typography.h2.fontSize,
          }),
        }}
        variant="h2"
      >
        {title}
      </Title>
      <Box sx={{ mb: 5 }}>
        <Taxonomies data={tags?.nodes} />
      </Box>
      <Body>{content}</Body>
      <Box>
        <Taxonomies
          ChipProps={{ variant: "outlined", sx: { borderRadius: 0 } }}
          data={categories?.nodes}
        />
      </Box>
      <Box sx={{ py: 2 }}>
        <Taxonomies data={tags?.nodes} />
      </Box>
      {author?.node && <Author data={author.node} />}

      <Comments
        sx={{ mt: 6, pb: 6 }}
        databaseId={databaseId}
        comments={comments}
        commentStatus={commentStatus}
      />
    </div>
  );
}
