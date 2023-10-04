import React from "react";

function ProjectItem({ name, about, technologies }) {
const spanName = technologies.map((el)=>{return(<span key={el}>{el}</span>)})
  return (
    <div className="project-item">
      <h3>{name}</h3>
      <p>{about}</p>
      <div className="technologies">
        {spanName}
      </div>
    </div>
  );
}

export default ProjectItem;
