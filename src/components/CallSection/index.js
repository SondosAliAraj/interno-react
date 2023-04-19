import React from "react";
import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
const CallSection = () => {
  return (
    <>
      <div className="callSection py-3 align-items-center">
        <div className="phoneIconPosition">
          <img src="./assets/Ellipse.png" className="ellipse" alt="Ellipse" />
          <img src="./assets/Call.svg" className="phone" alt="phone icon" />
        </div>
        <div className="ps-3 text-center align-items-center contact_no">
          <h4>012345678</h4>
          <p>Call Us Anytime</p>
        </div>
      </div>
    </>
  );
};

export default CallSection;
