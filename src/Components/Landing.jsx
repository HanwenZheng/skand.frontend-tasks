import React from "react";
import { Link } from "react-router-dom";

import Button from "@material-ui/core/Button";

const Landing = (props) => {
  return (
    <div>
      <h1>Landing</h1>
      <Button variant="contained" size="large" color="primary">
        <Link to="/login" style={{ color: "white" }}>
          Get Started
        </Link>
      </Button>
    </div>
  );
};

export default Landing;
