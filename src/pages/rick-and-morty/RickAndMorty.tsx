import React, { useEffect } from "react";
import { Alert, AlertTitle, Chip, Divider, Grid } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { getCharactersRickMorty } from "../../redux/action/rick-and-morty/getCharacters";
import { Character } from "./type/CharacterTypes";
import CardView from "./component/CardView";
import { Dispatch } from "redux";
import { RootState } from "../../redux/store/Store";
import ImageSkeleton from "./component/ImageSkeleton";

const RickAndMorty = () => {
  const dispatch: Dispatch<any> = useDispatch();

  const getCharacters = useSelector(
    (state: RootState) => state.characters.getCharacters
  );

  useEffect(() => {
    dispatch(getCharactersRickMorty());
  }, [dispatch]);

  if (getCharacters.length === 0) {
    return (
      <>
        <ImageSkeleton loading={true} />
        <ImageSkeleton loading={true} />
      </>
    );
  }

  if (getCharacters === undefined) {
    return (
      <Alert severity="error">
        <AlertTitle>Error</AlertTitle>
        There was an error receiving information
      </Alert>
    );
  }

  return (
    <>
      <Divider sx={{ marginTop: 2 }} >
        <Chip label="Rick and Morty Characters" />
      </Divider>
      <p>Total Characters: {getCharacters.length}</p>

      <Grid container spacing={2}>
        {getCharacters.map((character: Character) => (
          <CardView {...character} />
        ))}
      </Grid>
    </>
  );
};

export default RickAndMorty;
