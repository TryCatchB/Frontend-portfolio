import { useEffect, useState } from "react";
import { projects } from "../helpers/ProjectsList.js";
import ProjectCard from "../components/projectCard/ProjectCard.jsx";
import ProjectSkeleton from "../skeletons/ProjectSkeleton.jsx";

const Projects = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      await new Promise((resolve) => setTimeout(() => resolve(2000)));

      setData(projects);

      setLoading(false);
    };
    fetchProjects();
  }, []);

  return (
    <main className="section">
      <div className="container">
        <h2 className="title-1">Projects</h2>
        <ul className="projects">
          {loading
            ? Array.from({ length: projects.length }).map((_, index) => (
                <li key={index}>
                  <ProjectSkeleton />
                </li>
              ))
            : data.map((project, index) => (
                <ProjectCard
                  key={index}
                  title={project.title}
                  img={project.img}
                  index={index}
                />
              ))}
        </ul>
      </div>
    </main>
  );
};

export default Projects;
