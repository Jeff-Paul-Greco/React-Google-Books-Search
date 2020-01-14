import React from "react";

function Nav() {
    return (

        <nav className="navbar navbar-expand-lg">

            <span className="navbar-brand">
                Google Books Search
        </span>

            <a className="nav-link btn btn-success float-right right" href='/'>Search</a>
            <a className="nav-link btn btn-dark float-right right" href='/saved'>Saved</a>

        </nav>

    );
}

export default Nav;