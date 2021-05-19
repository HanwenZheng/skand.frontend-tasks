import React, { Fragment } from "react";
import { connect } from "react-redux";
import { Link, Redirect, withRouter } from "react-router-dom";

import Button from "@material-ui/core/Button";

import styles from "./SCSS/App.module.scss";

const UserDetail = ({ match, users }) => {
  const id = match.params.id;
  let user = users.find((user) => user.id === id);
  if (users.length && !user) return <Redirect to="/home" />;

  const { last_name, first_name, jobs_count, id: id1, email, slack_username, active } = user
    ? user
    : {};
  return (
    <div className={styles.User}>
      <h1>User Details</h1>
      {user && (
        <Fragment>
          <p>
            <span>Email: </span>
            {email}
          </p>
          <p>
            <span>Username: </span>
            {slack_username}
          </p>
          <div />
          <p>
            <span>First Name: </span>
            {first_name}
          </p>
          <p>
            <span>Last Name: </span>
            {last_name}
          </p>
          <div />
          <p>
            <span>Total Jobs: </span>
            {jobs_count}
          </p>
          <p>
            <span>Status: </span>
            {active ? "Active" : "Inactive"}
          </p>
          <p>
            <span>ID: </span>
            {id1}
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

export default connect(mapStateToProps)(withRouter(UserDetail));
