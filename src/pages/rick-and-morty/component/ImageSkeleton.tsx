import React from "react";
import Grid from "@mui/material/Grid";
import Skeleton from "@mui/material/Skeleton";
import Container from "@mui/material/Container";

const ImageSkeleton = () => {
  return (
    <Container sx={{ py: 8 }} maxWidth="md">
      <Grid container spacing={4}>
        <Grid item xs={12} sm={6} md={4}>
          <Skeleton variant="rectangular" height={210} />
          <Skeleton width="60%" />
          <Skeleton width="60%" />
          <Skeleton /> <Skeleton />
        </Grid>

        <Grid item xs={12} sm={6} md={4}>
          <Skeleton variant="rectangular" height={210} />
          <Skeleton width="60%" />
          <Skeleton width="60%" />
          <Skeleton /> <Skeleton />
        </Grid>

        <Grid item xs={12} sm={6} md={4}>
          <Skeleton variant="rectangular" height={210} />
          <Skeleton width="60%" />
          <Skeleton width="60%" />
          <Skeleton /> <Skeleton />
        </Grid>

        <Grid item xs={12} sm={6} md={4}>
          <Skeleton variant="rectangular" height={210} />
          <Skeleton width="60%" />
          <Skeleton width="60%" />
          <Skeleton /> <Skeleton />
        </Grid>

        <Grid item xs={12} sm={6} md={4}>
          <Skeleton variant="rectangular" height={210} />
          <Skeleton width="60%" />
          <Skeleton width="60%" />
          <Skeleton /> <Skeleton />
        </Grid>

        <Grid item xs={12} sm={6} md={4}>
          <Skeleton variant="rectangular" height={210} />
          <Skeleton width="60%" />
          <Skeleton width="60%" />
          <Skeleton /> <Skeleton />
        </Grid>
      </Grid>
    </Container>
  );
};

export default ImageSkeleton;
