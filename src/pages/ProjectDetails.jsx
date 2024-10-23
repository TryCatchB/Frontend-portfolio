import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import axios from "axios";
import ProjectDetailsSkeleton from "../skeletons/ProjectDetailsSkeleton";
import BtnGitHub from "../components/btnGitHub/BtnGitHub";
import BtnToSite from "../components/btnToSite/BtnToSite";

const fetchProjectById = async (id) => {
  const { data } = await axios.get(`http://localhost:3000/projects/${id + 1}`);

  return data;
};

const ProjectDetails = () => {
  const { id } = useParams();

  const { data: project, isLoading } = useQuery({
    queryKey: ["projects", id],
    queryFn: () => fetchProjectById(Number(id)),
  });

  if (isLoading) return <ProjectDetailsSkeleton />;

  return (
    <main className="section">
      <div className="container">
        <div className="project-details">
          <h1 className="title-1">{project.title}</h1>

          <img
            src={`src/assets/projects/${project.image}`}
            alt={project.title}
            className="project-details__cover"
          />

          <div className="project-details__desc">
            <p>Skills: {project.skills}</p>
          </div>

          <div className="btn-block">
            {project.link && <BtnToSite link={project.link} />}
            {project.gitHubLink && <BtnGitHub link={project.gitHubLink} />}
          </div>
        </div>
      </div>
    </main>
  );
};

export default ProjectDetails;
