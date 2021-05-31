// node
import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Toaster } from "react-hot-toast";
import { Route, Switch } from "react-router-dom";
// local
import NavBar from "./Components/Layout/NavBar";
import Landing from "./Views/Landing";
import Login from "./Views/Login";
import Home from "./Views/Home";
import UserDetail from "./Views/UserDetail";
import UserEdit from "./Views/UserEdit";
import { initHeadersFromStorage } from "./Redux/Action/auth";
import PrivateRoute from "./Components/Middleware/PrivateRoute";
// style
import styles from "./Components/SCSS/App.module.scss";

const App = ({ initHeadersFromStorage }) => {
  useEffect(() => {
    initHeadersFromStorage(localStorage.token);
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
        <PrivateRoute exact path="/home/:id" component={UserDetail} />
        <PrivateRoute exact path="/home/:id/edit" component={UserEdit} />
        <PrivateRoute exact path="/create" component={UserEdit} />
      </Switch>
    </div>
  );
};

export default connect(null, { initHeadersFromStorage })(App);
