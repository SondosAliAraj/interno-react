import React from "react";
import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

const SectionSubtitle = ({ subtitle }) => {
  return (
    <>
      <p className="lead my-4 text-muted services_subTitle">{subtitle}</p>
    </>
  );
};

export default SectionSubtitle;
