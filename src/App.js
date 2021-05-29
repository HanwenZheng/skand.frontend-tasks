import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Toaster } from "react-hot-toast";
import { Route, Switch } from "react-router-dom";

import NavBar from "./Components/NavBar";
import Landing from "./Components/Landing";
import Login from "./Components/Login";
import Home from "./Components/Home";
import User from "./Components/UserDetail";
import EditUser from "./Components/EditUser";
import { setInitHeaders } from "./Redux/Action/auth";
import PrivateRoute from "./Components/PrivateRoute";

import styles from "./Components/SCSS/App.module.scss";

const App = ({ setInitHeaders }) => {
  useEffect(() => {
    setInitHeaders(localStorage.token);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={styles.App}>
      <Toaster />
      <NavBar />
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/login" component={Login} />
        <PrivateRoute exact path="/home" component={Home} />
        <PrivateRoute exact path="/home/:id" component={User} />
        <PrivateRoute exact path="/home/:id/edit" component={EditUser} />
        <PrivateRoute exact path="/create" component={EditUser} />
      </Switch>
    </div>
  );
};

export default connect(null, { setInitHeaders })(App);
