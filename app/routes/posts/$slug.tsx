import { useLoaderData, Link as RmxLink } from "remix";
import { SvgIcon, Button } from "@mui/material";
import type { LoaderFunction } from "remix";
import { ArrowBackOutlined } from "@mui/icons-material";

import { getPost } from "~/api/posts/getPost";
import { Box } from "@mui/material";
import Title from "~/components/Content/components/Title";
import Body from "~/components/Content/components/Body";

export const loader: LoaderFunction = async ({ params }) => {
  return getPost({ slug: params.slug as string });
};

export default function PostSlug() {
  const { title, content, ...rest } = useLoaderData();

  return (
    <div>
      <Button
        component={RmxLink}
        disableRipple
        variant="text"
        to={"/posts"}
        startIcon={<ArrowBackOutlined />}
      >
        Back to blog
      </Button>

      <Title variant="h2">{title}</Title>
      <Box sx={{ mt: 4 }}>
        <Body>{content}</Body>
      </Box>
    </div>
  );
}
