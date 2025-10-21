import FadeContent from "./FadeContent";
import { FiSend } from "react-icons/fi";

const ContactMe = () => {
  return (
    <section id="contact" className="bg-bluetheme px-4 lg:px-20">
      <div className="container mx-auto flex flex-col lg:flex-row gap-10 py-18 lg:py-28">
        {/* Left */}
        <div className="w-full lg:w-1/2 flex">
          <h3 className="text-2xl lg:text-5xl">Contact Me</h3>
        </div>

        {/* Right */}
        <div className="w-full lg:w-1/2 flex">
          <div className="w-full bg-blue-950 backdrop-blur-xl border-2 border-blue-500 rounded-2xl p-8">
            <FadeContent
              blur={true}
              duration={1000}
              easing="ease-out"
              initialOpacity={0}
            >
              <h2 className="font-semibold text-3xl md:text-4xl text-center text-white mb-6">
                Get in <span className="text-zinc-200">Touch</span>
              </h2>
            </FadeContent>
            <FadeContent
              blur={true}
              duration={1000}
              easing="ease-out"
              initialOpacity={0}
              delay={500}
            >
              <p className="text-center text-gray-400 mb-10">
                Have a question, a project idea, or just want to say hi? <br />{" "}
                Fill out the form below and let's connect!
              </p>
            </FadeContent>
            <FadeContent
              blur={true}
              duration={1000}
              easing="ease-out"
              initialOpacity={0}
              delay={1000}
            >
              <form
                action="https://formspree.io/f/YOUR_FORM_ID"
                method="POST"
                className="space-y-6"
              >
                {/* Name */}
                <div>
                  <label
                    htmlFor="name"
                    className="block text-gray-300 mb-2 text-sm"
                  >
                    Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    placeholder="Your Name"
                    className="w-full px-4 py-3 rounded-lg bg-zinc-900/70 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-zinc-500 transition"
                  />
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-gray-300 mb-2 text-sm"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    placeholder="you@example.com"
                    className="w-full px-4 py-3 rounded-lg bg-zinc-900/70 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-zinc-500 transition"
                  />
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-gray-300 mb-2 text-sm"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows="5"
                    required
                    placeholder="Write your message here..."
                    className="w-full px-4 py-3 rounded-lg bg-zinc-900/70 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-zinc-500 transition resize-none"
                  ></textarea>
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="cursor-pointer font-semibold w-full bg-gradient-to-br from-blue-700 via-blue-500 to-blue-700 rounded-lg flex items-center justify-center gap-2 py-3 hover:scale-[1.02] active:scale-95 transition transform"
                >
                  <FiSend size={18} />
                  Send Message
                </button>
              </form>
            </FadeContent>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactMe;
