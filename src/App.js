import React from "react";
import { RouterContext, RouterView } from "mobx-state-router";
import { routerStore, viewMap } from "./stores/routingStore";
import { Button } from "antd";
import { useStore } from "./stores/StoresProvider";

function App() {
  const {authStore} = useStore();
  return (
    <RouterContext.Provider value={routerStore}>
      <RouterView viewMap={viewMap} />
      <Button onClick={authStore.logout}>Logout</Button>
    </RouterContext.Provider>
  );
}

export default App;
