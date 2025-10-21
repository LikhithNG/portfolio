import FadeContent from "./FadeContent";

import { FaLinkedinIn } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import { MdOutlineFileDownload, MdOutlineMailOutline } from "react-icons/md";
import ResumeLNG from "../assets/resume/resume.pdf";
import { TAGS } from "../utils/constants";
import { SUMMARY } from "../utils/constants";
import { SOCIALS } from "../utils/constants";

const Hero = () => {
  return (
    <>
      <section
        id="hero"
        className="bg-gradient-to-bl from-zinc-950/30 via-zinc-700/30 via-40% to-zinc-950 px-4 lg:px-20"
      >
        <div className="container mx-auto min-h-screen lg:h-screen flex flex-col lg:flex-row py-10 pt-28">
          {/* Left - Headline & Tags */}
          <div className="w-auto lg:w-3/5 h-full border-b-0 lg:border-b border-zinc-400 pb-10">
            <div className="h-full flex flex-col justify-between mb-4">
              <div className="">
                <div className="flex items-center gap-3 mb-4">
                  <FadeContent
                    blur={true}
                    duration={1000}
                    easing="ease-out"
                    initialOpacity={0}
                  >
                    <p className="font-medium text-md text-zinc-300">
                      Hey there! I am
                    </p>
                  </FadeContent>
                </div>

                <FadeContent
                  blur={true}
                  duration={1500}
                  easing="ease-out"
                  initialOpacity={0}
                  delay={500}
                >
                  <h3 className="tracking-tight font-medium text-xl lg:text-4xl text-balance leading mb-4">
                    <span className="text-3xl lg:text-6xl">
                      Likhith Nagaralu Gurumurthy
                    </span>
                    <br />
                    <span className="text-zinc-300 lg:text-white">
                      Boston, MA
                    </span>
                  </h3>
                </FadeContent>

                <FadeContent
                  blur={true}
                  duration={1000}
                  easing="ease-out"
                  initialOpacity={0}
                  delay={1000}
                >
                  <a
                    href={ResumeLNG}
                    download="Likhith-Resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button className="cursor-pointer text-white text-sm lg:text-xl uppercase hover:text-zinc-600 hover:bg-white border-2 rounded flex items-center gap-2 px-4 py-2 transition-colors duration-300">
                      Resume <MdOutlineFileDownload />
                    </button>
                  </a>
                </FadeContent>
                <FadeContent
                  blur={true}
                  duration={1000}
                  easing="ease-out"
                  initialOpacity={0}
                  delay={1500}
                >
                  {SOCIALS.map(({ linkedin, github }, index) => (
                    <div key={index} className="flex items-center gap-4 my-4">
                      {/* LinkedIn */}
                      <a
                        href={linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white bg-black/30 border-2 border-white rounded-full flex items-center justify-center p-2 hover:scale-90 transition-all duration-200"
                      >
                        <FaLinkedinIn size={25} />
                      </a>
                      {/* GitHub */}
                      <a
                        href={github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white bg-black/30 border-2 border-white rounded-full flex items-center justify-center p-2 hover:scale-90 transition-all duration-200"
                      >
                        <FaGithub size={25} />
                      </a>
                    </div>
                  ))}
                </FadeContent>
              </div>
              <div className="w-full lg:w-3/4 flex items-center gap-2 flex-wrap">
                {TAGS.map(({ name }, index) => (
                  <FadeContent
                    blur={true}
                    duration={1000}
                    easing="ease-out"
                    initialOpacity={0}
                    delay={2000}
                  >
                    <p
                      key={index}
                      className="text-sm text-white bg-zinc-500/30 border-2 border-zinc-500 rounded-full px-4 py-2"
                    >
                      {name}
                    </p>
                  </FadeContent>
                ))}
              </div>
            </div>
          </div>
          {/* Right - Info */}
          <div className="w-auto lg:w-2/5 h-full border-b border-zinc-400 flex items-end pb-10">
            <div className="">
              {SUMMARY.map(({ content }, index) => (
                <FadeContent
                  blur={true}
                  duration={1000}
                  easing="ease-out"
                  initialOpacity={0}
                  delay={2200}
                >
                  <p
                    key={index}
                    className="text-sm lg:text-xl text-zinc-300 lg:text-white text-balance tracking-tight"
                  >
                    {content}
                  </p>
                </FadeContent>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
