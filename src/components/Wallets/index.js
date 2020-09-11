import React, { useEffect } from "react";
import { useObserver } from "mobx-react";

import WalletForm from "./WalletForm";

import { useWalletsStore } from "./WalletsContext";

function Wallets() {
  const walletsStore = useWalletsStore();
  useEffect(() => walletsStore.getWallets(), [walletsStore]);

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

export default Wallets;
