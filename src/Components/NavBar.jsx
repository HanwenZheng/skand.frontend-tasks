import React, { Fragment } from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";

import { logout } from "../Redux/Action/auth";

import Button from "@material-ui/core/Button";
import styles from "./SCSS/App.module.scss";

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
        Hi, test1@skand.io !
      </NavLink>
      <Button
        variant="contained"
        size="small"
        onClick={onLogout}
        className={styles.logOut}
        style={{
          background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
          borderRadius: 3,
          color: "white",
          height: 35,
          padding: "0 25px",
          boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
        }}
      >
        Logout
      </Button>
    </Fragment>
  );

  return (
    <div className={styles.NavBar}>
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
