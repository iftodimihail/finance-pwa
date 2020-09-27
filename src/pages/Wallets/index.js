import React, { useEffect } from "react";
import { useObserver } from "mobx-react";

import WalletForm from "./WalletForm";

import { useStore } from "../../stores/StoresProvider";

function Wallets() {
  const { walletsStore } = useStore();

  useEffect(() => {
    async function fetchData() {
      await walletsStore.getWallets();
    }

    if (walletsStore.wallets.length === 0) {
      fetchData();
    }
  }, [walletsStore]);

  return useObserver(() => {
    return (
      <>
        <WalletForm />
        {walletsStore.wallets.map((wallet) => (
          <div
            key={wallet.id}
            onClick={() => walletsStore.setCurrentWallet(wallet.id)}
          >
            {wallet.name} ({wallet.balance} {wallet.currency})
          </div>
        ))}
      </>
    );
  });
}

export default Wallets;
