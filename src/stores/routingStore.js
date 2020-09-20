import React from "react";
import {
  browserHistory,
  createRouterState,
  HistoryAdapter,
  RouterStore,
} from "mobx-state-router";

import WalletsPage from "../components/Wallets";
import SpendingsPage from "../components/Spendings";
import HomePage from "../components/Home";

const notFound = createRouterState("notFound");

export const routes = [
  {
    name: "home",
    pattern: "/",
  },
  {
    name: "wallets",
    pattern: "/wallets",
  },
  {
    name: "spendings",
    pattern: "/spendings",
  },
  {
    name: "notFound",
    pattern: "/not-found",
  },
];

const routerStore = new RouterStore(routes, notFound);

const historyAdapter = new HistoryAdapter(routerStore, browserHistory);
historyAdapter.observeRouterStateChanges();

const viewMap = {
  wallets: <WalletsPage />,
  spendings: <SpendingsPage />,
  home: <HomePage />,
  notFound: <div>Not Found</div>,
};

export { routerStore, viewMap };
