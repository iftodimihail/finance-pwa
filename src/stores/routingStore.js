import React from "react";
import {
  browserHistory,
  createRouterState,
  HistoryAdapter,
  RouterStore,
} from "mobx-state-router";

import WalletsPage from "../pages/Wallets";
import SpendingsPage from "../pages/Spendings";
import HomePage from "../pages/Home";
import SignUpForm from "../pages/Auth/SignUp";
import SignInForm from "../pages/Auth/SignIn";

const notFound = createRouterState("notFound");

export const routes = [
  {
    name: "home",
    pattern: "/",
  },
  {
    name: "signUp",
    pattern: "/sign-up",
  },
  {
    name: "signIn",
    pattern: "/sign-in",
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
  signUp: <SignUpForm />,
  signIn: <SignInForm />,
  notFound: <div>Not Found</div>,
};

export { routerStore, viewMap };
