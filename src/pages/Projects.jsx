import { useQuery } from "@tanstack/react-query";
import fetchProjects from "../utils/fetchProjects.js";
import ProjectCard from "../components/projectCard/ProjectCard.jsx";
import ProjectsSkeleton from "../skeletons/ProjectsSkeleton.jsx";

const Projects = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["projects"],
    queryFn: fetchProjects,
  });

  return (
    <main className="section">
      <div className="container container_medium">
        <h2 className="title-1">Projects</h2>
        <ul className="projects">
          {isLoading
            ? Array.from({ length: 8 }).map((_, index) => (
                <li key={index}>
                  <ProjectsSkeleton />
                </li>
              ))
            : data.map((project) => (
                <ProjectCard
                  key={project.id}
                  title={project.title}
                  image={project.image}
                  id={project.id - 1}
                />
              ))}
        </ul>
      </div>
    </main>
  );
};

export default Projects;
