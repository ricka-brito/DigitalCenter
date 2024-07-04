import ProjectItem from "./ProjectItem";

const ProjectFrame = ({
  projects,
}: {
  projects: {
    name: string;
    status: string;
    tags: string[];
    imagesUrl: string[];
  }[];
}) => {
  return (
    <div className="grid 2xl:grid-cols-5 xl:grid-cols-4  lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-10 w-full my-10 xs:grid-cols-1">
      {projects.map((project, i) => (
        <ProjectItem
          key={i}
          name={project.name}
          imageUrl={project.imagesUrl[0]}
          status={project.status}
          tags={project.tags}
          index={i}
        />
      ))}
    </div>
  );
};

export default ProjectFrame;
