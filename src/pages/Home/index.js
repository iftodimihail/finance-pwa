import React, { useEffect } from "react";
import { Select } from "antd";

import { useStore } from "../../stores/StoresProvider";
import { useObserver } from "mobx-react";

function HomePage() {
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
      </div>
    );
  });
}

export default HomePage;
