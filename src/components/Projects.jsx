import React from "react";
import "../styles/projects.css";
import ProjectCard from "./ProjectCard";
// import projects from "../data/projects"
import project1 from "../assets/images/project1.jpeg";
import project2 from "../assets/images/project2.jpeg";
import project3 from "../assets/images/project3.jpeg";
import project4 from "../assets/images/project4.jpeg";

const projects = [
  { id: 1, title: "Box Culvert - River Crossing", image: project1 },
  { id: 2, title: "Channel Drain & Retaining Works", image: project2 },
  { id: 3, title: "Minor Superstructure Bridge", image: project3 },
  { id: 4, title: "Panel Wall & Compound Works", image: project4 },
];

export default function Projects() {
  return (
    <section id="projects" className="projects container">
      <h2>Projects</h2>
      <div className="project-list">
        {projects.map(p => (
          <ProjectCard key={p.id} title={p.title} image={p.image} />
        ))}
      </div>
    </section>
  );
}
