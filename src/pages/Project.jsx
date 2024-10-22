import { useParams } from "react-router-dom";
import { projects } from "./../helpers/ProjectsList.js";
import BtnGitHub from "../components/btnGitHub/BtnGitHub";
import BtnToSite from "../components/btnToSite/BtnToSite";

const Project = () => {
  const { id } = useParams();

  const project = projects[id];
  console.log(project);

  return (
    <main className="section">
      <div className="container">
        <div className="project-details">
          <h1 className="title-1">{project.title}</h1>

          <img
            src={project.img}
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

export default Project;
