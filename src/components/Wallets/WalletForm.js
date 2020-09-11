import React, { useState } from "react";
import { Input, Select, Button } from "antd";

import { useWalletsStore } from "./WalletsContext";

const currencies = [
  {
    label: "RON",
    value: "ron",
  },
  {
    label: "EURO",
    value: "eur",
  },
  {
    label: "USD",
    value: "usd",
  },
];

export default () => {
  const walletsStore = useWalletsStore();
  const [name, setName] = useState("");
  const [balance, setBalance] = useState(0);
  const [currency, setCurrency] = useState(currencies[0].value);

  return (
    <>
      <Input onChange={(e) => setName(e.target.value)} />
      <Input type="number" onChange={(e) => setBalance(e.target.value)} />
      <Select
        options={currencies}
        defaultValue={currencies[0].value}
        onChange={(val) => setCurrency(val)}
      />
      <Button onClick={() => walletsStore.addWallet(name, currency, balance)}>
        Add Wallet
      </Button>
    </>
  );
};
