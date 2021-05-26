import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { logout } from "../Redux/Action/auth";

const NavBar = ({ auth, logout }) => {
  const style = { color: "black" };
  const activeStyle = { fontWeight: "bold", color: "black", textDecoration: "none" };

  const onLogout = (e) => {
    logout();
  };

  const login = !auth.token ? (
    <NavLink exact to="/login" style={style} activeStyle={activeStyle}>
      Get Started
    </NavLink>
  ) : (
    <Fragment>
      <NavLink exact to="/home" style={style} activeStyle={activeStyle}>
        Welcome!
      </NavLink>
      <button onClick={onLogout}>Logout</button>
    </Fragment>
  );

  return (
    <div>
      <h1>NavBar</h1>
      <NavLink exact to="/" style={style} activeStyle={activeStyle}>
        Landing
      </NavLink>
      {login}
    </div>
  );
};

const mapStateToProps = ({ auth }) => ({
  auth,
});

export default connect(mapStateToProps, { logout })(NavBar);
