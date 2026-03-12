export const Skills = () => {
  return (
    <div className="flex flex-col gap-1">
      <h1 className="font-bold">Skills</h1>
      <div>
        <p className="font-semibold">Backend</p>
        <ul className="list-disc list-inside">
          <li>c/c++: basic</li>
          <li>java: basic</li>
          <li>python: basic</li>
        </ul>
      </div>

      <div>
        <p className="font-semibold">Frontend</p>
        <ul className="list-disc list-inside">
          <li>html</li>
          <li>js</li>
          <li>css</li>
        </ul>
      </div>
      <div>
        <p className="font-semibold">Databases</p>
        <ul className="list-disc list-inside">
          <li>sql: basic</li>
        </ul>
      </div>
      <div>
        <p className="font-semibold">Other</p>
        <ul className="list-disc list-inside">
          <li>git: basic</li>
          <li>bash: basic</li>
          <li>docker: basic</li>
          <li>linux: basic</li>
        </ul>
      </div>
    </div>
  );
};
