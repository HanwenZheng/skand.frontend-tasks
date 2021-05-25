import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { login } from "../Redux/Action/auth";
import { connect } from "react-redux";

const SignInSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string().required("Required"),
});

const Login = ({ login }) => (
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
  </div>
);

export default connect(null, { login })(Login);
