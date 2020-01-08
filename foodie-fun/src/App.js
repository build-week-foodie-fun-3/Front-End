import React, { useState } from "react";
import ReactDOM from "react-dom";
import {BrowserRouter as Router, Route, NavLink, Switch} from "react-router-dom";
import Restaurant from "./Components/Restaurant";
import Cards from "./Components/Cards";
import Login from "./Components/Login";
import Signup from "./Components/Signup";
// import Account from "./Components/Account";
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
      <Restaurant addNewForm={addNewForm} />
      <Cards forms={forms} />
        <Router>
      <nav>
      
       <NavLink to={`/Login`}>
          Login
        </NavLink>
        <NavLink to={`/Signup`}>
          Signup
        </NavLink>
        
      </nav>
      <Switch>
        <Route path={`/Login`}>
          <Login  />
        </Route>
        <Route path={`/Signup`}>
          <Signup />
        </Route>
      </Switch>
      </Router>
    </div>
  );
}

const rootElement = document.getElementById(
  "root"
);
ReactDOM.render(
  <Router>
    <App />
  </Router>,
  rootElement
);



export default App;
