import React from "react";
import { useLocalStore } from "mobx-react";

import { createWalletsStore } from "./walletsStore";

const WalletsContext = React.createContext(null);

export const WalletsProvider = ({children}) => {
    const walletsStore = useLocalStore(createWalletsStore);

    return (
        <WalletsContext.Provider value={walletsStore}>
            {children}
        </WalletsContext.Provider>
    )
}

export const useWalletsStore = () => React.useContext(WalletsContext);