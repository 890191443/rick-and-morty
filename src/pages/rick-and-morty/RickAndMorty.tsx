import React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useDispatch } from "react-redux";
import { Dispatch } from "redux";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store/Store";
import { getCharactersRickMorty } from "../../redux/action/rick-and-morty/getCharacters";
import ImageSkeleton from "./component/ImageSkeleton";
import { Alert } from "@mui/material";
import Footer from "./component/Footer";
import Header from "./component/Header";
import SlideDescription from "./component/SlideDescription";
import CharacterList from "./component/CharacterList";

const theme = createTheme();

export default function RickAndMorty() {
  const dispatch: Dispatch<any> = useDispatch();

  const getCharacters = useSelector(
    (state: RootState) => state.characters.getCharacters
  );

  const charactersLoading = useSelector(
    (state: RootState) => state.characters.charactersLoading
  );

  const getData = () => {
    dispatch(getCharactersRickMorty());
  };

  return (
    <ThemeProvider theme={theme}>
      <Header />
      <main>
        <SlideDescription getData={getData} />
        {charactersLoading ? (
          <ImageSkeleton />
        ) : getCharacters ? (
          <CharacterList characters={getCharacters} />
        ) : (
          <Alert variant="outlined" severity="warning" sx={{ marginTop: 2 }}>
            There is no data to display.
          </Alert>
        )}
      </main>
      <Footer />
    </ThemeProvider>
  );
}
