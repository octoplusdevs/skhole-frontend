import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./auth/auth.slice";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import thunk from "redux-thunk";
import { createLogger } from "redux-logger";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["auth"],
};
const logger = createLogger({
  // ...options
});

const rooReducer = combineReducers({
  auth: authReducer,
});
const persistedReducer = persistReducer(persistConfig, rooReducer);

export const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== "production",
  middleware: [logger, thunk],
});

export const persistor = persistStore(store);
