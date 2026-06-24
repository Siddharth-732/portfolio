import Prism from "../components/Prism";

export default function Page() {
  return (
    <main className="relative min-h-screen w-full flex flex-col items-start justify-center bg-neutral-950 text-white overflow-hidden p-8 sm:p-24 lg:p-32">
      <div className="absolute inset-0 z-0">
        <Prism
          animationType="hover"
          height={2.5}
          baseWidth={2.5}
          glow={1}
          bloom={1}
          hoverStrength={2}
          transparent={true}
        />
      </div>

      <div className="z-10 flex flex-col items-start max-w-5xl pointer-events-none mt-12 sm:mt-0">
        <div className="flex items-center gap-4 mb-2 sm:mb-0">
          <h2 className="text-xl sm:text 2xl md:text-3xl font-light tracking-wide uppercase font-serif">
            Hi, I am
          </h2>
          <div className="h-[1px] w-16 sm:w-32 bg-white/50 mt-1"></div>
        </div>

        <h1 className="text-6xl sm:text-4xl md:text-[6rem] font-serif font-medium tracking-tight drop-shadow-2xl leading-none sm:leading-[0.9] -ml-1 sm:-ml-2 mb-6">
          Siddharth Pandey
        </h1>
        <aside class="w-full max-w-lg rounded-lg bg-black p-6 font-mono text-white">
          <div class="flex items-center justify-between">
            <div class="flex space-x-2 text-red-500">
              <div class="h-3 w-3 rounded-full bg-red-500"></div>
              <div class="h-3 w-3 rounded-full bg-yellow-500"></div>
              <div class="h-3 w-3 rounded-full bg-green-500"></div>
            </div>
            <p class="text-sm">bash</p>
          </div>
          <div class="mt-4">
            <p class="text-green-400">$ npm run intro</p>
            <p class="text-white">+ rcsen@21.7.29</p>
            <p class="text-white">
              Open Source Enthusiast, Blockchain and Cloud developer, In love
              with AI &amp; Machine learning
            </p>
            <p class="text-green-400">$ flutter pub get skills</p>
            <div class="Typewriter" data-testid="typewriter-wrapper">
              <span class="Typewriter__wrapper"></span>
              <span class="Typewriter__cursor">|</span>
            </div>
          </div>
        </aside>
        <p className="text-xl sm:text-2xl md:text-3xl text-neutral-200 max-w-2xl font-light drop-shadow-md">
          Crafting digital experiences through code
          <br className="hidden sm:block" /> and design
        </p>

        <div className="flex flex-row items-center gap-4 mt-10 pointer-events-auto">
          <button className="px-8 py-3 sm:px-10 sm:py-4 bg-white text-black font-semibold rounded-full hover:scale-105 transition-transform duration-300 text-sm sm:text-base">
            Explore Work
          </button>
          <button className="px-8 py-3 sm:px-10 sm:py-4 bg-transparent border border-white/40 text-white font-semibold rounded-full hover:bg-white/10 transition-colors duration-300 text-sm sm:text-base backdrop-blur-sm">
            Get in Touch
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex items-center gap-3 text-xs sm:text-sm tracking-[0.2em] text-neutral-400 pointer-events-none">
        <div className="w-5 h-8 border border-neutral-400 rounded-full flex justify-center p-1">
          <div className="w-1 h-2 bg-neutral-400 rounded-full animate-bounce mt-1" />
        </div>
        SCROLL
      </div>
    </main>
  );
}
