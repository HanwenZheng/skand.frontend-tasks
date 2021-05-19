import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";

import { getUser } from "../Redux/Action/user";

const EditUser = ({ user, getUser, match }) => {
  useEffect(() => {
    const id = match.params.id;
    setTimeout(() => {
      getUser(id);
    }, 0);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  user.editUser.length !== 0 && console.log(user.editUser);

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
