import React from "react";
import "./style.css";

const BlogCard = (props) => {
  const cardClass = "card border-1 mb-3 p-4 blogCard";
  const card2Class = "card border-1 mb-3 p-4 blogCard2";
  // const styleClass = props.blogCard2 === "blogCard2" ? card2Class : cardClass;

  const classes = props.blogCard2 === "blogCard2" ? card2Class : cardClass;

  return (
    <>
      <div className={`stylewww ${classes}`} style={{ borderRadius: "72px" }}>
        {/* <div className="card mb-3 p-4"> */}
        <img src={props.photo} class="blogPhoto" alt="blog 1 photo" />
        <p class="cardTag">{props.cardTag}</p>
        <h3 class="text-start blogCardTitle">{props.cardTitle}</h3>
        <div class="cardContent pt-2">
          <p class="pt-4 text-start">{props.cardDate}</p>
          <div class="ellipseArrow">
            <img
              src="./assets/ProjectsSection/Vector.png"
              class="arrow"
              alt="arrow icon"
            />
          </div>
        </div>
        {/* </div> */}
      </div>
    </>
  );
};

export default BlogCard;
