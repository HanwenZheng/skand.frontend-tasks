import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";

import { getUser } from "../Redux/Action/user";

const EditUser = ({ user, getUser, match }) => {
  return (
    <div>
      <div>EditUser</div>
    </div>
  );
};

const mapStateToProps = ({ user }) => ({
  user,
});

export default connect(mapStateToProps, { getUser })(withRouter(EditUser));
