import React, { useState } from "react";
import { projects } from "../Utils&Constants/constants";
import { Typewriter } from "react-simple-typewriter";

const Projects = () => {
  const [project, setProject] = useState(0);

  const handleProject = (id) => {
    setProject(id - 1);
  };

  return (
    <div id="projects" className="text-green-500 mt-6 mx-2 md:mx-6 py-6 md:py-10 bg-black bg-opacity-50 rounded-lg font-mono">
      <div className="flex justify-center text-3xl  md:text-4xl font-semibold">
        {"Projects"}
      </div>

      <div className="mx-4 md:mx-8 my-8 md:my-14">
        <div className="grid grid-cols-12">
          <video
            key={projects[project].id}
            autoPlay
            loop
            muted
            controls
            className="col-span-12 md:col-span-7 rounded-3xl "
          >
            <source src={projects[project].vids} type="video/mp4" />
          </video>

          <div className="col-span-12 md:col-span-5 md:ml-12 text-center md:text-left ">
            <div className="text-xl font-bold my-6 md:mb-10"> 
            <Typewriter
              key={projects[project].id}
              words= {[`< ${projects[project].name} />`]}
              loop={true}
              cursor
              cursorStyle="_"
              typeSpeed={30}
              deleteSpeed={30}
              delaySpeed={5000}
            />
            </div>
            <div className="my-6">{projects[project].description}</div>
            <a
              href={projects[project].link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block"
            >
              <button className="text-lg rounded-lg underline  hover:cursor-pointer hover:text-green-300 hover:text-xl transition-all translate-300">
                {`Visit ${projects[project].visitName}`}
              </button>
            </a>
          </div>
        </div>

        <div className="md:flex md:justify-center mt-12 text-center md:text-left">
          <div className="text-md md:text-xl my-auto mb-3 md:mb-0 ">Explore more projects: </div>
          {projects.map((p) => {
            return (
              <button
                key={p.id}
                onClick={() => {
                  handleProject(p.id);
                }}
                className={`mx-3 px-4 border border-green-500 my-1 md:py-2 w-48 md:w-auto text-md md:text-lg rounded-lg bg-black hover:cursor-pointer hover:text-green-300 hover:text-xl transition-all translate-300`}
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
