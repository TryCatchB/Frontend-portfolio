import "./styles.css";

const Header = () => {
  return (
    <header className="header">
      <div className="header__wrapper">
        <h1 className="header__title">
          <strong>
            Hi, my name is <em>Evgeny</em>
          </strong>
          <br />I am a frontend developer
        </h1>
        <div className="header__text">
          <p>
            To develop applications I use HTML, CSS (Bootstrap, Tailwind CSS),
            JavaScript (TypeScript, React, Redux Toolkit, Material UI) and
            others. I also have experience creating an API for interaction
            between client and server using Express.js.
          </p>
        </div>
        <a href="#!" className="btn">
          Download CV
        </a>
      </div>
    </header>
  );
};

export default Header;
