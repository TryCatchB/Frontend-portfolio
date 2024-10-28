const About = () => {
  return (
    <main className="description-content">
      <section className="container">
        <h2 className="description-title">About my web-site</h2>
        <p className="description">
          To create a Frontend-portfolio website, I used modern technologies
          such as <strong>React</strong> for building interfaces,{" "}
          <strong>Vite</strong> for quick project assembly, as well as{" "}
          <strong>HTML</strong> and <strong>CSS</strong> for styling. The
          project also implements navigation using <strong>React Router</strong>
          , data management through <strong>React Query</strong>, as well as the
          use of <strong>axios</strong> to work with APIs. In order to ensure
          code quality, I have integrated <strong>eslint</strong>. Also I used{" "}
          <strong>React-Content-Loader</strong> for displaying loading
          placeholders while data is being fetched from APIs.
        </p>
      </section>
    </main>
  );
};

export default About;
