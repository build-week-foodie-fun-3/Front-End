import React, { useState } from "react";
import ReactDOM from "react-dom";
import Restaurant from "./Forms/Restaurant";
import Cards from "./Forms/Cards"
import "./App.css";

function App() {
  const [forms, setForms] = useState([]);
  const addNewForm = form => {
    const newForm = {
      id: Date.now(),
      name: form.name, 
      typeofcusine: form.typeofcusine,
      location: form.location,
      hours: form.hours,
      rating: form.rating
    };
    setForms([...forms, newForm]);
  };
  return (
    <div className="App">
      <h1>My Cards</h1>
      <Restaurant addNewForm={addNewForm} />
      <Cards forms={forms} />
    </div>
  );
}

const rootElement = document.getElementById(
  "root"
);
ReactDOM.render(<App />, rootElement);


export default App;
