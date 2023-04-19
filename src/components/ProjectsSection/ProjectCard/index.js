import React from 'react';
import './style.css'

const ProjectCard = ({ photoBorderRadius,image, cardHeader, cardSubHeader }) => {

  return (
    <>
      <div className="card border-0 projectCard">
        <img src={image} className={photoBorderRadius} alt="project 1 photo" />
        <div className="cardContent pt-2">
          <div>
            <h4 className="text-start">{cardHeader}</h4>
            <p className="text-start">{cardSubHeader}</p>
          </div>
          <div className="ellipseArrow">
            <img
              src="./assets/ProjectsSection/Vector.png"
              className="arrow mt-4"
              alt="arrow icon"
            />
          </div>
        </div>
      </div>
    </>
  );
};
 
export default ProjectCard;