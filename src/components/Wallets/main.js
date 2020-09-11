import React from "react";
import { WalletsProvider } from "./WalletsContext";
import Index from "./index";

export default () => (
  <WalletsProvider>
    <Index />
  </WalletsProvider>
);
