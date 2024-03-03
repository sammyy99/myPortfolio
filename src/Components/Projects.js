import React, { useState } from "react";
import { projects } from "../Utils&Constants/constants";
import { Typewriter } from "react-simple-typewriter";

const Projects = () => {
  const [project, setProject] = useState(0);

  const handleProject = (id) => {
    setProject(id - 1);
  };

  return (
    <div id="projects" className="text-green-500 mt-6  mx-6 py-10 bg-black bg-opacity-50 rounded-lg font-mono">
      <div className="flex justify-center text-4xl font-semibold">
        {"Projects"}
      </div>

      <div className="mx-8 my-14">
        <div className="grid grid-cols-12 my-8">
          <video
            key={projects[project].id}
            autoPlay
            loop
            muted
            controls
            className="col-span-7 rounded-3xl "
          >
            <source src={projects[project].vids} type="video/mp4" />
          </video>

          <div className="col-span-5 ml-12 ">
            <div className="text-xl font-bold mb-10"> 
            <Typewriter
              key={projects[project].id}
              words= {[`< ${projects[project].name} />`]}
              loop={true}
              cursor
              cursorStyle="_"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={2000}
            />
            </div>
            <div className="my-6">{projects[project].description}</div>
            <a
              href={projects[project].link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block"
            >
              <button className="px-4 border border-green-500 py-1 text-lg rounded-lg bg-black hover:cursor-pointer hover:text-green-300 hover:text-xl transition-all translate-300">
                {`Visit ${projects[project].visitName}`}
              </button>
            </a>
          </div>
        </div>

        <div className="flex justify-center mt-12">
          {projects.map((p) => {
            return (
              <button
                key={p.id}
                onClick={() => {
                  handleProject(p.id);
                }}
                className={`mx-5 px-4 border border-green-500 py-2 text-xl rounded-lg bg-black hover:cursor-pointer hover:text-green-300 hover:text-2xl transition-all translate-300`}
              >
                {p.visitName}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Projects;
