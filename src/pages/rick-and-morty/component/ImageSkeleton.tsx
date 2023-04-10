import * as React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Skeleton from "@mui/material/Skeleton";

const ImageSkeleton = ({ loading }: { loading: boolean }) => {
  return (
    <Grid container wrap="nowrap">
      {Array.from(new Array(4)).map((index: number) => (
        <Box key={index} sx={{ width: 280, marginRight: 0.5, my: 5 }}>
          <Skeleton variant="rectangular" width={280} height={155} />
          <Box sx={{ pt: 0.5 }}>
            <Skeleton width="60%" />
            <Skeleton width="60%" />
            <Skeleton /> <Skeleton />
          </Box>
        </Box>
      ))}
    </Grid>
  );
};

export default ImageSkeleton;
