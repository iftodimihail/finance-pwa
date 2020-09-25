import React from "react";
import { useLocalStore } from "mobx-react";

import {createWalletsStore} from "./walletsStore";
import {createSpendingsStore} from "./spendingsStore";
import { createAuthStore } from "./authStore";

const StoreContext = React.createContext(null);

export const StoreProvider = ({ children }) => {
  const stores = {
    walletsStore: useLocalStore(createWalletsStore),
    spendingsStore: useLocalStore(createSpendingsStore),
    authStore: useLocalStore(createAuthStore)
  };

  return (
    <StoreContext.Provider value={stores}>{children}</StoreContext.Provider>
  );
};

export const useStore = () => React.useContext(StoreContext)
