import React from "react";
import { Route } from "react-router-dom";

import PrivateRoute from "./Components/PrivateRoute";
import Login from "./Components/Login";
import Home from "./Components/Home";

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={Login} />
      <PrivateRoute exact path="/home" component={Home} />
    </div>
  );
}

export default App;
