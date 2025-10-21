import { FaLinkedin, FaSquareGithub } from "react-icons/fa6";
import { MdOutlineFileDownload } from "react-icons/md";
import { FaInstagram } from "react-icons/fa6";
import CF from "../assets/images/cf.svg";
import ResumeLNG from "../assets/resume/resume.pdf";
import { SOCIALS } from "../utils/constants";

const Footer = () => {
  return (
    <>
      <footer
        id="footer"
        className="text-white tracking-tight bg-gradient-to-b from-blue-900 to-zinc-950 px-4 pt-16 pb-4 lg:px-20"
      >
        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-4 gap-10 mb-10">
          {/* Grid 1 */}
          <div className="space-y-4">
            <h3 className="text-3xl">Likhith N G</h3>
            <p className="text-balance text-zinc-400">
              Boston, MA <br /> United States
            </p>
            <a
              href={ResumeLNG}
              download="Likhith-Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="cursor-pointer text-white hover:text-zinc-600 hover:bg-white border-2 rounded flex items-center gap-2 px-4 py-2 transition-colors duration-300">
                Resume <MdOutlineFileDownload />
              </button>
            </a>
          </div>
          {/* Grid 2 */}
          <div className="">
            <h3 className="text-xl mb-4">Navigation Links</h3>
            <ul className="text-zinc-400 space-y-3">
              <li>
                <a
                  href="#hero"
                  className="hover:text-white transition-colors duration-300"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="hover:text-white transition-colors duration-300"
                >
                  About Me
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="hover:text-white transition-colors duration-300"
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="#experience"
                  className="hover:text-white transition-colors duration-300"
                >
                  Experience
                </a>
              </li>
              <li>
                <a
                  href="#skills"
                  className="hover:text-white transition-colors duration-300"
                >
                  Skills
                </a>
              </li>
              <li>
                <a
                  href="#achievements"
                  className="hover:text-white transition-colors duration-300"
                >
                  Achievements
                </a>
              </li>
            </ul>
          </div>
          {/* Grid 3 */}
          {SOCIALS.map(({ linkedin, github, instagram }, index) => (
            <div key={index} className="">
              <h3 className="text-xl mb-4">My Socials</h3>
              <ul className="text-zinc-400 space-y-3">
                <li className="flex items-center gap-2">
                  <FaLinkedin />
                  <a
                    href={linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors duration-300"
                  >
                    Linked In
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <FaSquareGithub />
                  <a
                    href={github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors duration-300"
                  >
                    GitHub
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <FaInstagram />
                  <a
                    href={instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors duration-300"
                  >
                    Instagram
                  </a>
                </li>
              </ul>
            </div>
          ))}
          {/* Grid 4 */}
          <div className="">
            <h3 className="text-xl mb-4">Send me an email</h3>
            <ul className="text-zinc-400 space-y-3 mb-6">
              <li>
                <a
                  href="mailto:nagaralugurumurthy.l@northeastern.edu"
                  aria-label="Send me an email"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors duration-300"
                >
                  nagaralugurumurthy.l@northeastern.edu
                </a>
              </li>
            </ul>
            <h3 className="text-xl mb-4">Contact Me</h3>
            <ul className="text-zinc-400 space-y-3">
              <li>
                <a
                  href="tel:8573519401"
                  aria-label="Call me at (857) 351-9401"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors duration-300"
                >
                  (857) 351-9401
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="w-full border-t border-zinc-400 flex flex-col md:flex-row items-center justify-between gap-2 py-4">
          <p className="bg-clip-text text-transparent bg-gradient-to-br from-zinc-400 via-zinc-300 to-zinc-500">
            &copy; 2025 Likhith N G. All Rights Reserved.
          </p>

          <img
            src={CF}
            alt="CF"
            className="pointer-events-none w-6 h-6 rotate-90 skew-x-12"
          />
        </div>
      </footer>
    </>
  );
};

export default Footer;
