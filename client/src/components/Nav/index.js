import React from "react";
import "./Nav.css";

function Nav() {
  return (

    <nav className="navbar navbar-expand-lg">

        <span className="navbar-brand">
          Google Books Search
        </span>

        <a className="nav-link btn btn-success" href='/'>Search</a>
        <a className="nav-link btn btn-dark" href='/saved'>Saved</a>

    </nav>
    
  );
}

export default Nav;