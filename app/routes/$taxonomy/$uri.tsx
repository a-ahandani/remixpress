import { useLoaderData, Link as RmxLink } from "remix";
import { Button } from "@mui/material";
import type { LoaderFunction, ActionFunction } from "remix";
import { ArrowBackOutlined } from "@mui/icons-material";
import { getNode } from "~/api/getNode";
import type { Node } from "~/types/posts";
import { createComment } from "~/api/createComment";
import Body from "~/components/Content/components/Body";
import Excerpt from "~/components/Content/components/Excerpt";
import Title from "~/components/Content/components/Title";

export const loader: LoaderFunction = async ({ params }) => {
  return getNode({ uri: `${params.taxonomy}/${params.uri}` as string });
};

export const action: ActionFunction = async ({ request }) => {
  const formData = await request.formData();
  const values = Object.fromEntries(formData);
  return createComment(values);
};

export default function TaxonomyUri() {
  const { posts, name, description, __typename, ...rest } =
    useLoaderData<Node>();

  return (
    <div>
      <Button
        component={RmxLink}
        disableRipple
        variant="text"
        to={"/"}
        startIcon={<ArrowBackOutlined />}
      >
        Back to blog
      </Button>

      <Title variant="h1">
        {__typename}: {name}
      </Title>
      <Body>{description}</Body>
      {posts?.nodes?.map(({ id, ...rest }) => (
        <Excerpt {...rest} hideCommentsButton key={id} />
      ))}
    </div>
  );
}
