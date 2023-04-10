import { AnyAction, Dispatch } from "redux";
import { getCharactersSlice } from "./charactersSlice";
import axios from "axios";
import { Characters } from "../../../pages/rick-and-morty/type/CharacterTypes";

export const { getCharacters } = getCharactersSlice.actions;
const rickAndMortyUrl = "https://rickandmortyapi.com/graphql";

export const getCharactersRickMorty = () => {
  return (dispatch: Dispatch<AnyAction>) => {
    const getAllItems = async () => {
      await axios
        .post<Characters>(rickAndMortyUrl, {
          query: `
                query {
                  characters {
                    info {
                      count
                    }
                    results {
                      id
                      name
                      status
                      species
                      gender
                      image
                    }
                  }
                }
              `,
        })
        .then(async (res) => {
          dispatch(getCharacters(res.data.data.characters.results));
        })
        .catch(() => {
          throw "There was an error receiving information";
        });
    };
    getAllItems();
  };
};

export default getCharactersSlice.reducer;
