import React, { useEffect, useState } from "react";

import { Formik } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { TextField } from "@mui/material";
import { loginUser } from "../redux/store/slice";
import { useNavigate } from "react-router-dom";
import { getToken } from "../Common/Cookies/Cookies";

const LoginSchema = Yup.object().shape({
  email_id: Yup.string().email("Invalid email").required("Email Required"),
  password: Yup.string()
      .min(8, "Password is Too short")
    .matches(/(?=.*[0-9])/, "Must Contain Number")
    .required("Password Required")
});

const AdminLogin = () => {
  const [role, setRole] = useState("Admin");
     const dispatch = useDispatch();
     const navigate = useNavigate();
  const VendorLogin = () => {
    setRole("Vendor")
  }
  const token = getToken();
 return (
    <div className="bg-login">
      <div className="wrapper">
        <div className="section-authentication-signin d-flex align-items-center justify-content-center my-5 my-lg-0">
          <div className="container-fluid">
            <div className="row row-cols-1 row-cols-lg-2 row-cols-xl-3">
              <div className="col mx-auto">
                <div className="card mt-5">
                  <div className="card-body">
                    <div className="border p-4 rounded">
                      <div className="text-center ">
                        <h3 className>Sign in {role}</h3>
                      </div>
                      <div className="form-body">
                        <Formik
                          initialValues={{
                            email_id: "",
                            password: "",
                          }}
                          validationSchema={LoginSchema}
                          onSubmit={(values) => {
                            dispatch(loginUser({...values,role}))
                            if (token !== undefined) {
                           navigate("/");
                            }
                           console.log(values);
                           }}
                        >
                          {(props) => {
                            const {
                              touched,
                              errors,
                              isSubmitting,
                              values,
                              handleChange,
                              handleSubmit,
                            } = props;
                            return (
                              <form className="row g-3" onSubmit={handleSubmit}>
                                <div className="col-12">
                                  <div>
                                    <label
                                      htmlFor="inputEmailAddress"
                                      className="form-label d-flex"
                                    >
                                      Email
                                    </label>
                                    <TextField
                                      fullWidth
                                      name="email_id"
                                      id="inputEmailAddress"
                                      type="text"
                                      placeholder="Enter your email"
                                      value={values.email_id}
                                      onChange={handleChange}
                                      className={
                                        errors.email_id &&
                                        touched.email_id &&
                                        "error" &&
                                        "form-control"
                                      }
                                    />
                                  </div>
                                  {errors.email_id && touched.email_id && (
                                    <div
                                      className="input feedback"
                                      style={{
                                        justifyContent: "flex-start",
                                        display: "flex",
                                        color: "red",
                                      }}
                                    >
                                      {errors.email_id}
                                    </div>
                                  )}
                                </div>
                                <div className="col-12">
                                  <div>
                                    <label
                                      htmlFor="inputChoosePassword"
                                      className="form-label d-flex"
                                    >
                                      Password
                                    </label>

                                    <TextField
                                      fullWidth
                                      id="inputChoosePassword"
                                      name="password"
                                      // type="password"
                                      placeholder="Enter your password"
                                      value={values.password}
                                      onChange={handleChange}
                                      className={
                                        errors.password &&
                                        touched.password &&
                                        "error" &&
                                        "form-control border-end-0"
                                      }
                                    />
                                  </div>
                                  {errors.password && touched.password && (
                                    <div
                                      className="input feedback"
                                      style={{
                                        justifyContent: "flex-start",
                                        display: "flex",
                                        color: "red",
                                      }}
                                    >
                                      {errors.password}
                                    </div>
                                  )}
                                </div>
                                <div className="col-md">
                                  <div className="form-check form-switch">
                                    <div className="col-md text-start">
                                    <div className="col-md-6 pt-4 ">
                            <a  onClick={VendorLogin}>
                              {" "}
                              {role === "Vendor" ? "" : "Sign In as Vendor"}
                            </a>
                          </div>
                          <div className="col-md-6 text-end pt-4">
                            <a href="">
                              {role === "Vendor" ? "Forgot Password ?" : ""}
                            </a>
                          </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-12">
                                  <div className="d-grid">
                                    <div class="d-grid">
                                      <button
                                        type="submit"
                                        class="btn btn-primary"
                                        disabled={isSubmitting}
                                      >
                                        <i class="bx bxs-lock-open"></i>Sign in
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              </form>
                            );
                          }}
                        </Formik>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*end row*/}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;