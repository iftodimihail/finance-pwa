import React from "react";
import { useLocalStore } from "mobx-react";

import { createSpendingsStore } from "./spendingsStore";

const SpendingContext = React.createContext(null);

export const SpendingsProvider = ({ children }) => {
  const spendingsStore = useLocalStore(createSpendingsStore);

  return (
    <SpendingContext.Provider value={spendingsStore}>
      {children}
    </SpendingContext.Provider>
  );
};

export const useSpendingsStore = () => React.useContext(SpendingContext);
