/**
 * Redux store configuration with redux-persist.
 *
 * - Uses localStorage to persist the `auth` slice across page reloads.
 * - Exports typed hooks (`useAppDispatch`, `useAppSelector`) so components
 *   never need to import plain `useDispatch` / `useSelector`.
 *
 * Usage:
 *   import { useAppDispatch, useAppSelector } from "@/app/store/store";
 *   const user = useAppSelector((state) => state.auth.user);
 *   const dispatch = useAppDispatch();
 */
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import authReducer from "./slices/authSlice";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["auth"],
};

const rootReducer = combineReducers({
  auth: authReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ["persist/PERSIST", "persist/REHYDRATE"],
      },
    }),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();
