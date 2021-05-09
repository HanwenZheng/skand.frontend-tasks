import React from "react";
import { Link } from "react-router-dom";

import Button from "@material-ui/core/Button";

const Landing = (props) => {
  return (
    <div>
      <h1>Landing</h1>
      <h3>Welcome to User Viewer!</h3>
      <Link to="/login" style={{ color: "white" }}>
        <Button variant="contained" size="large" color="primary">
          Get Started
        </Button>
      </Link>
    </div>
  );
};

export default Landing;
