import React from "react";
import axios from "axios";
import { useFormik } from "formik";

const Register = () => {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
    },
    onSubmit: (values) => {
      axios
        .post("https://northwind.vercel.app/api/categories", {
          name: values.firstName,
          surname: values.lastName,
        })
        .then((res) => {
          console.log(res.data);
          formik.resetForm()
        });
    },
  });

  return (
    <div>
      <h1>Register</h1>
      <form onSubmit={formik.handleSubmit}>
        <label htmlFor="firstName">First Name</label>
        <input
          id="firstName"
          name="firstName"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.firstName}
        />
        <label htmlFor="lastName">Last Name</label>
        <input
          id="lastName"
          name="lastName"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.lastName}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Register;
