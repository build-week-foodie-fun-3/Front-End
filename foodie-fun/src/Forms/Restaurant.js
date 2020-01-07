import React, { useState } from "react";

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
    setForm({ name: "", typeofcusine: "", location: "", hours: "", rating: "", });
  };

  return (
<div className="create">
    <div className="create-box">
    <form  onSubmit={submitForm}>
      <label htmlFor="name">Name</label>
      <input
        id="name"
        type="text"
        placeholder="Name"
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
      <label htmlFor="location">Location</label>
      <input
        id="location"
        type="text"
        placeholder="Location"
        onChange={handleChanges}
        name="location"
        value={form.location}
      />
      <label htmlFor="hours">Hours</label>
      <input
        id="hours"
        type="text"
        placeholder="Hours"
        onChange={handleChanges}
        name="hours"
        value={form.hours}
      />
      <label htmlFor="rating">Rating</label>
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
    </div>
    </div>
  );
};

export default Restaurant;
