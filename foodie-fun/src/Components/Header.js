import React from 'react';
import {NavLink} from "react-router-dom";


const Header =()=>{
  return (
    <>
      <header>
        <nav>
            <NavLink to={`/`}>
                Home
            </NavLink>
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
      </header>
    </>
  )
}

export default Header 