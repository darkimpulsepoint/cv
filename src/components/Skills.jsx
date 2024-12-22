
export const Skills = () => {
    return (
        <div className="flex flex-col gap-1">
            <h1 className="font-bold">Skills</h1>
            <div>
                <p className="font-semibold">Backend</p>
                <ul className="list-disc list-inside">
                    <li>c/c++</li>
                    <li>python</li>
                    <li>django/drf</li>
                </ul>
            </div>

            <div>
                <p className="font-semibold">Frontend</p>
                <ul className="list-disc list-inside">
                    <li>html</li>
                    <li>js/ts</li>
                    <li>react</li>
                    <li>react-router-dom</li>
                    <li>nodejs</li>
                </ul>
            </div>
            <div>
                <p className="font-semibold">Databases</p>
                <ul className="list-disc list-inside">
                    <li>sql</li>
                    <li>t-sql</li>
                    <li>sqlite</li>
                </ul>
            </div>
            <div>
                <p className="font-semibold">Other</p>
                <ul className="list-disc list-inside">
                    <li>git</li>
                    <li>bash</li>
                    <li>linux</li>
                    <li>bsd</li>
                </ul>
            </div>
        </div>
    );
}