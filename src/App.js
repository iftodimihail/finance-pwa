import React from "react";
import { RouterContext, RouterView } from "mobx-state-router";
import { routerStore, viewMap } from "./stores/routingStore";

function App() {
  return (
    <RouterContext.Provider value={routerStore}>
      <RouterView viewMap={viewMap} />
    </RouterContext.Provider>
  );
}

export default App;