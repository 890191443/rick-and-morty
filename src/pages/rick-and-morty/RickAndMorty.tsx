import React, { useEffect } from "react";
import { Alert, AlertTitle, Chip, Divider, Grid } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { getCharactersRickMorty } from "../../redux/action/rick-and-morty/getCharacters";
import { Dispatch } from "redux";
import { RootState } from "../../redux/store/Store";
import ImageSkeleton from "./component/ImageSkeleton";
import CharacterList from "./component/CharacterList";

const RickAndMorty = () => {
  const dispatch: Dispatch<any> = useDispatch();

  const getCharacters = useSelector(
    (state: RootState) => state.characters.getCharacters
  );

  const charactersLoading = useSelector(
    (state: RootState) => state.characters.charactersLoading
  );

  useEffect(() => {
    dispatch(getCharactersRickMorty());
  }, [dispatch]);

  if (charactersLoading) {
    return <ImageSkeleton />;
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
      <Divider sx={{ marginTop: 2 }}>
        <Chip label="Rick and Morty Characters" />
      </Divider>
      {getCharacters.length > 0 ? (
        <>
          <p>Total Characters: {getCharacters.length}</p>
          <Grid container spacing={2} sx={{ marginBottom: 2 }}>
            {getCharacters && <CharacterList characters={getCharacters} />}
          </Grid>
        </>
      ) : (
        <Alert variant="outlined" severity="warning" sx={{ marginTop: 2 }}>
          There is no data to display.
        </Alert>
      )}
    </>
  );
};

export default RickAndMorty;
