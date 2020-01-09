    import React, { useState } from "react";
    
    const Food = props => {
    
      const [formA, setFormA] = useState({
        typeofcusineA: "",
        menuitem: "",
        price:"",
        itemrating: "",
        itemreview: "",
        // photourl: "https://sc01.alicdn.com/kf/HTB1E1F.KpXXXXamXVXXq6xXFXXXF/Crinkle-Cut-Fries.jpg"
      });
    
      const handleChanges = e => {
        setFormA({
          ...formA,
          [e.target.name]: e.target.value
        });
        console.log(e.target.name);
      };
      const submitForm = e => {
        e.preventDefault();
        props.addNewForm(formA);
        setFormA({  typeofcusineA: "",
        menuitem: "",
        price:"",
        itemrating: "",
        itemreview: "", });
      };
    
      return (
    <div className="foodForm">
        <div className="food-box">
        <form  onSubmit={submitForm}>
          <label htmlFor="typeofcusineA">Type of Cusine</label>
          <input
            id="typeofcusineA"
            type="text"
            placeholder="Type of Cuisine"
            onChange={handleChanges}
            name="typeofcusineA"
            value={formA.typeofcusineA}
          />
          <label htmlFor="menuitem">Menu Item</label>
          <input
            id="menuitem"
            type="text"
            placeholder="Menu Item"
            onChange={handleChanges}
            name="menuitem"
            value={formA.menuitem}
          />
          <label htmlFor="price">Price</label>
          <input
            id="price"
            type="text"
            placeholder="Price"
            onChange={handleChanges}
            name="price"
            value={formA.price}
          />
          <label htmlFor="itemrating">Item Rating</label>
          <input
            id="itemrating"
            type="text"
            placeholder="Item Rating"
            onChange={handleChanges}
            name="itemrating"
            value={formA.itemrating}
          />
          <label htmlFor="itemreview">Review</label>
          <input
            id="itemreview"
            type="text"
            placeholder="Item review"
            onChange={handleChanges}
            name="itemreview"
            value={formA.itemreview}
          />
          <button type="submit">Add Review </button>
        </form>
        </div>
        </div>
      );
    //   const Cards = props => {
    //     return (
    //       <div className="cards">
    //         {props.forms.map(form => (
    //           <div className="form" key={form.id}>
    //             <h2>{form.name}</h2>
    //             <h3>{form.typeofcusine}</h3>
    //             <p>{form.location}</p>
    //             <p>{form.hours}</p>
    //             <p>{form.rating}</p>
    //           </div>
    //         ))}
    //       </div>
    //     );
    //   };
    };

    export default Food







// const [forms, setForms] = useState([]);
//   const addNewForm = form => {
//     const newForm = {
//       id: Date.now(),
//       name: form.name, 
//       typeofcusine: form.typeofcusine,
//       location: form.location,
//       hours: form.hours,
//       rating: form.rating
//     };
//     setForms([...forms, newForm]);
//   };