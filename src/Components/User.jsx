import React, { Fragment } from "react";
import { connect } from "react-redux";
import { Link, Redirect, withRouter } from "react-router-dom";

import Button from "@material-ui/core/Button";

const User = ({ match, users }) => {
  const id = match.params.id;
  const user = users.find((user) => user.id === id);
  if (!user) return <Redirect to="/home" />;
  console.log(user);
  return (
    <Fragment>
      <h1>{`User: ${id}`}</h1>
      <Link to="/home" style={{ color: "white" }}>
        <Button variant="contained" color="primary">
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
