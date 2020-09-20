import React, { useEffect } from "react";
import { useObserver } from "mobx-react";

import SpendingForm from "./SpendingForm";
import { useStore } from "../../stores/StoresProvider";

function Spendings() {
  const { walletsStore, spendingsStore } = useStore();

  useEffect(() => {
    async function fetchData() {
      await spendingsStore.getSpendings(walletsStore.currentWalletId);
    }

    fetchData();
  }, [spendingsStore, walletsStore.currentWalletId]);

  return useObserver(() => {
    if (!walletsStore.currentWalletId) {
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
