import React from "react";
import "./style.css";
import List from "./List";
import CopyrightSection from "./CopyrightSection";

const pagesList = [
  "About Us",
  "Our Projects",
  "Our Team",
  "Contact Us",
  "Services",
];
const servicesList = [
  "Kitchen",
  "Living Area",
  "Bathroom",
  "Dining Hall",
  "Bedroom",
];
const contactList = [
  "55 East Birchwood Ave.Brooklyn, New York 11201",
  "contact@interno.com",
  "(123) 456 - 7890",
];

const ContactSection = () => {
  return (
    <>
      <section id="contact">
        <div class="container  footer">
          <div class="logoContainer">
            <a href="#home" class="navbar-brand footerLogo">
              <img
                class="logo text-start"
                src="./assets/Logo.png"
                alt="Interno logo"
              />
              <span class="brandTitle">Interno</span>
            </a>
            <p class="brandSection footerP text-muted">
              It is a long established fact that a reader will be distracted
              lookings.
            </p>
            <div class="socialMedia">
              <img src="./assets/Icons.png" alt="social media icons" />
            </div>
          </div>
          <div class="smallScreenContact">
            <List title="Pages" arrayList={pagesList} />
            <List title="Services" arrayList={servicesList} />
            <List title="Contact" arrayList={contactList} />
          </div>
        </div>
        <hr class="mb-5" />
        <CopyrightSection />
      </section>
    </>
  );
};

export default ContactSection;
