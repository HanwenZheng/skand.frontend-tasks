import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getUsers } from "../Redux/Action/user";
import UserTable from "./UserTable";

const Home = ({ users, getUsers }) => {
  useEffect(() => {
    // to-do: ?
    setTimeout(() => {
      getUsers();
    }, 0);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <h1>Users Index</h1>
      <UserTable />
    </div>
  );
};

const mapStateToProps = ({ user }) => ({
  users: user.users,
});

export default connect(mapStateToProps, { getUsers })(Home);
