// node
import React, { Fragment, useEffect } from "react";
import { Link, Redirect, withRouter } from "react-router-dom";
import { connect } from "react-redux";
// local
import { getUsers } from "../Redux/Action/user";
// style
import Button from "@material-ui/core/Button";
import styles from "../Components/SCSS/App.module.scss";

const UserDetail = ({ match, users, getUsers }) => {
  useEffect(() => {
    setTimeout(() => {
      getUsers();
    }, 0);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // lazy-load user by user_id
  // users load && user not found -> redirect to /home
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
        <Button variant="contained" color="primary">
          Go Back
        </Button>
      </Link>
    </div>
  );
};

const mapStateToProps = ({ user }) => ({
  users: user.users,
});

export default connect(mapStateToProps, { getUsers })(withRouter(UserDetail));
