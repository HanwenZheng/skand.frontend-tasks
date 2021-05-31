import React from "react";
import { connect } from "react-redux";
import { Route, Redirect } from "react-router-dom";

// Protected Route for logged-in user
// redirect unauthorized access -> /login
const PrivateRoute = ({ component: Component, auth: { token }, ...rest }) => {
  return <Route {...rest} render={() => (!token ? <Redirect to="/login" /> : <Component />)} />;
};

const mapStateToProps = ({ auth }) => ({
  auth,
});

export default connect(mapStateToProps)(PrivateRoute);
