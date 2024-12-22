
export const Work = ({project}) => {
    return (
        <div className="flex flex-col bg-gray-100 rounded-2xl p-5 w-100 gap-2">
            <div>
                <div className="flex flex-col gap-1">
                    <h1 className="font-bold">{project.title}</h1>
                    <p className="prose">{project.description}</p>
                    <p className="font-semibold">Technologies:</p>
                </div>
                <div className="flex gap-2">
                {project.technologies.map((technology, index) => <div key={"tech-"+project.id+index} className="p-2 pb-1 pt-1 bg-gray-200 rounded-xl">{technology}</div>)}
                </div>
            </div>
            <a className="text-blue-500" href={project.gitlab}>Gitlab</a>
        </div>
    );
}