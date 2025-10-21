import FadeContent from "./FadeContent";
import { SKILLS } from "../utils/constants";

const Skills = () => {
  return (
    <>
      <section id="skills" className="bg-bluetheme px-4 lg:px-20">
        <div className="container mx-auto flex flex-col gap-10 py-18 lg:py-28">
          <h3 className="text-2xl lg:text-5xl mb-10">Skills & Tech Stack</h3>

          {/* Skills Container */}
          {SKILLS.map(({ logo, title, items }, index) => (
            <div key={index} className="flex flex-col lg:flex-row items-start">
              {/* Left*/}
              <div className="w-full h-full lg:w-1/2 flex flex-col items-start justify-start gap-3">
                <FadeContent
                  blur={true}
                  duration={500}
                  easing="ease-out"
                  initialOpacity={0}
                >
                  <div className="flex items-center justify-center">{logo}</div>
                </FadeContent>
                <FadeContent
                  blur={true}
                  duration={1000}
                  easing="ease-out"
                  initialOpacity={0}
                  delay={500}
                >
                  <div className="flex flex-col">
                    <p className="text-xl">{title}</p>
                  </div>
                </FadeContent>
              </div>
              {/* Right */}
              <div className="w-full lg:w-1/2 flex flex-wrap gap-4 border-t border-zinc-400 py-6">
                {items.map(({ imgSrc, name }, index) => (
                  <FadeContent
                    blur={true}
                    duration={1000}
                    easing="ease-out"
                    initialOpacity={0}
                    delay={1000}
                  >
                    <div
                      key={index}
                      className="bg-zinc-600/30 border-2 border-blue-400 rounded px-3 py-2 flex items-center gap-4"
                    >
                      {imgSrc ? (
                        <div className="bg-white p-2 rounded">
                          <img src={imgSrc} alt={name} className="w-6 h-6" />
                        </div>
                      ) : null}

                      <p className="text-sm lg:text-base text-white">{name}</p>
                    </div>
                  </FadeContent>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Skills;
