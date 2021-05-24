import React from "react";

const User = ({ match }) => {
  return (
    <div>
      <h1>{`User: ${match.params.id}`}</h1>
    </div>
  );
};

export default User;
