import React from "react";
import { useObserver } from "mobx-react";

import WalletForm from "./components/Wallets/WalletForm";

import { useWalletsStore } from "./components/Wallets/WalletsContext";

function App() {
  const walletStore = useWalletsStore();

  return useObserver(() => (
    <>
      <WalletForm />
      {walletStore.wallets.map((wallet) => (
        <div key={wallet.id}>
          {wallet.name} ({wallet.currency})
        </div>
      ))}
    </>
  ));
}

export default App;
