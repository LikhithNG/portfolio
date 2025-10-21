import { FaGithub } from "react-icons/fa6";
import { PROJECTS } from "../utils/constants";
import FadeContent from "./FadeContent";

const Projects = () => {
  return (
    <>
      <section id="projects" className="bg-bluetheme px-4 lg:px-20">
        <div className="container mx-auto  flex flex-col gap-10 py-18 lg:py-28">
          <hr className="text-zinc-400" />
          {/* Top */}
          <div className="w-full flex items-center justify-between mb-4">
            <h3 className="tracking-tight text-2xl lg:text-5xl">Projects</h3>

            <FadeContent
              blur={true}
              duration={1000}
              easing="ease-out"
              initialOpacity={0}
            >
              <a
                href="https://github.com/LikhithNG"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm lg:text-md text-zinc-200 bg-zinc-500/30 hover:bg-zinc-800/30 border-2 border-blue-600 rounded-full px-5 py-3 transition-all duration-300"
              >
                View on GitHub →
              </a>
            </FadeContent>
          </div>

          {/* Bottom */}
          <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Project Container */}
            {PROJECTS.map(({ title, link, content, img, tags }, index) => (
              <div
                key={index}
                className="flex flex-col border-4 border-zinc-300 rounded-3xl overflow-hidden"
              >
                {/* TOP */}
                <div className="relative h-[300px] bg-white overflow-hidden px-4 py-6">
                  <img
                    src={img}
                    alt={title}
                    className="absolute top-1/2 left-1/2 -translate-1/2 h-[350px] object-cover rounded-full"
                  />

                  <a
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="z-10 absolute top-6 right-6 w-14 lg:w-18 h-14 lg:h-18 text-sm lg;text-md text-white uppercase bg-black/40 hover:bg-black rounded-full flex items-center justify-center transition-colors duration-300"
                  >
                    <FaGithub size={45} />
                  </a>
                </div>
                {/* BOTTOM */}
                <div className="min-h-[400px] bg-gradient-to-tr from-zinc-700/40 via-blue-600/50 via-75% to-blue-900/40 p-6">
                  <div className="flex flex-col items-center gap-6">
                    <div className="w-full flex items-start justify-start">
                      <FadeContent
                        blur={true}
                        duration={1000}
                        easing="ease-out"
                        initialOpacity={0}
                        delay={200}
                      >
                        <p className="text-left font-semibold text-lg lg:text-2xl text-white bg-transparent border-2 rounded border-white px-3 py-1">
                          {title}
                        </p>
                      </FadeContent>
                    </div>

                    <ul className="list-decimal list-inside flex flex-col gap-3">
                      {content.map(({ line }, index) => (
                        <FadeContent
                          blur={true}
                          duration={1000}
                          easing="ease-out"
                          initialOpacity={0}
                          delay={500}
                        >
                          <li key={index}>{line}</li>
                        </FadeContent>
                      ))}
                    </ul>
                    <div className="w-full text-sm flex gap-1 flex-wrap">
                      <div className="w-full lg:w-3/5 flex items-center gap-2 flex-wrap">
                        {tags.map(({ name }, index) => (
                          <FadeContent
                            blur={true}
                            duration={1000}
                            easing="ease-out"
                            initialOpacity={0}
                            delay={1000}
                          >
                            <p
                              key={index}
                              className="text-sm text-black bg-white border-2 border-white rounded px-2 py-1"
                            >
                              {name}
                            </p>
                          </FadeContent>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Projects;
