import React from "react";
import axios from "axios";
import { Route, Switch } from "react-router-dom";

import Login from "./Components/Login";

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={Login} />
    </div>
  );
}

export default App;
