import React, { useEffect } from "react";
import { useObserver } from "mobx-react";

import SpendingForm from "./SpendingForm";

import { useWalletsStore } from "../Wallets/WalletsContext";
import { useSpendingsStore } from "./SpendingsContext";

function Spendings() {
  const walletsStore = useWalletsStore();
  const spendingsStore = useSpendingsStore();
  console.log(spendingsStore.spendings.map(spending => spending));

  useEffect(() => {
    async function fetchData() {
      await spendingsStore.getSpendings(walletsStore.currentWalletId);
    }

    fetchData();
  }, [spendingsStore, walletsStore.currentWalletId]);

  return useObserver(() => {
    if(!walletsStore.currentWalletId) {
      return null;
    }

    return (
      <>
        <SpendingForm />
        {spendingsStore.spendings.map((spending) => (
          <div
            key={spending.id}
            // onClick={() => walletsStore.addSpending(wallet.id)}
          >
            {spending.name} {spending.amount} ({spending.type})
          </div>
        ))}
      </>
    );
  });
}

export default Spendings;
