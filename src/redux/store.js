import { configureStore } from "@reduxjs/toolkit";
import charactersSlice from "./charactersSlice";
import quoteSlice from "./quoteSlice";

export const store = configureStore({
  reducer: {
    characters: charactersSlice,
    quotes: quoteSlice,
  },
});
