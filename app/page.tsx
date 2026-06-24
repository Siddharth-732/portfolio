import Prism from "../components/Prism";
import Typewriter from "../components/Typewriter";
import { Users, FolderGit2, Download } from "lucide-react";

export default function Page() {
  return (
    <div className="bg-neutral-950 min-h-screen text-white font-sans selection:bg-white/30">
      {/* Fixed Background */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <Prism
          animationType="rotate"
          height={2.5}
          baseWidth={2.5}
          glow={1}
          bloom={1}
          hoverStrength={2}
          transparent={true}
        />
      </div>

      {/* Hero Section */}
      <section className="relative z-10 min-h-screen w-full flex flex-col items-start overflow-hidden px-8 pt-12 sm:px-12 sm:pt-12 lg:px-32 lg:pt-28">
        {/* Hero Graphic overlaying the Prism Component */}
        <div className="absolute right-0 sm:right-10 lg:right-21 top-1/2 -translate-y-1/2 w-[80%] sm:w-[40%] lg:w-[35%] max-w-lg z-0 pointer-events-none opacity-60 md:opacity-100 mix-blend-screen drop-shadow-2xl">
          <img
            src="/hero1.png"
            alt="Hero Background Graphic"
            className="w-full h-auto object-contain"
          />
        </div>

        <div className="z-10 flex flex-col items-start max-w-5xl pointer-events-none">
          <div className="flex items-center gap-4 mb-2 sm:mb-0">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-light tracking-wide uppercase font-serif">
              Hi, I am
            </h2>
            <div className="h-[1px] w-16 sm:w-32 bg-white/50 mt-1"></div>
          </div>

          <h1 className="text-6xl sm:text-4xl md:text-[6rem] font-serif font-medium tracking-tight drop-shadow-2xl leading-none sm:leading-[0.9] -ml-1 sm:-ml-2 mb-6">
            Siddharth Pandey
          </h1>

          {/* code block */}
          <div className="mt-15 relative w-full max-w-lg mb-6 group">
            <div className="absolute -inset-1 bg-gradient-to-r from-yellow-600/30 to-yellow-400/30 rounded-xl blur-2xl opacity-75 group-hover:opacity-100 transition duration-500"></div>
            <aside className="relative w-full rounded-xl bg-black/80 backdrop-blur-md p-6 font-mono text-white border border-white/10 shadow-2xl pointer-events-auto">
              <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-4">
                <div className="flex space-x-2">
                  <div className="h-3 w-3 rounded-full bg-red-500"></div>
                  <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
                  <div className="h-3 w-3 rounded-full bg-green-500"></div>
                </div>
                <p className="text-xs text-neutral-400">bash</p>
              </div>
              <div className="text-sm sm:text-base">
                <p className="text-green-400">$ npm run intro</p>
                <p className="text-neutral-300 mt-1">+ siddharth@latest</p>
                <p className="text-white mt-2 leading-relaxed">
                  Open Source Contributor, Backend Developer
                  <br /> I love to takle new problems
                </p>
                <p className="text-green-400 mt-4">$ npm latest skills</p>
                <div className="flex mt-1">
                  <span className="text-white">
                    <Typewriter
                      texts={[
                        "Node.js, Next.js, React, Typescript",
                        "docker, aws, postman",
                      ]}
                    />
                  </span>
                  <span className="animate-pulse font-bold ml-1 text-white">
                    |
                  </span>
                </div>
              </div>
            </aside>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex items-center gap-3 text-xs sm:text-sm tracking-[0.2em] text-neutral-400 pointer-events-none">
          <div className="w-5 h-8 border border-neutral-400 rounded-full flex justify-center p-1">
            <div className="w-1 h-2 bg-neutral-400 rounded-full animate-bounce mt-1" />
          </div>
          SCROLL
        </div>
      </section>
      <div className="w-full h-[1px] bg-white/20 my-4"></div>
      {/* About Section */}
      <section className="relative z-10 min-h-screen w-full px-8 py-12 sm:px-24 lg:px-32 flex items-center">
        <div className="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8">
          {/* Left Column: Heading */}
          <div className="flex flex-col items-start justify-start">
            <h2 className="text-6xl sm:text-7xl md:text-8xl font-serif font-medium tracking-tight drop-shadow-2xl">
              About Me
            </h2>
            <div className="mt-10">
              <img src="./hackbyte.jpg" alt="" />
            </div>
          </div>

          {/* Right Column: Content */}
          <div className="flex flex-col space-y-8 text-neutral-300 text-lg sm:text-xl font-light leading-relaxed">
            <p className="mt-30">
              I am a student at IIITDM Jabalpur. I have a strong foundation in
              Computer Science fundamentals and am passionate about building
              software that makes a difference. I am a quick learner and am
              always looking to expand my knowledge and skills.
            </p>
            <p>
              My passion for crafting digital experiences began over five years
              ago. I'm a Backend Developer and Full Stack Engineer with hands-on
              experience building scalable, production grade web applications.
            </p>
            <div className="w-full h-[1px] bg-white/20 my-2"></div>
            <div>
              <a
                href="/resume.pdf"
                download="Siddharth_Pandey_Resume.pdf"
                className="flex items-center justify-center gap-2 px-8 py-3 sm:px-10 sm:py-4 bg-white/10 hover:bg-white/20 text-white border border-white/30 backdrop-blur-3xl font-semibold rounded-sm text-sm sm:text-base w-120 ml-5"
              >
                <Download className="w-5 h-5" />
                Download Resume
              </a>
            </div>
            <div className="grid grid-cols-2 gap-8 pt-4">
              <div className="flex flex-col space-y-3"></div>
              <div className="flex flex-col space-y-3"></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
