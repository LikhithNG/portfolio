import FadeContent from "./FadeContent";
import { EXPERIENCE } from "../utils/constants";

const Experience = () => {
  return (
    <>
      <section id="experience" className="bg-bluetheme px-4 lg:px-20">
        <div className="container mx-auto flex flex-col gap-10 py-18 lg:py-28">
          <h3 className="text-2xl lg:text-5xl">Experience</h3>
          <hr className="text-zinc-300" />

          {/* Experience Map */}
          {EXPERIENCE.map(
            (
              {
                designation,
                companyName,
                location,
                companyLogo,
                content,
                duration,
              },
              index
            ) => (
              <div key={index} className="flex flex-start flex-col lg:flex-row">
                {/* Left */}
                <div className="w-full lg:w-1/2 flex flex-col items-start gap-3 px-4 mb-6">
                  {/* Mini Left */}
                  <div className="w-full flex items-center justify-start gap-2 mb-4">
                    {/* Company Logo */}
                    <div className="h-10 bg-transparent flex items-center justify-center">
                      <FadeContent
                        blur={true}
                        duration={1000}
                        easing="ease-out"
                        initialOpacity={0}
                      >
                        <img
                          src={companyLogo}
                          alt={companyName}
                          className="w-10 h-10 rounded-full bg-white object-contain"
                        />
                      </FadeContent>
                    </div>
                    {/* Company Work */}
                    <div className="h-10 flex flex-col justify-center">
                      <FadeContent
                        blur={true}
                        duration={1000}
                        easing="ease-out"
                        initialOpacity={0}
                        delay={500}
                      >
                        <p className="text-lg leading-6">
                          {designation}
                          <br />
                          <span className="text-base text-zinc-300">
                            {companyName}
                          </span>
                        </p>
                      </FadeContent>
                    </div>
                  </div>

                  {/* Mini Right */}
                  <FadeContent
                    blur={true}
                    duration={1000}
                    easing="ease-out"
                    initialOpacity={0}
                    delay={1000}
                  >
                    <div className="bg-black/30 flex flex-col items-start rounded-2xl px-4 py-2">
                      <p className="font-semibold text-zinc-300">{duration}</p>
                      <p className="text-zinc-400">{location}</p>
                    </div>
                  </FadeContent>
                </div>
                {/* Right */}
                <ul className="list-disc list-inside w-full lg:w-1/2 border-2 border-blue-600 rounded-3xl flex flex-col gap-4 p-4">
                  {content.map(({ paragraph }, index) => (
                    <FadeContent
                      blur={true}
                      duration={1000}
                      easing="ease-out"
                      initialOpacity={0}
                      delay={1500}
                    >
                      <li key={index} className="text-sm lg:text-base ">
                        {paragraph}
                      </li>
                    </FadeContent>
                  ))}
                </ul>
              </div>
            )
          )}
        </div>
      </section>
    </>
  );
};

export default Experience;
