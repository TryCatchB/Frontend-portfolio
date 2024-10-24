import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import ProjectCard from "../components/projectCard/ProjectCard.jsx";
import ProjectsSkeleton from "../skeletons/ProjectsSkeleton.jsx";

const fetchProjects = async () => {
  const { data } = await axios.get(import.meta.env.VITE_BASE_API + "/projects");
  return data;
};

const Projects = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["projects"],
    queryFn: fetchProjects,
  });

  return (
    <main className="section">
      <div className="container">
        <h2 className="title-1">Projects</h2>
        <ul className="projects">
          {isLoading
            ? Array.from({ length: 6 }).map((_, index) => (
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
