import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import { getUser, editUser } from "../Redux/Action/user";
import * as Yup from "yup";
import { Field, Form, Formik } from "formik";
import Button from "@material-ui/core/Button";
import styles from "./SCSS/App.module.scss";

const UserSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),
  first_name: Yup.string().required("Required"),
  last_name: Yup.string().required("Required"),
  jobs_count: Yup.number().integer().min(0).required("Required"),
  slack_username: Yup.string().required("Required"),
});

const EditUser = ({ user, getUser, editUser, match }) => {
  useEffect(() => {
    setTimeout(() => {
      getUser(match.params.id);
    }, 0);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fillData = ({ email, first_name, last_name, jobs_count, slack_username, active }) => (
    <Formik
      initialValues={{
        email: email ? email : "",
        first_name: first_name ? first_name : "",
        last_name: last_name ? last_name : "",
        jobs_count: jobs_count ? jobs_count : "",
        slack_username: slack_username ? slack_username : "",
        active: active ? active : false,
      }}
      validationSchema={UserSchema}
      onSubmit={({ email, first_name, last_name, jobs_count, slack_username, active }) => {
        const cu = { email, first_name, last_name, jobs_count, slack_username, active };
        console.log(cu);
      }}
    >
      {({ errors, touched }) => (
        <Form>
          <div className={styles.input}>
            <span>Email</span>
            <Field name="email" type="email" autoFocus autoComplete="off" />
            {errors.email && touched.email ? <div>{errors.email}</div> : null}
          </div>
          <div className={styles.input}>
            <span>First Name</span>
            <Field name="first_name" autoComplete="off" />
            {errors.first_name && touched.first_name ? <div>{errors.first_name}</div> : null}
          </div>
          <div className={styles.input}>
            <span>Last Name</span>
            <Field name="last_name" autoComplete="off" />
            {errors.last_name && touched.last_name ? <div>{errors.last_name}</div> : null}
          </div>
          <div className={styles.input}>
            <span>Jobs Count</span>
            <Field name="jobs_count" autoComplete="off" />
            {errors.jobs_count && touched.jobs_count ? <div>{errors.jobs_count}</div> : null}
          </div>
          <div className={styles.input}>
            <span>Slack Username</span>
            <Field name="slack_username" autoComplete="off" />
            {errors.slack_username && touched.slack_username ? (
              <div>{errors.slack_username}</div>
            ) : null}
          </div>
          <div className={styles.input}>
            <span>Status</span>
            <label>
              Active <Field type="checkbox" name="active" />
            </label>
          </div>

          <Button variant="contained" color="secondary" type="submit">
            Save
          </Button>
        </Form>
      )}
    </Formik>
  );

  return (
    <div className={styles.EditUser}>
      {!user.editUser && fillData({})}
      {user.editUser && fillData(user.editUser)}
    </div>
  );
};

const mapStateToProps = ({ user }) => ({
  user,
});

export default connect(mapStateToProps, { getUser, editUser })(withRouter(EditUser));
