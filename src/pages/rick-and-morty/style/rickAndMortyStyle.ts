import { createStyles, makeStyles } from "@mui/styles";

export const useRickAndMortyStyle = makeStyles(() =>
  createStyles({
    avatarBox: {
      width: 12,
      height: 12,
      marginRight: 1,
      display: "inline-block",
    },
    mt: {
      marginTop: 2,
    },
    mb: {
      marginBottom: 2,
    },
  })
);
