import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "./style.css";

const PagesCard = ({ cardHeader, cardSubtitle }) => {
  return (
    <>
      <div className="card border-0 mb-3 pagesCard">
        <div className="card-body">
          <h5 className="card-title cardHeader">{cardHeader}</h5>
          <p className="card-text text-center pb-5 pt-2 cardSubtitle">
            {cardSubtitle}
          </p>
          <a href="#" className="lead text-decoration-none readMoreLink">
            Read More
            <img
              src="./assets/Vector.svg"
              alt="right arrow icon"
              className="ms-2"
            />
          </a>
        </div>
      </div>
    </>
  );
};

export default PagesCard;
