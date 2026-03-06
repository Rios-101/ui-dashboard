/**
 * StoreProvider — client component that wraps the app with Redux and PersistGate.
 *
 * This must be a client component ("use client") because Redux Provider and
 * PersistGate both rely on React context which requires client-side rendering.
 */
"use client";

import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./store";

export default function StoreProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        {children}
      </PersistGate>
    </Provider>
  );
}
