import React from "react";
import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

const SectionHeader = ({ headerTitle }) => {
  return (
    <>
      <h1>
        <div className="display-2 mt-2 servicesHeader">{headerTitle}</div>
      </h1>
    </>
  );
};

export default SectionHeader;
