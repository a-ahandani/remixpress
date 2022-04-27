import { Box, Divider, Typography, Card, CardMedia, Link } from "@mui/material";
import type { AuthorProps } from "./types";
import { Link as RmxLink } from "@remix-run/react";

export default function Author({ data }: AuthorProps) {
  return (
    <div>
      <Divider sx={{ mb: 5 }} light variant="fullWidth" textAlign="center">
        <Typography variant="caption">AUTHOR</Typography>
      </Divider>
      <Card
        raised={false}
        elevation={0}
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          justifyContent: "center",
          alignItems: "center",
          mb: 2,
        }}
      >
        <Box sx={{ flex: 1, width: "100%", maxWidth: 200 }}>
          <Link
            component={RmxLink}
            variant="h5"
            to={"/about/"}
            prefetch="intent"
            color="text.primary"
          >
            <CardMedia
              sx={{ borderRadius: 2, mb: { xs: 2, sm: 0 } }}
              component="img"
              image={data?.avatar?.url}
              alt={`${data?.firstName} ${data?.lastName}`}
            />
          </Link>
        </Box>

        <Box sx={{ pl: { xs: 0, sm: 3 }, flex: 2.2 }}>
          <Typography variant="h4" gutterBottom>
            {data?.firstName} {data?.lastName}
          </Typography>
          <Typography variant="body2">{data?.description}</Typography>

          <Link
            component={RmxLink}
            to={"/about/"}
            prefetch="intent"
            color="text.primary"
          >
            <Typography variant="body2">read more...</Typography>
          </Link>
        </Box>
      </Card>
    </div>
  );
}
