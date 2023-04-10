import { createSlice } from '@reduxjs/toolkit'

export const getCharactersSlice = createSlice({
    name: 'characters',
    initialState: {
        getCharacters: [],
    },
    reducers: {
        getCharacters: (state, action) => {
          state.getCharacters = action.payload
      },
    },
  })





