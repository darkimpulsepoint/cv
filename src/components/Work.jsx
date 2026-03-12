export const Work = ({ project }) => {
  return (
    <div className="flex flex-col bg-gray-100 rounded-2xl p-5 w-full gap-2">
      <div>
        <div className="flex flex-col gap-1">
          <h1 className="font-bold text-xl md:text-2xl">{project.title}</h1>
          <p className="prose text-sm md:text-base">{project.description}</p>
          <p className="font-semibold text-sm md:text-base mt-2">
            Technologies:
          </p>
        </div>
        <div className="flex flex-wrap gap-2 mt-2">
          {project.technologies.map((technology, index) => (
            <div
              key={"tech-" + project.id + index}
              className="p-2 pb-1 pt-1 bg-gray-200 rounded-xl text-xs md:text-sm"
            >
              {technology}
            </div>
          ))}
        </div>
      </div>
      <a
        className="text-blue-500 text-sm md:text-base mt-2"
        href={project.gitlab}
      >
        Gitlab
      </a>
    </div>
  );
};
