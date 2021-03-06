import { useLoaderData } from "@remix-run/react";
import type { LoaderFunction } from "@remix-run/node";
import { getNode } from "~/api/getNode";
import type { Node } from "~/types";
import Body from "~/components/Content/components/Body";
import Excerpt from "~/components/Content/components/Excerpt";
import Title from "~/components/Content/components/Title";
import BackToBlog from "~/components/Content/components/BackToBlog";

export const loader: LoaderFunction = async ({ params }) => {
  return getNode({ uri: `${params.taxonomy}/${params.uri}` as string });
};

export default function TaxonomyUri() {
  const { posts, name, description, __typename, uri, ...rest } =
    useLoaderData<Node>();

  return (
    <div>
      <BackToBlog />
      <Title
        gutterBottom
        sx={{
          fontSize: (theme) => ({
            xs: theme.typography.h4.fontSize,
            sm: theme.typography.h3.fontSize,
          }),
          fontWeight: "bold",
        }}
        variant="h2"
      >
        {__typename}: {name}
      </Title>
      <Body>{description}</Body>
      {posts?.nodes?.map(({ id, ...rest }) => (
        <Excerpt
          {...rest}
          TitleProps={{ variant: "h5" }}
          hideCommentsButton
          key={id}
        />
      ))}
    </div>
  );
}
