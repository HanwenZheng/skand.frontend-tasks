import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
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
    <div>
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
              Email <Field name="email" type="email" autoFocus autoComplete="off" />
              {errors.email && touched.email ? <div>{errors.email}</div> : null}
            </div>
            <div className={styles.input}>
              Password <Field name="password" autoComplete="off" />
              {errors.password && touched.password ? <div>{errors.password}</div> : null}
            </div>
            <Button variant="contained" color="secondary" size="small" type="submit">
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
