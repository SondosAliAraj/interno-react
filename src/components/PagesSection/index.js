import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "./style.css";
import PagesCard from "./PagesCard";

const PagesInfoArray = [
  {
    header: "Project Plan",
    subtitle:
      "There are many variations of the passages of lorem Ipsum from available, majority.",
  },
  {
    header: "Interior Work",
    subtitle:
      "There are many variations of the passages of lorem Ipsum from available, majority.",
  },
  {
    header: "Realization",
    subtitle:
      "There are many variations of the passages of lorem Ipsum from available, majority.",
  },
];

const PagesSection = () => {
  return (
    <>
      <section id="pages">
        <div className="container py-5 paddingBottomZero">
          <div className="row  justify-content-center py-5">
            {PagesInfoArray.map((item) => {
              return (
                <>
                  <PagesCard
                    cardHeader={item.header}
                    cardSubtitle={item.subtitle}
                  />
                </>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default PagesSection;
