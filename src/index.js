import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "antd/dist/antd.css";

import App from "./App";
import * as serviceWorker from "./serviceWorker";

import { StoreProvider } from "./stores/StoresProvider";
import { auth } from "./utils/firebase";
import { routerStore } from "./stores/routingStore";

ReactDOM.render(
  <StoreProvider>
    <App />
  </StoreProvider>,
  document.getElementById("root"), () =>
  auth.onAuthStateChanged((user) => {
    if (user) {
      routerStore.goTo("home");
    } else {
      routerStore.goTo("signIn");
    }
  })
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
