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
        <rect x="170" y="40" rx="5" ry="5" width="250" height="40" />

        {/* Image */}
        <rect x="20" y="120" rx="5" ry="5" width="864" height="339" />

        {/* Skills section */}
        <rect x="100" y="490" rx="5" ry="5" width="400" height="30" />

        {/* Buttons section */}
        <rect x="130" y="550" rx="5" ry="5" width="150" height="40" />
        <rect x="320" y="550" rx="5" ry="5" width="150" height="40" />
      </ContentLoader>
    </div>
  );
};

export default ProjectDetailsSkeleton;
