import React from "react";
import { Route, Switch } from "react-router-dom";

import PrivateRoute from "./Components/PrivateRoute";
import Login from "./Components/Login";
import Home from "./Components/Home";
import Landing from "./Components/Landing";
import NavBar from "./Components/NavBar";

import styles from "./Components/SCSS/App.module.scss";

function App() {
  return (
    <div className={styles.App}>
      <NavBar />
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route path="/login" component={Login} />
        <PrivateRoute path="/home" component={Home} />
      </Switch>
    </div>
  );
}

export default App;
