import React from "react";
import ProjectCard from "./ProjectCard";

const projectsData = [
  {
    id: 1,
    title: "React Portfolio Website",
    description: "Project 1 description",
    image: "/images/1.png",
    tag: ["All", "Web"],
  },
  {
    id: 2,
    title: "Java Dig Dug Clone",
    description: "Project 2 description",
    image: "/images/2.png",
    tag: ["All", "Games"],
  },
  {
    id: 3,
    title: "Java Multiplayer Battleship",
    description: "Project 3 description",
    image: "/images/3.png",
    tag: ["All", "Games"],
  },
];

const ProjectsSection = () => {
  return (
    <>
      <h2>My Projects</h2>
      <div>
        {projectsData.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            imgUrl={project.image}
          />
        ))}
      </div>
    </>
  );
};

export default ProjectsSection;
