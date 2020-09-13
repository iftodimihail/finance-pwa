import React from "react";
import Index from "./index";
import { SpendingsProvider } from "./SpendingsContext";

export default () => (
  <SpendingsProvider>
    <Index />
  </SpendingsProvider>
);
