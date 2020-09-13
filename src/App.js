import React from "react";
import WalletsPage from "./components/Wallets/main";
import SpendingsPage from "./components/Spendings/main";

// Routes
function App() {
  return (
    <>
      <SpendingsPage />
      <WalletsPage />
    </>
  );
}

export default App;
