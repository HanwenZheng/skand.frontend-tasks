import React from "react";
import { Route } from "react-router-dom";

import Login from "./Components/Login";

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={Login} />
    </div>
  );
}

export default App;
