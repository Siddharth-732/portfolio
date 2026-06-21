import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section className="py-24 md:py-40 min-h-[80vh] flex items-center border-b border-white/10">
        <div className="max-w-6xl mx-auto px-8 w-full grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="animate-fade-in opacity-0" style={{ animationFillMode: 'forwards' }}>
            <h2 className="text-[#3b82f6] text-lg tracking-widest uppercase mb-4 font-inter font-medium">Hello, I am</h2>
            <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-4 font-playfair text-[#f5f5f5]">Siddharth Pandey</h1>
            <p className="text-2xl text-[#a3a3a3] mb-8 font-inter">
              Aspiring Backend Developer and Full Stack Engineer
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#contact" className="inline-block px-8 py-3 bg-[#3b82f6] text-white rounded-full font-medium transition-all hover:shadow-[0_0_15px_rgba(59,130,246,0.4)] hover:-translate-y-1 font-inter">
                Contact Me
              </a>
              <a href="#projects" className="inline-block px-8 py-3 bg-white/5 border border-[#262626] text-[#a3a3a3] rounded-full font-medium transition-all hover:text-white hover:border-[#3b82f6] hover:-translate-y-1 font-inter">
                View Work
              </a>
            </div>
          </div>
          <div className="animate-fade-in opacity-0 flex justify-center" style={{ animationDelay: '300ms', animationFillMode: 'forwards' }}>
            <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-[#262626]">
              {/* Profile Image PlaceHolder */}
              <Image src="/profile.jpg" alt="Siddharth Pandey" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 border-b border-white/10 bg-[#141414]">
        <div className="max-w-6xl mx-auto px-8">
          <h2 className="text-4xl text-center mb-12 relative after:content-[''] after:absolute after:-bottom-3 after:left-1/2 after:-translate-x-1/2 after:w-16 after:h-1 after:bg-[#3b82f6] after:rounded-sm after:shadow-[0_0_10px_rgba(59,130,246,0.4)] font-playfair text-[#f5f5f5]">About Me</h2>
          <div className="max-w-3xl mx-auto text-center text-lg text-[#a3a3a3] space-y-4 font-inter">
            <p>
              I am currently pursuing my B.Tech at Indian Institute of Information Technology (IIIT) Jabalpur. 
              As an aspiring Backend Developer and Full Stack Engineer, I have hands-on experience building scalable, production-grade web applications.
            </p>
            <p>
              I am an open-source contributor via GSoC'26 and an active hackathon participant with a strong expertise in agile development, rapid prototyping, and cross-functional collaboration.
            </p>
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section id="tech-stack" className="py-24 border-b border-white/10">
        <div className="max-w-6xl mx-auto px-8">
          <h2 className="text-4xl text-center mb-12 relative after:content-[''] after:absolute after:-bottom-3 after:left-1/2 after:-translate-x-1/2 after:w-16 after:h-1 after:bg-[#3b82f6] after:rounded-sm after:shadow-[0_0_10px_rgba(59,130,246,0.4)] font-playfair text-[#f5f5f5]">My Tech Stack</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-[#141414] border border-[#262626] rounded-xl p-8 transition-all duration-300 hover:-translate-y-2 hover:border-[#3b82f6] hover:bg-[#1f1f1f] hover:shadow-[0_10px_30px_rgba(0,0,0,0.5),0_0_15px_rgba(59,130,246,0.4)] group">
              <h3 className="text-2xl mb-4 font-playfair text-[#f5f5f5]">Languages & Core</h3>
              <div className="flex flex-wrap gap-2">
                {['Python', 'JavaScript (ES6+)', 'TypeScript', 'C++', 'C#', 'SQL'].map(skill => (
                  <span key={skill} className="inline-block px-4 py-2 bg-white/5 border border-[#262626] rounded-full text-sm text-[#a3a3a3] transition-all duration-300 group-hover:hover:text-white group-hover:hover:border-[#3b82f6] group-hover:hover:bg-[#3b82f6]/10 font-inter">{skill}</span>
                ))}
              </div>
            </div>
            <div className="bg-[#141414] border border-[#262626] rounded-xl p-8 transition-all duration-300 hover:-translate-y-2 hover:border-[#3b82f6] hover:bg-[#1f1f1f] hover:shadow-[0_10px_30px_rgba(0,0,0,0.5),0_0_15px_rgba(59,130,246,0.4)] group">
              <h3 className="text-2xl mb-4 font-playfair text-[#f5f5f5]">Frontend & Design</h3>
              <div className="flex flex-wrap gap-2">
                {['React.js', 'Next.js', 'Tailwind CSS', 'Zustand', 'HTML5/CSS3', 'Responsive Design'].map(skill => (
                  <span key={skill} className="inline-block px-4 py-2 bg-white/5 border border-[#262626] rounded-full text-sm text-[#a3a3a3] transition-all duration-300 group-hover:hover:text-white group-hover:hover:border-[#3b82f6] group-hover:hover:bg-[#3b82f6]/10 font-inter">{skill}</span>
                ))}
              </div>
            </div>
            <div className="bg-[#141414] border border-[#262626] rounded-xl p-8 transition-all duration-300 hover:-translate-y-2 hover:border-[#3b82f6] hover:bg-[#1f1f1f] hover:shadow-[0_10px_30px_rgba(0,0,0,0.5),0_0_15px_rgba(59,130,246,0.4)] group">
              <h3 className="text-2xl mb-4 font-playfair text-[#f5f5f5]">Backend & DevOps</h3>
              <div className="flex flex-wrap gap-2">
                {['Node.js', 'Express.js', 'RESTful APIs', 'MongoDB', 'MySQL', 'Firebase', 'Git/GitHub'].map(skill => (
                  <span key={skill} className="inline-block px-4 py-2 bg-white/5 border border-[#262626] rounded-full text-sm text-[#a3a3a3] transition-all duration-300 group-hover:hover:text-white group-hover:hover:border-[#3b82f6] group-hover:hover:bg-[#3b82f6]/10 font-inter">{skill}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 border-b border-white/10 bg-[#141414]">
        <div className="max-w-6xl mx-auto px-8">
          <h2 className="text-4xl text-center mb-12 relative after:content-[''] after:absolute after:-bottom-3 after:left-1/2 after:-translate-x-1/2 after:w-16 after:h-1 after:bg-[#3b82f6] after:rounded-sm after:shadow-[0_0_10px_rgba(59,130,246,0.4)] font-playfair text-[#f5f5f5]">Forged Chronicles (Projects)</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-[#0a0a0a] border border-[#262626] rounded-xl p-8 transition-all duration-300 hover:-translate-y-2 hover:border-[#3b82f6] hover:shadow-[0_10px_30px_rgba(0,0,0,0.5),0_0_15px_rgba(59,130,246,0.4)]">
              <h3 className="text-2xl mb-2 font-playfair text-[#3b82f6]">Pulse Chat</h3>
              <p className="text-sm text-[#a3a3a3] mb-4 font-inter">Next.js, Node.js, Express, MongoDB, Socket.io</p>
              <p className="text-[#f5f5f5] font-inter">
                A full-stack real-time chat application with WebSockets for instant messaging. Secured with Bcrypt and HTTP-Only JWT storage.
              </p>
            </div>
            <div className="bg-[#0a0a0a] border border-[#262626] rounded-xl p-8 transition-all duration-300 hover:-translate-y-2 hover:border-[#3b82f6] hover:shadow-[0_10px_30px_rgba(0,0,0,0.5),0_0_15px_rgba(59,130,246,0.4)]">
              <h3 className="text-2xl mb-2 font-playfair text-[#3b82f6]">BiteSpy</h3>
              <p className="text-sm text-[#a3a3a3] mb-4 font-inter">Next.js 16, TypeScript, Firebase, AI Integration</p>
              <p className="text-[#f5f5f5] font-inter">
                A full-stack AI-powered platform for detecting misleading food labels using Firebase Auth and an MCP server with multiple AI tools.
              </p>
            </div>
            <div className="bg-[#0a0a0a] border border-[#262626] rounded-xl p-8 transition-all duration-300 hover:-translate-y-2 hover:border-[#3b82f6] hover:shadow-[0_10px_30px_rgba(0,0,0,0.5),0_0_15px_rgba(59,130,246,0.4)]">
              <h3 className="text-2xl mb-2 font-playfair text-[#3b82f6]">InstiCon</h3>
              <p className="text-sm text-[#a3a3a3] mb-4 font-inter">C#, Unity 6, Google Gemini API</p>
              <p className="text-[#f5f5f5] font-inter">
                A virtual community platform for real-time cross-college collaboration. Engineered an AI-driven NPC using Gemini API. Won 1st place at HackByte 3.0.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Coding Background & Achievements Section */}
      <section id="achievements" className="py-24 border-b border-white/10">
        <div className="max-w-6xl mx-auto px-8">
          <h2 className="text-4xl text-center mb-12 relative after:content-[''] after:absolute after:-bottom-3 after:left-1/2 after:-translate-x-1/2 after:w-16 after:h-1 after:bg-[#3b82f6] after:rounded-sm after:shadow-[0_0_10px_rgba(59,130,246,0.4)] font-playfair text-[#f5f5f5]">Achievements & Background</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="bg-[#141414] border border-[#262626] rounded-xl p-8">
              <h3 className="text-2xl mb-4 font-playfair text-[#f5f5f5]">Coding Background</h3>
              <p className="mb-4 font-inter text-[#f5f5f5]"><strong className="text-white">Competitive Programming:</strong> Solved 600+ problems across LeetCode, Codeforces, and CodeChef.</p>
              <p className="mb-6 font-inter text-[#a3a3a3]">Demonstrated strong command of data structures, algorithms, and system design principles.</p>
              <hr className="border-[#262626] my-6" />
              <h3 className="text-2xl mb-4 font-playfair text-[#f5f5f5]">Key Achievements</h3>
              <ul className="space-y-4 font-inter text-[#f5f5f5]">
                <li className="flex gap-3"><span>🏆</span> <span><strong>Winner MLH HackByte 3.0:</strong> 1st place among 200+ participants.</span></li>
                <li className="flex gap-3"><span>🏅</span> <span><strong>GSoC'26 Contributor:</strong> Sugar Labs & Cuneiform Digital Library Initiative.</span></li>
                <li className="flex gap-3"><span>🚀</span> <span><strong>Core Committee:</strong> Aero Fabrication Club IIIT Jabalpur.</span></li>
              </ul>
            </div>
            <div className="relative w-full h-80 md:h-full min-h-[400px] rounded-xl overflow-hidden border border-[#262626] shadow-2xl">
              {/* Hackathon Image PlaceHolder */}
              <Image src="/hackathon.jpg" alt="MLH HackByte 3.0 Winner" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section id="timeline" className="py-24 border-b border-white/10 bg-[#141414]">
        <div className="max-w-6xl mx-auto px-8">
          <h2 className="text-4xl text-center mb-12 relative after:content-[''] after:absolute after:-bottom-3 after:left-1/2 after:-translate-x-1/2 after:w-16 after:h-1 after:bg-[#3b82f6] after:rounded-sm after:shadow-[0_0_10px_rgba(59,130,246,0.4)] font-playfair text-[#f5f5f5]">My Timeline</h2>
          <div className="max-w-3xl mx-auto space-y-8">
            <div className="bg-[#0a0a0a] border border-[#262626] border-l-4 border-l-[#3b82f6] rounded-xl p-8 hover:bg-[#1f1f1f] transition-all">
              <span className="text-sm text-[#a3a3a3] font-inter">May 2026 - Present</span>
              <h3 className="text-xl font-playfair text-[#f5f5f5] mt-1 mb-2">Open Source Developer — GSoC 2026</h3>
              <p className="font-inter text-[#f5f5f5]">Sugar Labs & Cuneiform Digital Library Initiative (Remote)</p>
            </div>
            <div className="bg-[#0a0a0a] border border-[#262626] border-l-4 border-l-[#3b82f6] rounded-xl p-8 hover:bg-[#1f1f1f] transition-all">
              <span className="text-sm text-[#a3a3a3] font-inter">May 2025 - July 2025</span>
              <h3 className="text-xl font-playfair text-[#f5f5f5] mt-1 mb-2">Full Stack Developer Intern</h3>
              <p className="font-inter text-[#f5f5f5]">Datavio, Bangalore</p>
              <p className="text-sm text-[#a3a3a3] mt-2 font-inter">Engineered automated alert systems and supply-chain dashboards, reducing reporting overhead by 40%.</p>
            </div>
            <div className="bg-[#0a0a0a] border border-[#262626] border-l-4 border-l-[#3b82f6] rounded-xl p-8 hover:bg-[#1f1f1f] transition-all">
              <span className="text-sm text-[#a3a3a3] font-inter">Aug 2023 - Present</span>
              <h3 className="text-xl font-playfair text-[#f5f5f5] mt-1 mb-2">B.Tech at IIIT Jabalpur</h3>
              <p className="font-inter text-[#f5f5f5]">Jabalpur, Madhya Pradesh</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24">
        <div className="max-w-6xl mx-auto px-8 text-center">
          <h2 className="text-4xl text-center mb-8 relative after:content-[''] after:absolute after:-bottom-3 after:left-1/2 after:-translate-x-1/2 after:w-16 after:h-1 after:bg-[#3b82f6] after:rounded-sm after:shadow-[0_0_10px_rgba(59,130,246,0.4)] font-playfair text-[#f5f5f5]">Summoning Sign (Contact Me)</h2>
          <p className="text-xl text-[#a3a3a3] mb-12 max-w-2xl mx-auto font-inter">
            Ready to collaborate or want to connect? Feel free to reach out across the rift.
          </p>
          <div className="flex justify-center gap-6 flex-wrap">
            <a href="mailto:siddharthpn2003@gmail.com" className="inline-block px-8 py-4 bg-[#3b82f6] text-white rounded-full text-lg font-medium transition-all hover:shadow-[0_0_15px_rgba(59,130,246,0.4)] hover:-translate-y-1 font-inter">
              ✉️ Email Me
            </a>
            <a href="#" className="inline-block px-8 py-4 bg-white/5 border border-[#262626] text-[#f5f5f5] rounded-full text-lg font-medium transition-all hover:border-[#3b82f6] hover:bg-[#3b82f6]/10 hover:-translate-y-1 font-inter">
              LinkedIn
            </a>
            <a href="#" className="inline-block px-8 py-4 bg-white/5 border border-[#262626] text-[#f5f5f5] rounded-full text-lg font-medium transition-all hover:border-[#3b82f6] hover:bg-[#3b82f6]/10 hover:-translate-y-1 font-inter">
              GitHub
            </a>
            <a href="#" className="inline-block px-8 py-4 bg-white/5 border border-[#262626] text-[#f5f5f5] rounded-full text-lg font-medium transition-all hover:border-[#3b82f6] hover:bg-[#3b82f6]/10 hover:-translate-y-1 font-inter">
              LeetCode
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center border-t border-[#262626] bg-[#0a0a0a]">
        <p className="text-[#a3a3a3] text-sm font-inter">
          © 2026 Siddharth Pandey. All Rights Reserved.
        </p>
      </footer>
    </main>
  );
}
