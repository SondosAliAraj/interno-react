import React from "react";

import "./style.css";

const navbarItems = [
  { title: "Home", ref: "#home" },
  { title: "Pages", ref: "#pages" },
  { title: "Services", ref: "#services" },
  { title: "Projects", ref: "#projects" },
  { title: "Blog", ref: "#blog" },
  { title: "Contact", ref: "#contact" },
];

const NavbarItem = () => {
  return (
    <>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#main-nav"
        aria-controls="main-nav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div
        className="collapse navbar-collapse justify-content-end"
        id="main-nav"
      >
        <ul className="navbar-nav itemsText">
          {navbarItems.map((item) => {
            return (
              <>
                <li className="nav-item">
                  <a href={item.ref} className="nav-link pe-4 navbarItem">
                    {item.title}
                  </a>
                </li>
              </>
            );
          })}
          {/* <li className="nav-item">
            <a href="#home" className="nav-link pe-4 navbarItem">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a href="#pages" className="nav-link pe-4 navbarItem">
              Pages
            </a>
          </li>
          <li className="nav-item">
            <a href="#services" className="nav-link pe-4 navbarItem">
              Services
            </a>
          </li>
          <li className="nav-item">
            <a href="#projects" className="nav-link pe-4 navbarItem">
              Project
            </a>
          </li>
          <li className="nav-item">
            <a href="#blog" className="nav-link pe-4 navbarItem">
              Blog
            </a>
          </li>
          <li className="nav-item">
            <a href="#contact" className="nav-link pe-4 navbarItem">
              Contact
            </a>
          </li> */}
          <li className="nav-item d-flex">
            <a
              href="#search"
              className="nav-link pe-4 d-none d-md-inline navbarItem serachIconForSmallScreen"
            >
              <img
                src="./assets/Vector.png"
                alt="search icon"
                className="navbarItem"
              />
            </a>
          </li>
          {/*  <li class="nav-item d-md-none">
            <a href="#search" class="nav-link pe-4 navbarItem">Search</a>
          </li>  */}
        </ul>
      </div>
    </>
  );
};

export default NavbarItem;
