import Prism from "../components/Prism";
import Typewriter from "../components/Typewriter";
import {
  Download,
  Code2,
  Blocks,
  Database,
  Wrench,
  ExternalLink,
  Mail,
} from "lucide-react";
import { TbBrandCSharp, TbBrandVscode } from "react-icons/tb";
import {
  SiGithub,
  SiCplusplus,
  SiPython,
  SiJavascript,
  SiPhp,
  SiNextdotjs,
  SiNodedotjs,
  SiExpress,
  SiGitlab,
  SiReact,
  SiTailwindcss,
  SiMysql,
  SiPostgresql,
  SiMongodb,
  SiFigma,
  SiGit,
  SiDocker,
  SiFirebase,
  SiPostman,
} from "react-icons/si";

const CustomSlackIcon = ({ className }: { className?: string }) => (
  <img src="/slack.svg" alt="Slack" className={className} />
);

const skillCategories = [
  {
    title: "Language Skills",
    categoryIcon: Code2,
    skills: [
      { name: "c#", Icon: TbBrandCSharp, color: "#178600" },
      { name: "c++", Icon: SiCplusplus, color: "#00599C" },
      { name: "python", Icon: SiPython, color: "#3776AB" },
      { name: "javascript", Icon: SiJavascript, color: "#F7DF1E" },
      { name: "php", Icon: SiPhp, color: "#777BB4" },
    ],
  },
  {
    title: "Frameworks & Libraries",
    categoryIcon: Blocks,
    skills: [
      { name: "next.js", Icon: SiNextdotjs, color: "#ffffff" },
      { name: "node.js", Icon: SiNodedotjs, color: "#339933" },
      { name: "express.js", Icon: SiExpress, color: "#ffffff" },
      { name: "react", Icon: SiReact, color: "#61DAFB" },
      { name: "tailwindcss", Icon: SiTailwindcss, color: "#38B2AC" },
    ],
  },
  {
    title: "Databases",
    categoryIcon: Database,
    skills: [
      { name: "mysql", Icon: SiMysql, color: "#4479A1" },
      { name: "postgresql", Icon: SiPostgresql, color: "#336791" },
      { name: "mongodb", Icon: SiMongodb, color: "#47A248" },
    ],
  },
  {
    title: "Tools & Others",
    categoryIcon: Wrench,
    skills: [
      { name: "vs code", Icon: TbBrandVscode, color: "#007ACC" },
      { name: "figma", Icon: SiFigma, color: "#F24E1E" },
      { name: "git", Icon: SiGit, color: "#F05032" },
      { name: "gitlab", Icon: SiGitlab, color: "#F05032" },
      { name: "docker", Icon: SiDocker, color: "#2496ED" },
      { name: "firebase", Icon: SiFirebase, color: "#FFCA28" },
      { name: "postman", Icon: SiPostman, color: "#FF6C37" },
      { name: "Slack", Icon: CustomSlackIcon, color: "" },
    ],
  },
];

