import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import SideBar from "../../Common/SideBar/SideBar";
import { addCategory, editCategory } from "../../redux/store/slice";
import { Formik, Form } from "formik";
import TextareaAutosize from "@mui/base/TextareaAutosize";
import * as Yup from "yup";
import { TextField } from "@mui/material";
import {  useNavigate, useParams } from "react-router-dom";
const AddAndEdit = () => {

  const { id } =useParams();
  console.log(id,"idddststst")
  const SignupSchema = Yup.object().shape({
    name: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    description: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
  });
  
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(editCategory())
  }, []);
  //  const AddCategory = useSelector (state =>state)

  return (
    <>
      <SideBar
        props={
          <div className="card">
            <div className="card-body p-4">
              <h5 className="card-title">{ !id ? 'Add New Category' : 'Edit Category '} </h5>
              <hr />
              <div className="form-body mt-4">
                <Formik
                  initialValues={{
                    name: "",
                    description: "",
                    image: "",
                  }}
                  validationSchema={SignupSchema}
                  onSubmit={(values) => {
                    dispatch( editCategory(values));
                      console.log(values,"sss");
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
                      <Form onSubmit={handleSubmit}>
                        <div className="row">
                          <div className="col-lg-8">
                            <div className="border border-3 p-4 rounded">
                              <div className="mb-3">
                                <label
                                  htmlFor="inputProductTitle"
                                  className="form-label"
                                >
                                  Category Title
                                </label>
                                <TextField
                                  name="name"
                                  value={values.name}
                                  onChange={handleChange}
                                  type="text"
                                  className="form-control"
                                  id="inputProductTitle"
                                  placeholder="Enter product title"
                                />
                                {errors.name && touched.name ? (
                                  <div>{errors.name}</div>
                                ) : null}
                              </div>
                              <div className="mb-3">
                                <label
                                  htmlFor="inputProductDescription"
                                  className="form-label"
                                >
                                  Description
                                </label>
                                <TextareaAutosize
                                  fullWidth
                                  type="textarea"
                                  aria-label="empty textarea"
                                  placeholder="Description"
                                  // style={{ width: 200 }}
                                  className="form-control w-50 h-50"
                                  id="inputProductDescription"
                                  rows={3}
                                  name="description"
                                  value={values.description}
                                  onChange={handleChange}
                                />
                                {errors.description && touched.description ? (
                                  <div>{errors.description}</div>
                                ) : null}
                              </div>
                              <div className="mb-3">
                                <label
                                  htmlFor="inputProductDescription"
                                  className="form-label"
                                >
                                  Category Images
                                </label>
                                <TextField
                                  name="image"
                                  value={values.image}
                                  onChange={handleChange}
                                  id="image-uploadify"
                                  type="file"
                                  accept=".xlsx,.xls,image/*,.doc,audio/*,.docx,video/*,.ppt,.pptx,.txt,.pdf"
                                  multiple
                                />
                              </div>
                              <button
                                type="submit"
                                class="btn btn-primary"
                                onClick={isSubmitting}
                              >
                                Submit
                              </button>
                            </div>
                          </div>
                        </div>
                      </Form>
                    );
                  }}
                </Formik>
                {/*end row*/}
              </div>
            </div>
          </div>
        }
      />
    </>
  );
};

export default AddAndEdit;
