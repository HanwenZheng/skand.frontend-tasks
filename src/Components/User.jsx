import React, { Fragment } from "react";
import { connect } from "react-redux";
import { Link, Redirect, withRouter } from "react-router-dom";

import Button from "@material-ui/core/Button";

const User = ({ match, users }) => {
  const id = match.params.id;
  const user = users.find((user) => user.id === id);
  if (!user) return <Redirect to="/home" />;

  return (
    <Fragment>
      <h1>{`User: ${id}`}</h1>
      <p>Email: {user.email}</p>
      <p>Username: {user.slack_username}</p>
      <p>First Name: {user.first_name}</p>
      <p>Last Name: {user.last_name}</p>
      <p>Total Jobs: {user.jobs_count}</p>
      <p>Status: {user.active ? "Active" : "Inactive"}</p>
      <Link to="/home" style={{ color: "white" }}>
        <Button variant="contained" color="secondary">
          Back to home
        </Button>
      </Link>
    </Fragment>
  );
};

const mapStateToProps = ({ user }) => ({
  users: user.users,
});

export default connect(mapStateToProps)(withRouter(User));
