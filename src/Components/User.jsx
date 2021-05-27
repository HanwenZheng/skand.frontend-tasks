import React, { Fragment } from "react";
import { connect } from "react-redux";
import { Link, Redirect, withRouter } from "react-router-dom";

import Button from "@material-ui/core/Button";

import styles from "./SCSS/App.module.scss";

const User = ({ match, users }) => {
  const id = match.params.id;
  const user = users.find((user) => user.id === id);
  if (users.length && !user) return <Redirect to="/home" />;

  return (
    <div className={styles.User}>
      <h1>User Details</h1>
      {user && (
        <Fragment>
          <p>
            <span>Email: </span>
            {user.email}
          </p>
          <p>
            <span>Username: </span>
            {user.slack_username}
          </p>
          <div />
          <p>
            <span>First Name: </span>
            {user.first_name}
          </p>
          <p>
            <span>Last Name: </span>
            {user.last_name}
          </p>
          <div />
          <p>
            <span>Total Jobs: </span>
            {user.jobs_count}
          </p>
          <p>
            <span>Status: </span>
            {user.active ? "Active" : "Inactive"}
          </p>
          <p>
            <span>ID: </span>
            {user.id}
          </p>
        </Fragment>
      )}
      <Link to="/home" style={{ color: "white" }}>
        <Button variant="contained" color="secondary">
          Back to home
        </Button>
      </Link>
    </div>
  );
};

const mapStateToProps = ({ user }) => ({
  users: user.users,
});

export default connect(mapStateToProps)(withRouter(User));
