import React from "react";

function Nav() {
    return (


        <nav className="navbar navbar-expand-lg shadow-lg">

            <div className="navbar-brand">
                Google Books Search
                
                
            
            <a className="float-right nav-link btn btn-dark" href='/'>Search</a>
            <a className="float-right nav-link btn btn-success" href='/saved'>Saved</a>
     
                
                </div>

        </nav>


    );
}

export default Nav;