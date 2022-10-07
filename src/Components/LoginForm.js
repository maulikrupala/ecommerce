import React from "react";
import Button from "react-bootstrap/Button";
import "./style.css";
import { Field, Formik, Form } from "formik";
import * as Yup from "yup";
import { useFormik } from "formik";
import { Link } from "react-router-dom";

const initialValues = {
  email: "",
  password: "",
};

const validationSchema = Yup.object({
  email: Yup.string().email("Invalid email").required("Email Required"),
  password: Yup.string()
    .required("Password is required.")
    .min(8, "Password is too short - should be 8 chars minimum.")
    .matches(/[a-zA-Z]/, "Password can only contain Latin letters."),
});

const LoginForm = () => {
  const onSubmit = (values) => {
    console.log("Form data", values);
  };
  const formik = useFormik({
    initialValues,
    onSubmit,
    // validate,
    validationSchema,
  });

  return (
    <body class="login-page">
      <main>
        <div class="login-block">
          <h1>Login</h1>
          <form action="#" onSubmit={formik.handleSubmit}>
            <div class="form-group">
              <div class="input-group">
                <span class="input-group-addon">
                  <i class="fa fa-user ti-user"></i>
                </span>
                <input
                  type="text"
                  class="form-control"
                  placeholder="Your email address"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.email}
                  id="email"
                />
              </div>
            </div>
            <hr class="hr-xs" />
            {formik.touched.email && formik.errors.email ? (
              <div className="error">{formik.errors.email}</div>
            ) : null}
            <div class="form-group">
              <div class="input-group">
                <span class="input-group-addon">
                  <i class="fa fa-envelope ti-email"></i>
                </span>
                <input
                  type="password"
                  name="password"
                  id="password"
                  class="form-control"
                  placeholder="Choose a password"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.password}
                />
              </div>
            </div>
            <hr class="hr-xs" />
            {formik.touched.password && formik.errors.password ? (
              <div className="error">{formik.errors.password}</div>
            ) : null}
            <Link to="/cart" class="btn btn-primary btn-block" type="submit">
              Go
            </Link>
          </form>
        </div>
      </main>
    </body>
  );
};

export default LoginForm;
