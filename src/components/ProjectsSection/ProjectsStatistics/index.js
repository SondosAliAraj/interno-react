import React from "react";
import "./style.css";

const ProjectsStatistics = () => {
  return (
    <>
      <section id="projects">
        <div class="container-fluid statContainer">
          <div class="container">
            <div class="row statistics">
              <div class="col-lg-2 col-6">
                <h1>12</h1>
                <p class="lead text-muted ">Years Of Experiance</p>
              </div>
              <div class="col-1  text-center d-none d-md-block Line">
                <img src="./assets/ProjectsSection/Line.png" alt="line" />
              </div>
              <div class="col-lg-2 col-6">
                <h1>85</h1>
                <p class="lead text-muted">Success Project</p>
              </div>
              <div class="col-1  text-center d-none d-md-block Line">
                <img src="./assets/ProjectsSection/Line.png" alt="line" />
              </div>
              <div class="col-lg-2 col-6">
                <h1>15</h1>
                <p class="lead text-muted">Active Project</p>
              </div>
              <div class="col-1  text-center d-none d-md-block Line">
                <img src="./assets/ProjectsSection/Line.png" alt="line" />
              </div>
              <div class="col-lg-2 col-6">
                <h1>95</h1>
                <p class="lead text-muted">Happy Customers</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProjectsStatistics;








// const stat = [
//   { number: "12", description: "Years Of Experiance" },
//   { number: "85", description: "Success Project" },
//   { number: "15", description: "Active Project" },
//   { number: "95", description: "Happy Customers" },
// ];
{
  /* {stat.map((item, index) => {
                return (
                  <>
                    <div class="col-lg-2 col-6">
                      <h1>{item.number}</h1>
                      <p class="lead text-muted ">{item.description}</p>
                    </div>
                    <div class="col-1  text-center d-none d-md-block Line">
                      <img src="./assets/ProjectsSection/Line.png" alt="line" />
                    </div>
                  </>
                );
              })} */
}
