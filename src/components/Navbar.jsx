import { useState, useEffect } from "react";
import { NAVBAR_LINKS } from "../utils/constants";
import { RiMenu3Line } from "react-icons/ri";

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);
  const [showTopBtn, setShowTopBtn] = useState(false);

  const toggleNav = () => setNavOpen((prev) => !prev);

  useEffect(() => {
    const handleScroll = () => {
      window.scrollY > 200 ? setShowTopBtn(true) : setShowTopBtn(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <>
      {/* Desktop Nav */}
      <nav className="z-50 fixed top-0 left-0 w-full h-16 lg:h-20 xl:h-22 bg-black/30 lg:bg-black/0 backdrop-blur-[10px] px-4 lg:px-20">
        <div className="w-full h-full flex items-center justify-between">
          <div className="h-full flex flex-col items-start justify-center leading-3">
            <h3 className="font-semibold text-lg">Likhith N G</h3>
            <p className="hidden lg:block text-md text-zinc-300">Boston, MA</p>
          </div>

          <ul className="hidden h-full text-sm lg:flex items-center gap-10">
            {NAVBAR_LINKS.map(({ name, link }, index) => (
              <li key={index}>
                <a
                  href={link}
                  className="hover:text-zinc-300 transition-colors duration-300"
                >
                  {name}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#contact"
                className="hidden lg:block bg-zinc-400/30 hover:bg-zinc-800/30 border-2 border-blue-600 rounded-full px-4 py-2 transition-colors duration-300"
              >
                Contact Me
              </a>
            </li>
          </ul>
          <button
            onClick={toggleNav}
            className="block lg:hidden cursor-pointer bg-zinc-400/30 border-2 border-zinc-500 rounded-full p-2"
          >
            <RiMenu3Line size={18} />
          </button>
        </div>
      </nav>
      {/* Mobile Nav */}
      <nav
        className={`z-50 fixed top-0 right-0 w-3/4 md:w-1/3 lg:w-1/4 h-full bg-zinc-700/70 backdrop-blur-[10px] flex flex-col items-center justify-center gap-10 ${
          navOpen ? "translate-x-0" : "translate-x-full"
        } transition-all duration-500 px-6 py-10`}
      >
        <ul className="w-full h-full text-lg uppercase flex flex-col items-center gap-4">
          <a href="#hero">
            <li>Home</li>
          </a>

          {NAVBAR_LINKS.map(({ name, link }, index) => (
            <li key={index} onClick={toggleNav}>
              <a href={link}>{name}</a>
            </li>
          ))}

          <a onClick={toggleNav} href="#contact">
            <li>Contact</li>
          </a>
        </ul>
        <button
          onClick={toggleNav}
          aria-label="Close Navigation"
          className="cursor-pointer border-2 border-zinc-500 px-3 py-1 rounded-full"
        >
          Close
        </button>
      </nav>
      {/* Go to Top Button */}
      {showTopBtn && (
        <button
          onClick={scrollToTop}
          className="cursor-pointer fixed bottom-6 right-4 z-50 w-10 h-10 text-stone-600 bg-gradient-to-br from-zinc-500 to-white border-2 border-zinc-400 rounded-full shadow-lg transition-all"
        >
          ↑
        </button>
      )}
    </>
  );
};

export default Navbar;
