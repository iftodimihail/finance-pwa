import React, { useEffect } from "react";
import { Select } from "antd";

import { useStore } from "../../stores/StoresProvider";
import { useObserver } from "mobx-react";
import SpendingForm from "../Spendings/SpendingForm";

function HomePage() {
  const { walletsStore, spendingsStore } = useStore();

  useEffect(() => {
    async function fetchWallets() {
      await walletsStore.getWallets();
    }

    async function fetchSpendings() {
      await spendingsStore.getSpendings();
    }

    if (walletsStore.wallets.length === 0) {
      fetchWallets();
    }

    fetchSpendings();
  }, [walletsStore, spendingsStore]);

  return useObserver(() => {
    const parsedWallets = walletsStore.wallets.map((wallet) => ({
      label: wallet.name,
      value: wallet.id,
    }));

    return (
      <div>
        <h1>Home</h1>
        <Select
          options={parsedWallets}
          defaultValue={localStorage.getItem("preferredWallet")}
        />
        <SpendingForm />
        {spendingsStore.spendings.map((spending) => (
          <div key={spending.id}>
            {spending.name} {spending.amount} ({spending.type})
          </div>
        ))}
      </div>
    );
  });
}

export default HomePage;
