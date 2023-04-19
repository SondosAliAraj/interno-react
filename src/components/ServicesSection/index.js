import React from "react";
import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import SectionHeader from "../SectionHeader";
import SectionSubtitle from "../SectionSubtitle";
import CallSection from "../CallSection";
import Button from "../Button";

const ServicesSection = () => {
  return (
    <>
      <section id="services">
        <div className="container pb-5 paddingBottomZero">
          <div className="row justify-content-center align-items-center">
            <div className="col-md-6 text-center text-md-start">
              <h1>
                <div class="display-2 mt-2 servicesHeader">
                  We Create The Art Of Stylish Living Stylishly
                </div>
              </h1>
              <p class="lead my-4 text-muted services_subTitle">
                It is a long established fact that a reader will be distracted
                by the of readable of a page when lookings at its layouts the
                points of using that it has a more-or-less normal.
              </p>
              {/* <SectionHeader headerTitle="We Create The Art Of Stylish Living Stylishly" />
              <SectionSubtitle
                subtitle="It is a long established fact that a reader will be distracted by
            the of readable of a page when lookings at its layouts the
            points of using that it has a more-or-less normal."
              /> */}
              <CallSection />
              <Button btnText="Get Free Estimate" />
            </div>
            <div className="col-md-6 text-center d-none d-md-block">
              <img
                className="img-fluid servicesPic"
                src="./assets/services_pic.jpg"
                alt="services_pic"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServicesSection;
