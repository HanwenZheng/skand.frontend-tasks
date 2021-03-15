import React from "react";
import * as Yup from "yup";
import { Formik, Form, Field } from "formik";

import { login } from "../Redux/Action/auth";
import { connect } from "react-redux";
import { Redirect } from "react-router";

import Button from "@material-ui/core/Button";
import styles from "./SCSS/App.module.scss";

const SignInSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string().min(6, "At least 6 digits!").required("Required"),
});

const Login = ({ auth: { token }, login }) => {
  if (token) {
    return <Redirect to="/home" />;
  }

  return (
    <div className={styles.Login}>
      <h1>Login</h1>
      <Formik
        initialValues={{
          email: "test@skand.io",
          password: "password",
        }}
        validationSchema={SignInSchema}
        onSubmit={({ email, password }) => {
          login({ email, password });
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
              <span>Password</span>
              <Field name="password" autoComplete="off" />
              {errors.password && touched.password ? <div>{errors.password}</div> : null}
            </div>
            <Button
              variant="contained"
              type="submit"
              style={{
                background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
                borderRadius: 3,
                color: "white",
                height: 35,
                padding: "0 25px",
                boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
              }}
            >
              Log In
            </Button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

const mapStateToProps = ({ auth }) => ({
  auth,
});

export default connect(mapStateToProps, { login })(Login);
