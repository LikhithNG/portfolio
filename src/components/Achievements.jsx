import FadeContent from "./FadeContent";
import { ACHIEVEMENTS } from "../utils/constants";
import { FaAward } from "react-icons/fa6";

const Achievements = () => {
  return (
    <>
      <section id="achievements" className="bg-bluetheme px-4 lg:px-20">
        <div className="container mx-auto flex flex-col gap-10 py-18 lg:py-28">
          <h3 className="text-2xl lg:text-5xl lg:mb-10">Achievements</h3>

          {/* Skills Container */}
          {ACHIEVEMENTS.map(({ title, subtitle, desc, year }, index) => (
            <div
              key={index}
              className="flex flex-col lg:flex-row items-start border-t border-zinc-500 py-4"
            >
              {/* Left*/}
              <div className="w-full h-full lg:w-1/2 flex items-center justify-start gap-3">
                <FadeContent
                  blur={true}
                  duration={1000}
                  easing="ease-out"
                  initialOpacity={0}
                >
                  <div className="hidden lg:flex items-center justify-center">
                    <FaAward size={25} />
                  </div>
                </FadeContent>
                <FadeContent
                  blur={true}
                  duration={1000}
                  easing="ease-out"
                  initialOpacity={0}
                  delay={500}
                >
                  <div className="flex flex-col mb-4 lg:mb-0">
                    <p className="font-semibold text-base lg:text-xl">{title}</p>
                    <p className="text-sm lg:text-base text-zinc-300">
                      {subtitle}
                    </p>
                    <p className="text-sm lg:text-base text-white">{year}</p>
                  </div>
                </FadeContent>
              </div>
              {/* Right */}
              <div className="w-full lg:w-1/2">
                <FadeContent
                  blur={true}
                  duration={1000}
                  easing="ease-out"
                  initialOpacity={0}
                  delay={1000}
                >
                  <div className="text-sm lg:text-base text-zinc-200 px-3 py-2 flex items-center gap-4">
                    {desc}
                  </div>
                </FadeContent>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Achievements;
