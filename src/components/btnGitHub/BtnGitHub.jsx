import PropTypes from "prop-types";
import gitHubImg from "../../assets/icons/gitHub-black.svg";

const BtnGitHub = ({ link }) => {
  return (
    <a href={link} target="_blanck" className="btn-outline">
      <img src={gitHubImg} alt="" />
      GitHub repo
    </a>
  );
};

BtnGitHub.propTypes = {
  link: PropTypes.string.isRequired,
};

export default BtnGitHub;
