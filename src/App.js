import React from "react";
import { Route } from "react-router-dom";

import Login from "./Components/Login";
import Landing from "./Components/Landing";

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={Login} />
      <Route exact path="/Landing" component={Landing} />
    </div>
  );
}

export default App;
