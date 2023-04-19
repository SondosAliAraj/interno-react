import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "./style.css";
import NavbarItem from "./NavbarItem";


const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-md navbar-light sticky-xl-top bg-light py-3">
        <div className="container">
          <a href="#home" className="navbar-brand brandSection">
            <img className="logo" src="./assets/Logo.png" alt="Interno logo" />
            <span className="brandTitle">Interno</span>
          </a>
        <NavbarItem/>

        
        </div>
      </nav>
    </>
  );
};

export default Navbar;
