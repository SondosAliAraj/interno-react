import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "./style.css";

const Button = ({ btnText, btnStyle }) => {
  return (
    <>
      <button className="btn btn-dark btn-lg custom-btn getStarted-btn d-none d-sm-inline">
        {btnText}
        <img
          src="./assets/Vector.svg"
          className="ms-2 arrow"
          alt="right arrow icon"
        />
      </button>
      <button
        type="button"
        className="btn btn-lg btn-light d-sm-none smallBtn"
        style={btnStyle}
      >
        {btnText}
        {/* <img
          src="./assets/Vector.svg"
          className="ms-2 arrow arrowS"
          alt="right arrow icon"
        /> */}
      </button>
    </>
  );
};

export default Button;

//   <button class="btn btn-dark d-none d-sm-inline custom-btn services-btn">
//     Get Free Estimate
//     <img src="./assets/Vector.svg" alt="right arrow icon" />
//   </button>;
