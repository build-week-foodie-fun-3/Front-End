import React from "react";

const Cards = props => {
    return (
      <div className="card-list">
        {props.forms.map(form => (
          <div className="form" key={form.id}>
            <h2>{form.name}</h2>
            <h3>{form.typeofcusine}</h3>
            <p>{form.location}</p>
            <p>{form.hours}</p>
            <p>{form.rating}</p>
          </div>
        ))}
      </div>
    );
  };
  
  export default Cards;
  