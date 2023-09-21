import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { itemsReducer } from "./itemsSlice";
import { indexReducer } from "./currentIndexSlice";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  version: 1,
  storage,
  whitelist: ["items", "index"],
};

const rootReducer = combineReducers({
  items: itemsReducer,
  index: indexReducer,
});

const persistedReduser = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReduser,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
