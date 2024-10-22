import ContentLoader from "react-content-loader";

const ProjectSkeleton = () => {
  return (
    <ContentLoader
      speed={2}
      width={370}
      height={240}
      viewBox="0 0 300 400"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
    >
      <rect x="10" y="10" rx="5" ry="5" width="280" height="30" /> {/* Title */}
      <rect x="10" y="50" rx="5" ry="5" width="280" height="200" />
      {/* Image */}
    </ContentLoader>
  );
};

export default ProjectSkeleton;
