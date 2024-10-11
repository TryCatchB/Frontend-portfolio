import vk from "../../assets/icons/vk.svg";
import instagram from "../../assets/icons/instagram.svg";
import twitter from "../../assets/icons/twitter.svg";
import gitHub from "../../assets/icons/gitHub.svg";
import linkedIn from "../../assets/icons/linkedIn.svg";
import "./styles.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__wrapper">
          <ul className="social">
            <li className="social__item">
              <a href="#!">
                <img src={vk} alt="Link" />
              </a>
            </li>
            <li className="social__item">
              <a
                href="https://www.instagram.com/zhonya_pozdryakov?igsh=MWowcWFwOHl4bjY4cA=="
                target="_blanck"
              >
                <img src={instagram} alt="Link" />
              </a>
            </li>
            <li className="social__item">
              <a href="#!">
                <img src={twitter} alt="Link" />
              </a>
            </li>
            <li className="social__item">
              <a href="https://github.com/TryCatchB" target="_blanck">
                <img src={gitHub} alt="Link" />
              </a>
            </li>
            <li className="social__item">
              <a
                href="https://www.linkedin.com/in/%D1%94%D0%B2%D0%B3%D0%B5%D0%BD-%D0%BF%D0%BE%D0%B7%D0%B4%D1%80%D1%8F%D0%BA%D0%BE%D0%B2-a6a500255?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                target="_blanck"
              >
                <img src={linkedIn} alt="Link" />
              </a>
            </li>
          </ul>
          <div className="copyright">
            <p>© 2022 frontend-dev.com</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
