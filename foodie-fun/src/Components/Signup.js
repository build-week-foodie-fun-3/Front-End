import React, {useState, useEffect} from "react";
import { withFormik, Form, Field} from "formik";
import * as Yup from "yup";
import axios from "axios";

  const SignupForm = ({values, errors, touched, status}) => {
    console.log("values", values);
    console.log("errors", errors);
    console.log("touched", touched);
  
    const [credentials, setCredentials] = useState([]);
  
    useEffect(() => {
      console.log(
        "status has changed!",
        status
      );
      
      status &&
        setCredentials(credentials => [
          ...credentials,
          status
        ]);
    }, [status]);
    return (
      <div className="signup-form">
        <Form>
          <label htmlFor="username">
            Username
            <Field
              id="username"
              type="text"
              name="username"
              placeholder="username"
            />
      
            {touched.username &&
              errors.username && (
                <p className="errors">
                  {errors.username}
                </p>
              )}
          </label>
          <label htmlFor="password">
            Password
            <Field
              id="password"
              type="text"
              name="password"
              placeholder="password"
            />
            {touched.password && errors.password && (
              <p className="errors">
                {errors.password}
              </p>
            )}
          </label>
          <Field
            as="select"
            className="location-select"
            name="location"
          >
            <option disabled>
              Choose an Option
            </option>
            <option value="west">
              West
            </option>
            <option value="east">
              East
            </option>
            <option value="south">
              South
            </option>
            <option value="north">
              North
            </option>
          </Field>
          <label htmlFor="email">
            Email Address
            <Field
              id="email"
              type="email"
              name="email"
              placeholder="email"
            />
            {touched.email && errors.email && (
              <p className="errors">
                {errors.email}
              </p>
            )}
          </label>
          <button type="submit">
            Submit!
          </button>
        </Form>
        {credentials.map(credential => {
          return (
            <ul key={credential.id}>
              <li>Username: {credential.username}</li>
              <li>Password: {credential.password}</li>
              <li>Location: {credential.location}</li>
              <li>Email: {credential.email}</li>
            </ul>
          );
        })}
      </div>
    );
  };
  
  const FormikSignupForm = withFormik({

    mapPropsToValues(props) {

      return {
        username: props.username || "",
        password: props.password || "",
        locaiton: props.location || "",
        email: props.email || ""
      };
    },
  
    validationSchema: Yup.object().shape({
      username: Yup.string().required("USERNAME IS MANDATORY"), 
      password: Yup.string().required("PASSWORD IS MANDATORY"),
      location: Yup.string().required("LOCATION IS MANDATORY"),
      email: Yup.string().required("EMAIL IS MANDATORY")
    }),
  
    handleSubmit(
      values,
      { setStatus, resetForm }
    ) {
      console.log("submitting", values);
     const data = axios
        .post(
          "https://foodiefun3.herokuapp.com",
          values
        )
        .then(res => {
          console.log("success", res);
         
          setStatus(res.data);
  
          resetForm();
        })
        .catch(err =>
          console.log(err.response)
        );
    }
  })(SignupForm);
  export default FormikSignupForm;
  