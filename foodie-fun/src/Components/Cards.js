import React from "react";

const Cards = props => {
    return (
      <div className="cards">
        {props.forms.map(form => (
          <div className="form" key={form.id}>
            <p>Restaurant Name: {form.name}</p>
            <p>Type of Cusine: {form.typeofcusine}</p>
            <p>Location: {form.location}</p>
            <p>Hours of Operation: {form.hours}</p>
            <p>Rating: {form.rating}</p>
          </div>
        ))}
      </div>
    );
  };
  
  export default Cards;
  