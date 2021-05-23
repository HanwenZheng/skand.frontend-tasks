import React, { useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import PrivateRoute from "./Components/PrivateRoute";
import Login from "./Components/Login";
import Home from "./Components/Home";
import Landing from "./Components/Landing";
import NavBar from "./Components/NavBar";
import User from "./Components/UserDetail";
import { setInitHeaders } from "./Redux/Action/auth";
import { connect } from "react-redux";
import EditUser from "./Components/EditUser";
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
      </Switch>
    </div>
  );
};

export default connect(null, { setInitHeaders })(App);
