import React from "react";
import Grid from "@mui/material/Grid";
import Skeleton from "@mui/material/Skeleton";

const ImageSkeleton = () => {
  return (
    <Grid container spacing={2} sx={{ marginTop: 2 }}>
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
  );
};

export default ImageSkeleton;
