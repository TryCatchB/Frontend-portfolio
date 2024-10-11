import PropTypes from "prop-types";

const BtnToSite = ({ link }) => {
  return (
    <a href={link} target="_blanck" className="btn-outline">
      Visit site
    </a>
  );
};

BtnToSite.propTypes = {
  link: PropTypes.string.isRequired,
};

export default BtnToSite;
