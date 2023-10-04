import React from "react";
import ProjectItem from "./ProjectItem";

function ProjectList({ projects }) {
  // console.log(projects);
  const project = projects.map((el)=>{
    return(<ProjectItem key={el.id} technologies={el.technologies} name={el.name} about={el.about}/>)
  })
  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div id="project-list">{project}</div>
    </div>
  );
}

export default ProjectList;
