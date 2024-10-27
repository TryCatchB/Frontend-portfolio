import Header from "../components/header/Header";

const Home = () => {
  return (
    <>
      <Header />
      <main className="section">
        <div className="container">
          <ul className="content-list content-list_row">
            <li className="content-list__item">
              <h2 className="title-2">Frontend skills</h2>
              <p className="skills-text">
                JavaScript, TypeScript, ReactJS, Redux, HTML, CSS, NPM, NVM,
                NextJS, React Query, Rest, BootStrap, MaterialUI, TailwindCSS,
                FireBase, Vite.
              </p>
            </li>
            <li className="content-list__item">
              <h2 className="title-2">Backend skills</h2>
              <p className="skills-text">ExpressJS, SQL.</p>
            </li>
          </ul>
        </div>
      </main>
    </>
  );
};

export default Home;
