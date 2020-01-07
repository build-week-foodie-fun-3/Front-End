import React, { useState } from "react";
import {
    withFormik,
    Form,
    Field
  } from "formik";
  import * as Yup from "yup";

const Restaurant = props => {

  const [form, setForm] = useState({
    name: "",
    typeofcusine: "",
    location: "",
	hours: "",
	rating: "",
	// photourl: "https://sc01.alicdn.com/kf/HTB1E1F.KpXXXXamXVXXq6xXFXXXF/Crinkle-Cut-Fries.jpg"

  });

  const handleChanges = e => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
    console.log(e.target.name);
  };
  const submitForm = e => {
    e.preventDefault();
    props.addNewForm(form);
    setForm({ name: "",
    typeofcusine: "",
    location: "",
	hours: "",
	rating: "", });
  };

  return (
    <form onSubmit={submitForm}>
      <label htmlFor="name">Name</label>
      <input
        id="name"
        type="text"
        placeholder="name"
        onChange={handleChanges}
        name="name"
        value={form.name}
      />
      <label htmlFor="typeofcusine">Cusine Type</label>
      <input
        id="typeofcusine"
        type="text"
        placeholder="Type of Cusine"
        onChange={handleChanges}
        name="typeofcusine"
        value={form.typeofcusine}
      />
      <input
        id="location"
        type="text"
        placeholder="Location"
        onChange={handleChanges}
        name="location"
        value={form.location}
      />
      <input
        id="hours"
        type="text"
        placeholder="Hours"
        onChange={handleChanges}
        name="hours"
        value={form.hours}
      />
      <input
        id="rating"
        type="text"
        placeholder="Rating"
        onChange={handleChanges}
        name="rating"
        value={form.rating}
      />
      <button type="submit">Add Card </button>
    </form>
  );
};

export default Restaurant;
