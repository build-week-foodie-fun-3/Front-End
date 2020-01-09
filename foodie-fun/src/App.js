import React, { useState } from "react";
import ReactDOM from "react-dom";
import {BrowserRouter as Router, Route, NavLink, Switch} from "react-router-dom";
import Restaurant from "./Components/Restaurant";
import Login from "./Components/Login";
import Signup from "./Components/Signup";
import Food from "./Components/Food";
import Search from "./Components/Search";
import "./App.css";

function App() {

  return (
    <div className="App">
        <Router>
      <nav className="nav">
       <NavLink to={`/Login`}>
          Login
        </NavLink>
        <NavLink to={`/Signup`}>
          Signup
        </NavLink>
        <NavLink to={`/Restaurant`}>
          Add Restaurant
        </NavLink>
        <NavLink to={`/Food`}>
          Add Review
        </NavLink>
        <NavLink to={`/Search`}>
          Search
        </NavLink>
      </nav>
      <Switch>
        <Route path={`/Login`}>
          <Login  />
        </Route>
        <Route path={`/Signup`}>
          <Signup />
        </Route>
        <Route path={`/Restaurant`}>
          <Restaurant />
        </Route>
        <Route path={`/Food`}>
          <Food />
        </Route>
        <Route path={`/Search`}>
          <Search />
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
