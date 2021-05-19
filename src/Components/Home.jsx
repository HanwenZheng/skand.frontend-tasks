import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { getUsers } from "../Redux/Action/user";
import UserTable from "./UserList";

import TextField from "@material-ui/core/TextField";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";

const Home = ({ users, getUsers }) => {
  useEffect(() => {
    // to-do: ?
    setTimeout(() => {
      getUsers();
    }, 0);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const [emailFilter, setEmailFilter] = useState("");
  const [activeFilter, setActiveFilter] = useState("");

  return (
    <div>
      <h1>Users</h1>
      <form noValidate autoComplete="off">
        <TextField
          id="emailFilter"
          label="Filter by Email"
          variant="outlined"
          size="small"
          value={emailFilter}
          onChange={(e) => {
            setEmailFilter(e.target.value);
          }}
        />
      </form>
      <FormControl
        component="fieldset"
        style={{ height: "60px", display: "flex", justifyContent: "center" }}
      >
        <RadioGroup
          row
          aria-label="filterByActive"
          name="activeFilter"
          value={activeFilter}
          onChange={(e) => {
            setActiveFilter(e.target.value);
          }}
        >
          <FormControlLabel
            value="Active"
            control={<Radio style={{ color: "#3f51b5" }} />}
            label="Active"
          />
          <FormControlLabel
            value="Inactive"
            control={<Radio style={{ color: "#3f51b5" }} />}
            label="Inactive"
          />
          <FormControlLabel value="" control={<Radio style={{ color: "grey" }} />} label="Clear" />
        </RadioGroup>
      </FormControl>
      <UserTable
        users={users.filter(
          (user) =>
            user.email.includes(emailFilter) &&
            (activeFilter
              ? user.active
                ? activeFilter === "Active"
                : activeFilter === "Inactive"
              : true)
        )}
      />
    </div>
  );
};

const mapStateToProps = ({ user }) => ({
  users: user.users,
});

export default connect(mapStateToProps, { getUsers })(Home);
