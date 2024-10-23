import ContentLoader from "react-content-loader";

const ProjectDetailsSkeleton = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        paddingTop: "60px",
      }}
    >
      <ContentLoader
        speed={2}
        width={600}
        height={500}
        viewBox="0 0 600 600"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
      >
        {/* Title */}
        <rect x="170" y="20" rx="5" ry="5" width="250" height="40" />

        {/* Image */}
        <rect x="20" y="80" rx="5" ry="5" width="560" height="300" />

        {/* Skills section */}
        <rect x="20" y="400" rx="5" ry="5" width="560" height="30" />

        {/* Buttons section */}
        <rect x="130" y="450" rx="5" ry="5" width="150" height="40" />
        <rect x="320" y="450" rx="5" ry="5" width="150" height="40" />
      </ContentLoader>
    </div>
  );
};

export default ProjectDetailsSkeleton;
