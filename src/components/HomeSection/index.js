import React from "react";
import "./style.css";
import Button from "../Button";

const HomeSection = () => {
  return (
    <>
      <section id="home">
        <div className="container-fluid homeContainer pe-0 ps-0 me-0 ms-0">
          <img
            src="./assets/intro_pic.jpg"
            className="img-fluid home-bg-pic bg-pic"
            alt="home pic"
          />

          <div className="container homeTitles">
            <h1 className="home-header">
              Let Your Home <br />
              Be Unique
            </h1>
            <p className="lead home-subtitle">
              There are many variations of the passages of lorem Ipsum from
              available,variations of the passages.
            </p>
            <Button
              btnText="Get Started"
              btnStyle={{ display: "flex", margin: "auto" }}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default HomeSection;
