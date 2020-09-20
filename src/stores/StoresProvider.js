import React from "react";
import { useLocalStore } from "mobx-react";

import {createWalletsStore} from "./walletsStore";
import {createSpendingsStore} from "./spendingsStore";

const StoreContext = React.createContext(null);

export const StoreProvider = ({ children }) => {
  const stores = {
    walletsStore: useLocalStore(createWalletsStore),
    spendingsStore: useLocalStore(createSpendingsStore),
  };

  return (
    <StoreContext.Provider value={stores}>{children}</StoreContext.Provider>
  );
};

export const useStore = () => React.useContext(StoreContext)