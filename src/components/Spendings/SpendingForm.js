import React, { useState } from "react";
import { Input, Select, Button } from "antd";
import { useStore } from "../../stores/StoresProvider";

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
  const { spendingsStore, walletStore } = useStore();
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
      <Button
        onClick={() =>
          spendingsStore.addSpending(walletStore.currentWalletId, {
            name,
            type,
            amount,
          })
        }
      >
        Add Spengind
      </Button>
    </>
  );
};
