import React from "react";
import { connect } from "react-redux";
import { Route, Redirect } from "react-router-dom";

const PrivateRoute = ({ component: Component, auth: { token }, ...rest }) => {
  return <Route {...rest} render={() => (!token ? <Redirect to="/" /> : <Component />)} />;
};

const mapStateToProps = ({ auth }) => ({
  auth,
});

export default connect(mapStateToProps)(PrivateRoute);
