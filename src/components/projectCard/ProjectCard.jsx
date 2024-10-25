import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import "./styles.css";

const ProjectCard = ({ title, image, id }) => {

  return (
    <NavLink to={`/project/${id}`}>
      <li className="project">
        <img src={image} alt={title} className="project__img" />
        <h3 className="project__title">{title}</h3>
      </li>
    </NavLink>
  );
};

ProjectCard.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};

export default ProjectCard;
