import React from "react";
import "./style.css";
import SectionHeader from "../SectionHeader";
import SectionSubtitle from "../SectionSubtitle";
import ProjectCard from "./ProjectCard";
import ProjectsStatistics from "./ProjectsStatistics";

const cardsContent = [
  {
    image: "./assets/ProjectsSection/Photo1.png",
    borderRadius: "card1Photo",
    header: "Modern Kitchen",
    subHeader: "Decor / Artchitecture",
  },
  {
    image: "./assets/ProjectsSection/Photo2.png",
    borderRadius: "card2Photo",
    header: "Modern Kitchen",
    subHeader: "Decor / Artchitecture",
  },
  {
    image: "./assets/ProjectsSection/Photo3.png",
    borderRadius: "card3Photo",
    header: "Modern Kitchen",
    subHeader: "Decor / Artchitecture",
  },
  {
    image: "./assets/ProjectsSection/Photo4.png",
    borderRadius: "card4Photo",
    header: "Modern Kitchen",
    subHeader: "Decor / Artchitecture",
  },
];

const ProjectsSection = () => {
  return (
    <>
      <section id="projects">
        <div className="container-xl projectsContainer py-5 mt-5">
          <h1>Follow Our Projects</h1>
          <p class="py-4 projectsSubtitle text-muted">
            It is a long established fact that a reader will be distracted by
            the of readable <br />
            content of page lookings at its layouts points.
          </p>
          <div>
            <div className="cardContainer">
              {cardsContent.map((item) => {
                return (
                  <ProjectCard
                    image={item.image}
                    photoBorderRadius={item.borderRadius}
                    cardHeader={item.header}
                    cardSubHeader={item.subHeader}
                  />
                );
              })}
            </div>
          </div>
        </div>
        <ProjectsStatistics />
      </section>
    </>
  );
};

export default ProjectsSection;
