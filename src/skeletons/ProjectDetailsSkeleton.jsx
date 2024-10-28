import ContentLoader from "react-content-loader";

const ProjectDetailsSkeleton = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        paddingTop: "60px",
      }}
    >
      <ContentLoader
        speed={2}
        width={800}
        height={400}
        viewBox="0 0 800 400"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
      >
        {/* Title */}
        <rect x="110" y="20" rx="4" ry="4" width="180" height="30" />

        {/* Image */}
        <rect x="0" y="80" rx="10" ry="10" width="400" height="300" />

        {/* Description */}
        <rect x="490" y="50" rx="4" ry="4" width="250" height="30" />
        <rect x="470" y="100" rx="4" ry="4" width="300" height="180" />
        <rect x="470" y="300" rx="4" ry="4" width="300" height="20" />

        {/* Buttons */}
        <rect x="490" y="350" rx="4" ry="4" width="120" height="40" />
        <rect x="630" y="350" rx="4" ry="4" width="120" height="40" />
      </ContentLoader>
    </div>
  );
};

export default ProjectDetailsSkeleton;
