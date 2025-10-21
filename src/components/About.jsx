import FadeContent from "./FadeContent";
import { FaLinkedin } from "react-icons/fa6";
import { ABOUT } from "../utils/constants";
import Likhith from "../assets/images/Likhith.jpg";

const About = () => {
  return (
    <section id="about" className="bg-bluetheme px-4 lg:px-20">
      <div className="container mx-auto  flex flex-col lg:flex-row py-18 lg:py-28">
        {/* Left */}
        <div className="w-full lg:w-1/2 flex flex-col items-center justify-center lg:justify-normal gap-10 mb-10">
          <h3 className="w-full tracking-tight text-2xl lg:text-5xl mb-4">
            About Me
          </h3>
          <FadeContent
            blur={true}
            duration={1000}
            easing="ease-out"
            initialOpacity={0}
            delay={1000}
          >
            <img
              src={Likhith}
              alt="Likhith"
              className="w-[200px] lg:w-[300px] h-[200px] lg:h-[300px] object-cover border-4 border-white rounded-full"
            />
          </FadeContent>
        </div>

        {/* Right */}
        {ABOUT.map(({ content, link }, index) => (
          <div
            key={index}
            className="w-full lg:w-1/2 text-sm lg:text-lg text-zinc-300 lg:text-white text-balance flex flex-col gap-8"
          >
            {content.map(({ paragraph }, index) => (
              <FadeContent
                blur={true}
                duration={1000}
                easing="ease-out"
                initialOpacity={0}
                delay={1500}
              >
                <p key={index}>{paragraph}</p>
              </FadeContent>
            ))}

            <div className="flex items-center gap-2">
              <FadeContent
                blur={true}
                duration={1000}
                easing="ease-out"
                initialOpacity={0}
                delay={2200}
              >
                <a
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-md text-zinc-200 bg-zinc-700/30 hover:bg-black/30 border-2 border-blue-600 rounded-full flex items-center justify-center gap-2 px-4 py-3 transition-all duration-300"
                >
                  <FaLinkedin size={25} />

                  <p>Explore LinkedIn →</p>
                </a>
              </FadeContent>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default About;
