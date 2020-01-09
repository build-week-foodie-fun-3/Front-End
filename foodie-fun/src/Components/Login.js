import React, {useState, useEffect} from "react";
import { withFormik, Form, Field} from "formik";
import * as Yup from "yup";
import axios from "axios";

  const Login = ({values, errors, touched, status}) => {
    console.log("values", values);
    console.log("errors", errors);
    console.log("touched", touched);
  
    const [logCredentials, setLogCredentials] = useState([]);

    useEffect(() => {
      console.log(
        "status has changed!",
        status
      );
      
      status &&
        setLogCredentials(logCredentials => [
          ...logCredentials,
          status
        ]);
    }, [status]);
    return (
      <div className="login-form">
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
          
          <button type="submit">
            Submit!
          </button>
        </Form>
      </div>
    );
  };
  
  const FormikLoginForm = withFormik({

    mapPropsToValues(props) {
      return {
        username: props.username || "",
        password: props.password || ""
      };
    },
  
    validationSchema: Yup.object().shape({
      username: Yup.string().required("USERNAME IS MANDATORY"), 
      password: Yup.string().required("PASSWORD IS MANDATORY"),
    }),
  
    handleSubmit(
      values,
      { setStatus, resetForm }
    ) {
      console.log("submitting", values);
      axios
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
  })(Login);
  export default FormikLoginForm;
  