const projects = [
  {
    title: "Bind",
    category: "3D WEB PLATFORM",
    description:
      "A Unity6 3D community platform designed for real-time cross-college collaboration.",
    tags: ["Unity6", "C#", "3D Modeling"],
    link: "#",
    github: "#",
    image: "/insticon.png",
  },
  {
    title: "Autonomous Drone",
    category: "HARDWARE / ROBOTICS",
    description:
      "A 6-month autonomous drone development project. Awarded Best Autonomous Drone at SAE India25.",
    tags: ["C++", "Hardware", "Robotics"],
    link: "#",
    github: "#",
    image: "/drone.png",
  },
  {
    title: "Smart Traffic Management",
    category: "AI & DATA ANALYSIS",
    description:
      "Built for Indian Railways to predict best routes and possibilities for trains (SIH25).",
    tags: ["Python", "Machine Learning", "Data Analysis"],
    link: "#",
    github: "#",
    image: "/traffic.png",
  },
];

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
      <div className="w-full h-[1px] bg-white/20 my-4"></div>

      {/* Skills Section */}
      <section className="relative z-10 min-h-screen w-full px-8 py-24 sm:px-24 lg:px-32 flex flex-col items-center max-w-7xl mx-auto mt-12 sm:mt-0">
        <div className="w-full flex flex-col items-start mb-24">
          <h2 className="text-6xl sm:text-7xl md:text-8xl font-serif font-medium tracking-tight drop-shadow-2xl">
            Skills
          </h2>
        </div>

        <div className="w-full flex flex-col space-y-24">
          {skillCategories.map((category, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center relative w-full"
            >
              {/* Giant Watermark Background */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[150px] sm:text-[250px] font-bold text-white/5 pointer-events-none select-none z-0"></div>

              {/* Category Header */}
              <div className="flex items-center justify-center w-full max-w-3xl mb-12 z-10">
                <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent to-white/20"></div>
                <div className="flex items-center gap-4 text-white px-6">
                  <div className="p-3 bg-[#e2e8f0]/10 rounded-full">
                    <category.categoryIcon className="w-6 h-6 sm:w-8 sm:h-8 text-neutral-300" />
                  </div>
                  <h3 className="text-3xl sm:text-4xl font-bold tracking-wide">
                    {category.title}
                  </h3>
                </div>
                <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent to-white/20"></div>
              </div>

              {/* Skills Grid */}
              <div className="flex flex-wrap justify-center gap-6 sm:gap-10 z-10">
                {category.skills.map((skill, sIdx) => (
                  <div
                    key={sIdx}
                    className="group flex flex-col items-center gap-3 w-20 sm:w-24 cursor-default"
                  >
                    <div className="flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 bg-[#161c28] rounded-xl shadow-lg group-hover:-translate-y-1 transition-all duration-300">
                      <skill.Icon
                        className="w-8 h-8 sm:w-10 sm:h-10 transition-transform duration-300 group-hover:scale-110"
                        style={{ color: skill.color }}
                      />
                    </div>
                    <span className="text-xs sm:text-sm text-neutral-400 font-medium tracking-wide lowercase group-hover:text-white transition-colors duration-300 text-center">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="w-full h-[1px] bg-white/20 my-4 max-w-7xl mx-auto"></div>

      {/* Experience Section */}
      <section className="relative z-10 min-h-screen w-full px-8 py-24 sm:px-24 lg:px-32 flex flex-col items-center max-w-7xl mx-auto mt-12 sm:mt-0">
        <div className="w-full flex flex-col items-start mb-24">
          <h2 className="text-6xl sm:text-7xl md:text-8xl font-serif font-medium tracking-tight drop-shadow-2xl">
            Experience
          </h2>
        </div>

        {/* Timeline */}
        <div className="w-full flex flex-col relative before:absolute before:inset-0 before:left-[80px] sm:before:left-[150px] before:h-full before:w-[1px] before:bg-white/10 pb-24">
          {/* Item 1 */}
          <div className="relative flex items-start group mb-12 sm:mb-16 last:mb-0">
            {/* Date */}
            <div className="w-[80px] sm:w-[150px] shrink-0 pt-2 text-right pr-6 sm:pr-10 text-[10px] sm:text-xs font-bold tracking-[0.2em] text-neutral-400 uppercase">
              2026 — FEB
            </div>

            {/* Dot */}
            <div className="absolute left-[80px] sm:left-[150px] -translate-x-1/2 mt-2 w-2.5 h-2.5 bg-white rounded-full ring-[6px] ring-[#0a0a0a]"></div>

            {/* Card Wrapper */}
            <div className="relative ml-6 sm:ml-12 w-full">
              <div className="absolute -inset-1 bg-gradient-to-r from-yellow-600/20 to-yellow-400/20 rounded-[24px] blur-xl opacity-75 group-hover:opacity-100 transition-opacity duration-500"></div>
              {/* Card */}
              <div className="relative w-full h-full bg-[#111] rounded-[24px] p-6 sm:p-10 border border-white/5 hover:border-white/10 transition-colors duration-300">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-6">
                  <div className="flex flex-col">
                    <h3 className="font-serif font-bold text-2xl sm:text-3xl text-white">
                      GSOC26 Contributor
                    </h3>
                    <div className="text-teal-400 mt-2 font-medium text-sm sm:text-base">
                      SugarLabs & Cunefied Digital Library
                    </div>
                  </div>
                </div>
                <ul className="text-neutral-400 text-sm sm:text-base leading-relaxed space-y-3 list-disc list-inside marker:text-teal-500/50">
                  <li>
                    Contributed to open source projects of organizations like
                    SugarLabs and Cunefied digital library initiative.
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Item 2 */}
          <div className="relative flex items-start group mb-12 sm:mb-16 last:mb-0">
            <div className="w-[80px] sm:w-[150px] shrink-0 pt-2 text-right pr-6 sm:pr-10 text-[10px] sm:text-xs font-bold tracking-[0.2em] text-neutral-400 uppercase">
              2025 — DEC
            </div>
            <div className="absolute left-[80px] sm:left-[150px] -translate-x-1/2 mt-2 w-2.5 h-2.5 bg-neutral-600 group-hover:bg-neutral-400 transition-colors duration-300 rounded-full ring-[6px] ring-[#0a0a0a]"></div>
            <div className="relative ml-6 sm:ml-12 w-full">
              <div className="absolute -inset-1 bg-gradient-to-r from-yellow-600/20 to-yellow-400/20 rounded-[24px] blur-xl opacity-75 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative w-full h-full bg-[#111] rounded-[24px] p-6 sm:p-10 border border-white/5 hover:border-white/10 transition-colors duration-300">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-6">
                  <div className="flex flex-col">
                    <h3 className="font-serif font-bold text-2xl sm:text-3xl text-white">
                      Core Committee Member
                    </h3>
                    <div className="text-teal-400 mt-2 font-medium text-sm sm:text-base">
                      Abhikalpan (IIITDM Techfest)
                    </div>
                  </div>
                </div>
                <ul className="text-neutral-400 text-sm sm:text-base leading-relaxed space-y-3 list-disc list-inside marker:text-teal-500/50">
                  <li>
                    Helped organize IIITDM's annual techfest, managing events
                    and coordinating with various teams to ensure a successful
                    execution.
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Item 3 */}
          <div className="relative flex items-start group mb-12 sm:mb-16 last:mb-0">
            <div className="w-[80px] sm:w-[150px] shrink-0 pt-2 text-right pr-6 sm:pr-10 text-[10px] sm:text-xs font-bold tracking-[0.2em] text-neutral-400 uppercase">
              2025 — SEP
            </div>
            <div className="absolute left-[80px] sm:left-[150px] -translate-x-1/2 mt-2 w-2.5 h-2.5 bg-neutral-600 group-hover:bg-neutral-400 transition-colors duration-300 rounded-full ring-[6px] ring-[#0a0a0a]"></div>
            <div className="relative ml-6 sm:ml-12 w-full">
              <div className="absolute -inset-1 bg-gradient-to-r from-yellow-600/20 to-yellow-400/20 rounded-[24px] blur-xl opacity-75 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative w-full h-full bg-[#111] rounded-[24px] p-6 sm:p-10 border border-white/5 hover:border-white/10 transition-colors duration-300">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-6">
                  <div className="flex flex-col">
                    <h3 className="font-serif font-bold text-2xl sm:text-3xl text-white">
                      Team Lead (SIH 2025)
                    </h3>
                    <div className="text-teal-400 mt-2 font-medium text-sm sm:text-base">
                      Smart India Hackathon
                    </div>
                  </div>
                </div>
                <ul className="text-neutral-400 text-sm sm:text-base leading-relaxed space-y-3 list-disc list-inside marker:text-teal-500/50">
                  <li>
                    Led a team to create a smart traffic management system for
                    Indian Railways.
                  </li>
                  <li>
                    Developed predictive algorithms to identify best routes and
                    possibilities for train scheduling.
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Item 4 */}
          <div className="relative flex items-start group mb-12 sm:mb-16 last:mb-0">
            <div className="w-[80px] sm:w-[150px] shrink-0 pt-2 text-right pr-6 sm:pr-10 text-[10px] sm:text-xs font-bold tracking-[0.2em] text-neutral-400 uppercase">
              2025 — MAY
            </div>
            <div className="absolute left-[80px] sm:left-[150px] -translate-x-1/2 mt-2 w-2.5 h-2.5 bg-neutral-600 group-hover:bg-neutral-400 transition-colors duration-300 rounded-full ring-[6px] ring-[#0a0a0a]"></div>
            <div className="relative ml-6 sm:ml-12 w-full">
              <div className="absolute -inset-1 bg-gradient-to-r from-yellow-600/20 to-yellow-400/20 rounded-[24px] blur-xl opacity-75 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative w-full h-full bg-[#111] rounded-[24px] p-6 sm:p-10 border border-white/5 hover:border-white/10 transition-colors duration-300">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-6">
                  <div className="flex flex-col">
                    <h3 className="font-serif font-bold text-2xl sm:text-3xl text-white">
                      Fullstack Intern
                    </h3>
                    <div className="text-teal-400 mt-2 font-medium text-sm sm:text-base">
                      Datavio
                    </div>
                  </div>
                </div>
                <ul className="text-neutral-400 text-sm sm:text-base leading-relaxed space-y-3 list-disc list-inside marker:text-teal-500/50">
                  <li>
                    Engineered an automated alert system to detect unauthorized
                    third-party sellers on Flipkart for client Boldfit.
                  </li>
                  <li>
                    Designed and delivered an end-to-end Purchase Order
                    lifecycle management dashboard for Bikaji Foods.
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Item 5 */}
          <div className="relative flex items-start group mb-12 sm:mb-16 last:mb-0">
            <div className="w-[80px] sm:w-[150px] shrink-0 pt-2 text-right pr-6 sm:pr-10 text-[10px] sm:text-xs font-bold tracking-[0.2em] text-neutral-400 uppercase">
              2025 — APR
            </div>
            <div className="absolute left-[80px] sm:left-[150px] -translate-x-1/2 mt-2 w-2.5 h-2.5 bg-neutral-600 group-hover:bg-neutral-400 transition-colors duration-300 rounded-full ring-[6px] ring-[#0a0a0a]"></div>
            <div className="relative ml-6 sm:ml-12 w-full">
              <div className="absolute -inset-1 bg-gradient-to-r from-yellow-600/20 to-yellow-400/20 rounded-[24px] blur-xl opacity-75 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative w-full h-full bg-[#111] rounded-[24px] p-6 sm:p-10 border border-white/5 hover:border-white/10 transition-colors duration-300">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-6">
                  <div className="flex flex-col">
                    <h3 className="font-serif font-bold text-2xl sm:text-3xl text-white">
                      HackByte 3.0 Winner
                    </h3>
                    <div className="text-teal-400 mt-2 font-medium text-sm sm:text-base">
                      MLH Hackathon
                    </div>
                  </div>
                </div>
                <ul className="text-neutral-400 text-sm sm:text-base leading-relaxed space-y-3 list-disc list-inside marker:text-teal-500/50">
                  <li>
                    Created InstiCon, a Unity6 3D community platform for
                    real-time cross-college collaboration.
                  </li>
                  <li>Awarded 1st Prize overall.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Item 6 */}
          <div className="relative flex items-start group mb-12 sm:mb-16 last:mb-0">
            <div className="w-[80px] sm:w-[150px] shrink-0 pt-2 text-right pr-6 sm:pr-10 text-[10px] sm:text-xs font-bold tracking-[0.2em] text-neutral-400 uppercase">
              2024 — NOV
            </div>
            <div className="absolute left-[80px] sm:left-[150px] -translate-x-1/2 mt-2 w-2.5 h-2.5 bg-neutral-600 group-hover:bg-neutral-400 transition-colors duration-300 rounded-full ring-[6px] ring-[#0a0a0a]"></div>
            <div className="relative ml-6 sm:ml-12 w-full">
              <div className="absolute -inset-1 bg-gradient-to-r from-yellow-600/20 to-yellow-400/20 rounded-[24px] blur-xl opacity-75 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative w-full h-full bg-[#111] rounded-[24px] p-6 sm:p-10 border border-white/5 hover:border-white/10 transition-colors duration-300">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-6">
                  <div className="flex flex-col">
                    <h3 className="font-serif font-bold text-2xl sm:text-3xl text-white">
                      Drone Development Project
                    </h3>
                    <div className="text-teal-400 mt-2 font-medium text-sm sm:text-base">
                      SAE India25
                    </div>
                  </div>
                </div>
                <ul className="text-neutral-400 text-sm sm:text-base leading-relaxed space-y-3 list-disc list-inside marker:text-teal-500/50">
                  <li>
                    Worked on a 6-month autonomous drone development project.
                  </li>
                  <li>Received the Best Autonomous Drone award.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Item 7 */}
          <div className="relative flex items-start group mb-12 sm:mb-16 last:mb-0">
            <div className="w-[80px] sm:w-[150px] shrink-0 pt-2 text-right pr-6 sm:pr-10 text-[10px] sm:text-xs font-bold tracking-[0.2em] text-neutral-400 uppercase">
              2024 — MAR
            </div>
            <div className="absolute left-[80px] sm:left-[150px] -translate-x-1/2 mt-2 w-2.5 h-2.5 bg-neutral-600 group-hover:bg-neutral-400 transition-colors duration-300 rounded-full ring-[6px] ring-[#0a0a0a]"></div>
            <div className="relative ml-6 sm:ml-12 w-full">
              <div className="absolute -inset-1 bg-gradient-to-r from-yellow-600/20 to-yellow-400/20 rounded-[24px] blur-xl opacity-75 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative w-full h-full bg-[#111] rounded-[24px] p-6 sm:p-10 border border-white/5 hover:border-white/10 transition-colors duration-300">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-6">
                  <div className="flex flex-col">
                    <h3 className="font-serif font-bold text-2xl sm:text-3xl text-white">
                      2nd Runner-up
                    </h3>
                    <div className="text-teal-400 mt-2 font-medium text-sm sm:text-base">
                      Cognizant IIT Roorkee Hackathon
                    </div>
                  </div>
                </div>
                <ul className="text-neutral-400 text-sm sm:text-base leading-relaxed space-y-3 list-disc list-inside marker:text-teal-500/50">
                  <li>
                    Competed against top teams in a prestigious hackathon at IIT
                    Roorkee and secured 3rd place overall.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="w-full h-[1px] bg-white/20 my-4 max-w-7xl mx-auto"></div>

      {/* Projects Section */}
      <section className="relative z-10 w-full flex flex-col items-center max-w-[1400px] mx-auto pt-24 sm:pt-32 px-4 sm:px-8">
        <div className="w-full flex flex-col items-start mb-24 px-4 sm:px-16">
          <h2 className="text-6xl sm:text-7xl md:text-8xl font-serif font-medium tracking-tight drop-shadow-2xl">
            Projects
          </h2>
        </div>

        <div className="flex flex-col space-y-8 w-full mt-12">
          {projects.map((project, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <div
                key={idx}
                className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 w-full items-center bg-white/[0.03] border border-white/5 p-6 sm:p-10 lg:p-12"
              >
                {/* Image Container */}
                <div
                  className={`relative w-full h-64 sm:h-96 min-h-[300px] overflow-hidden border border-white/5 group bg-[#0a0f1a] shadow-2xl ${isEven ? "lg:order-1" : "lg:order-2"}`}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>

                {/* Content Container */}
                <div
                  className={`flex flex-col justify-center ${isEven ? "lg:order-2" : "lg:order-1"}`}
                >
                  {/* Tags */}
                  <div className="flex flex-wrap gap-3 mb-6">
                    {project.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="text-[10px] sm:text-xs font-bold text-neutral-400 bg-white/5 border border-white/10 px-4 py-1.5 rounded-full uppercase tracking-widest"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Title */}
                  <h3 className="font-serif italic text-5xl sm:text-6xl text-white mb-6">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-neutral-400 text-sm sm:text-base leading-relaxed mb-10 max-w-lg">
                    {project.description}
                  </p>

                  {/* Links */}
                  <div className="flex flex-wrap gap-8">
                    <a
                      href={project.github}
                      className="flex items-center gap-2 text-white hover:text-white/70 font-bold text-sm tracking-wider transition-colors"
                    >
                      <span className="text-lg">{"< >"}</span>
                      <span>Github ➔</span>
                    </a>
                    <a
                      href={project.link}
                      className="flex items-center gap-2 text-white hover:text-white/70 font-bold text-sm tracking-wider transition-colors"
                    >
                      <span className="text-lg">🚀</span>
                      <span>Live Demo ➔</span>
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <div className="w-full h-[1px] bg-white/20 my-4 max-w-7xl mx-auto"></div>

      {/* Contact Section */}
      <section className="relative z-10 w-full flex flex-col items-center max-w-[1400px] mx-auto py-24 sm:py-32 px-4 sm:px-8">
        <div className="w-full flex flex-col items-center mb-16 px-4">
          <h2 className="text-6xl sm:text-7xl md:text-8xl font-serif font-medium tracking-tight drop-shadow-2xl text-center">
            Let's Talk
          </h2>
          <p className="text-neutral-400 mt-6 text-center max-w-xl text-lg sm:text-xl">
            Interested in building something amazing together? Drop me a message
            and I'll get back to you as soon as possible.
          </p>
        </div>

        <div className="w-full max-w-3xl bg-white/[0.03] border border-white/5 p-8 sm:p-12">
          <form className="flex flex-col space-y-8 w-full">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div className="flex flex-col space-y-2">
                <label
                  htmlFor="name"
                  className="text-sm font-bold tracking-widest uppercase text-neutral-400"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="John Doe"
                  className="bg-transparent border-b border-white/20 focus:border-white text-white py-3 px-2 outline-none transition-colors placeholder:text-neutral-600"
                />
              </div>
              <div className="flex flex-col space-y-2">
                <label
                  htmlFor="email"
                  className="text-sm font-bold tracking-widest uppercase text-neutral-400"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="john@example.com"
                  className="bg-transparent border-b border-white/20 focus:border-white text-white py-3 px-2 outline-none transition-colors placeholder:text-neutral-600"
                />
              </div>
            </div>

            <div className="flex flex-col space-y-2">
              <label
                htmlFor="message"
                className="text-sm font-bold tracking-widest uppercase text-neutral-400"
              >
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                placeholder="Tell me about your project..."
                className="bg-transparent border-b border-white/20 focus:border-white text-white py-3 px-2 outline-none transition-colors resize-none placeholder:text-neutral-600"
              ></textarea>
            </div>

            <button
              type="button"
              className="flex items-center justify-center gap-3 w-full sm:w-auto self-end bg-white text-black px-10 py-4 font-bold uppercase tracking-widest hover:bg-neutral-200 transition-colors mt-4"
            >
              <Mail className="w-5 h-5" />
              <span>Send Message</span>
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
