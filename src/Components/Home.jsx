import React from "react";
import { connect } from "react-redux";
import { logout } from "../Redux/Action/auth";

const Home = ({ logout }) => {
  const onLogout = (e) => {
    logout();
  };

  return (
    <div>
      <div>Home</div>
      <button onClick={onLogout}>Logout</button>
    </div>
  );
};

export default connect(null, { logout })(Home);
