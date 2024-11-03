import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import fetchProjectById from "../utils/fetchProjectById";
import ProjectDetailsSkeleton from "../skeletons/ProjectDetailsSkeleton";
import BtnGitHub from "../components/btnGitHub/BtnGitHub";
import BtnToSite from "../components/btnToSite/BtnToSite";

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
          <div>
            <h1 className="title-1">{project.title}</h1>
            <img
              src={project.image}
              alt={project.title}
              className="project-details__cover"
            />
          </div>
          <div className="project-details__meta">
            <h3 className="title-2">Description</h3>
            <p className="project-details__desc">{project.description}</p>
            <p className="project-details__skills">Skills: {project.skills}</p>
            <div className="btn-block">
              {project.link && <BtnToSite link={project.link} />}
              {project.gitHubLink && <BtnGitHub link={project.gitHubLink} />}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ProjectDetails;
