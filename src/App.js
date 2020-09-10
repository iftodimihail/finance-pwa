import React, { useEffect, useMemo } from "react";
import { useObserver } from "mobx-react";

import WalletForm from "./components/Wallets/WalletForm";

import { useWalletsStore } from "./components/Wallets/WalletsContext";

function App() {
  const walletsStore = useWalletsStore();
  const wallets = useMemo(() => walletsStore.wallets, [walletsStore])
  useEffect(() => walletsStore.getWallets(), [wallets, walletsStore]);

  return useObserver(() => (
    <>
      <WalletForm />
      {walletsStore.wallets.map((wallet) => (
        <div key={wallet.id} onClick={() => walletsStore.removeWallet(wallet.id)}>
          {wallet.name} ({wallet.currency})
        </div>
      ))}
    </>
  ));
}

export default App;
