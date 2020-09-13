import React, { useState } from "react";
import { Input, Select, Button } from "antd";

import { useSpendingsStore } from "./SpendingsContext";
import { useWalletsStore } from "../Wallets/WalletsContext";

const spendingTypes = [
  {
    label: "Food",
    value: "food",
  },
  {
    label: "Shopping",
    value: "shopping",
  },
  {
    label: "Health",
    value: "health",
  },
];

export default () => {
  const spendingsStore = useSpendingsStore();
  const walletStore = useWalletsStore();
  const [name, setName] = useState("");
  const [amount, setAmount] = useState(0);
  const [type, setSpendingType] = useState(spendingTypes[0].value);

  return (
    <>
      <Input onChange={(e) => setName(e.target.value)} />
      <Input type="number" onChange={(e) => setAmount(e.target.value)} />
      <Select
        options={spendingTypes}
        defaultValue={spendingTypes[0].value}
        onChange={(val) => setSpendingType(val)}
      />
      <Button onClick={() => spendingsStore.addSpending(walletStore.currentWalletId, {name, type, amount})}>
        Add Spengind
      </Button>
    </>
  );
};
