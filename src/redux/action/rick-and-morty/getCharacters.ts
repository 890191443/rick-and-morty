import { AnyAction, Dispatch } from "redux";
import { getCharactersSlice } from "./charactersSlice";
import axios from "axios";
import { Characters } from "../../../pages/rick-and-morty/type/CharacterTypes";

export const { getCharacters, charactersLoading } = getCharactersSlice.actions;
const rickAndMortyUrl = "https://rickandmortyapi.com/graphql";

export const getCharactersRickMorty = () => {
  return (dispatch: Dispatch<AnyAction>) => {
    dispatch(charactersLoading(true));
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
                      created
                      gender
                      image
                      location{
                        id
                        name
                        type
                        dimension
                      }
                      origin{
                        id
                        name
                      }
                      type
                      episode{
                        id
                        name
                        episode
                      }
                    }
                  }
                }
              `,
        })
        .then(async (res) => {
          dispatch(getCharacters(res.data.data.characters.results));
          dispatch(charactersLoading(false));
        })
        .catch(() => {
          dispatch(charactersLoading(false));
          throw "There was an error receiving information";
        });
    };
    getAllItems();
  };
};

export default getCharactersSlice.reducer;
