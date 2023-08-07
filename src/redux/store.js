import { configureStore } from "@reduxjs/toolkit";
import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";

import { searchReducer } from "./search/slice";
import { categoryReducer } from "./category/slice";
import { sortByOptionReducer } from "./sortBy/slice";

export const store = configureStore({
  reducer: {
    search: searchReducer,
    category: categoryReducer,
    sortByOption: sortByOptionReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  devTools: process.env.NODE_ENV === "development",
});

export const persistor = persistStore(store);
