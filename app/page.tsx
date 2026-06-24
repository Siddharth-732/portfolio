import Prism from "../components/Prism";

export default function Page() {
  return (
    <main className="relative min-h-screen w-full flex flex-col items-center justify-center bg-neutral-950 text-white overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Prism
          animationType="hover"
          height={3.5}
          baseWidth={5.5}
          glow={1}
          bloom={1}
          hoverStrength={3}
          transparent={true}
        />
      </div>
      <div className="z-10 text-center flex flex-col items-center gap-6 p-8 pointer-events-none">
        <h1 className="text-6xl font-bold tracking-tighter sm:text-7xl drop-shadow-lg">
          Welcome to my Portfolio
        </h1>
        <p className="text-lg sm:text-xl text-neutral-300 max-w-xl drop-shadow-md">
          I build dynamic and visually stunning web experiences.
        </p>
        <button className="px-8 py-3 mt-4 bg-white text-black font-semibold rounded-full hover:scale-105 transition-transform duration-300 pointer-events-auto">
          Explore My Work
        </button>
      </div>
    </main>
  );
}
