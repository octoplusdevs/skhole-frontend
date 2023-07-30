import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./auth/auth.slice";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import thunk from "redux-thunk";
import { setupListeners } from "@reduxjs/toolkit/query";
// import { createLogger } from "redux-logger";
import { courseReducer } from "./courses/courses.slice";
import { ModuleReducer } from "./modules/modules.slice";
import { forgotPasswordReducer } from "./forgotPassword/forgotPassword.slice";
import { resetPasswordReducer } from "./resetPassword/forgotPassword.slice";
// import { skholeApi } from "../services/skhole";

const authPersistConfig = {
  key: "auth",
  storage: storage,
  blacklist: ["error"],
};

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["courses", "modules"],
  blacklist: ["auth"],
};
// const logger = createLogger({
//   // ...options
// });

const rooReducer = combineReducers({
  auth: persistReducer(authPersistConfig, authReducer),
  courses: courseReducer,
  modules: ModuleReducer,
  forgotPassword: forgotPasswordReducer,
  resetPassword: resetPasswordReducer,
  // [skholeApi.reducerPath]: skholeApi.reducer,
});
const persistedReducer = persistReducer(persistConfig, rooReducer);

export const store = configureStore({
  reducer: persistedReducer,
  // eslint-disable-next-line no-undef
  devTools: process.env.NODE_ENV !== "production",
  middleware: [thunk],
});
setupListeners(store.dispatch);

export const persistor = persistStore(store);
