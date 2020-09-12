import React, { useEffect } from "react";
import { useObserver } from "mobx-react";

import WalletForm from "./WalletForm";

import { useWalletsStore } from "./WalletsContext";

function Wallets() {
  const walletsStore = useWalletsStore();
  useEffect(() => {
    async function fetchData() {
      await walletsStore.getWallets();
    }

    fetchData();
  }, [walletsStore]);

  return useObserver(() => (
    <>
      <WalletForm />
      {walletsStore.wallets.map((wallet) => (
        <div
          key={wallet.id}
          onClick={() => walletsStore.addSpending(wallet.id)}
        >
          {wallet.name} ({wallet.balance} {wallet.currency})
        </div>
      ))}
      <hr />
      {walletsStore.spendings.map(spending => (
        <div key={spending.id}>{spending.name}: {spending.amount}</div>
      ))}
    </>
  ));
}

export default Wallets;
