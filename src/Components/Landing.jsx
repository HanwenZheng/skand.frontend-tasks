import React from "react";
import { connect } from "react-redux";
import { logout } from "../Redux/Action/auth";

const Landing = ({ logout }) => {
  const onLogout = (e) => {
    logout();
  };

  return (
    <div>
      <div>Landing</div>
      <button onClick={onLogout}>Logout</button>
    </div>
  );
};

export default connect(null, { logout })(Landing);
