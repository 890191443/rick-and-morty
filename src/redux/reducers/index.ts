import { combineReducers } from "@reduxjs/toolkit";
import { getCharactersSlice } from "../action/rick-and-morty/charactersSlice";

const rootReducer = combineReducers({
  characters: getCharactersSlice.reducer,
});

export default rootReducer;
