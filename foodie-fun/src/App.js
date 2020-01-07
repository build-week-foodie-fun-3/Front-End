import React, { useState } from "react";
import ReactDOM from "react-dom";
import Restaurant from "./Forms/Restaurant";
import Cards from "./Forms/Cards"
// import "./styles.scss";
// import { Form } from "formik";

function App() {
  const [forms, setForms] = useState([
    {
      id: 1,
      title: "Happy little quote",
      body:
        "Talent is a pursued interest. Anything that you're willing to practice, you can do.― Bob Ross "
    }
  ]);
  const addNewForm = form => {
    const newForm = {
      id: Date.now(),
      name: form.name, 
      typeofcusine: form.typeofcusine,
      location: form.location,
      hours: form.hours,
      rating: form.rating,
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
