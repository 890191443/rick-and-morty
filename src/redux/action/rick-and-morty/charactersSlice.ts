import { createSlice } from "@reduxjs/toolkit";

export const getCharactersSlice = createSlice({
  name: "characters",
  initialState: {
    getCharacters: [],
    charactersLoading: false,
  },
  reducers: {
    getCharacters: (state, action) => {
      state.getCharacters = action.payload;
    },

    charactersLoading: (state, action) => {
      state.charactersLoading = action.payload;
    },
  },
});
