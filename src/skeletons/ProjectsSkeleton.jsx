import ContentLoader from "react-content-loader";

const ProjectsSkeleton = () => {
  return (
    <ContentLoader
      speed={2}
      width={370}
      height={340}
      viewBox="0 0 300 400"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
    >
      <rect x="10" y="10" rx="5" ry="5" width="400" height="200" />
      {/* Image */}
      <rect x="10" y="240" rx="5" ry="5" width="100" height="30" />
      {/* Title */}
    </ContentLoader>
  );
};

export default ProjectsSkeleton;
