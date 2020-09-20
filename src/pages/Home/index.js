import React from "react";
import { useRouterStore } from "mobx-state-router";

function HomePage() {
  const routerStore = useRouterStore();

  const handleClick = () => {
    routerStore.goTo("wallets");
  };

  return (
    <div>
      <h1>Home</h1>
      <button onClick={handleClick}>Go to Wallets</button>
    </div>
  );
}

export default HomePage;
