import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { login } from "../Redux/Action/auth";
import { connect } from "react-redux";
import axios from "axios";
import Landing from "./Home";
import { Redirect } from "react-router";

const SignInSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string().min(6, "At least 6 digits!").required("Required"),
});

const Login = ({ auth: { token }, login }) => {
  if (token) {
    return <Redirect to="/home" />;
  }

  const onGetUser = async (e) => {
    const config = {
      headers: {
        authorization: localStorage.token,
      },
    };
    const res = await axios.get("/api/v2/users", config);
    console.log(res);
  };

  return (
    <div>
      <h1>Login</h1>
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        validationSchema={SignInSchema}
        onSubmit={({ email, password }) => {
          login({ email, password });
        }}
      >
        {({ errors, touched }) => (
          <Form>
            <div>
              Email:
              <Field name="email" type="email" />
              {errors.email && touched.email ? <div>{errors.email}</div> : null}
            </div>
            <div>
              Password:
              <Field name="password" />
              {errors.password && touched.password ? <div>{errors.password}</div> : null}
            </div>
            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
      <button onClick={onGetUser}>getUsers</button>
    </div>
  );
};

const mapStateToProps = ({ auth }) => ({
  auth,
});

export default connect(mapStateToProps, { login })(Login);
