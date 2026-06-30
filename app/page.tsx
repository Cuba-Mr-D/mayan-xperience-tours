export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative flex h-screen items-center justify-center bg-gradient-to-b from-cyan-900 via-cyan-700 to-cyan-500">
        <div className="absolute inset-0 bg-black/40"></div>

        <div className="relative z-10 mx-auto max-w-5xl px-6 text-center text-white">
          <p className="mb-4 text-sm uppercase tracking-[0.4em] text-cyan-200">
            Mayan Xperience Tours
          </p>

          <h1 className="mb-6 text-5xl font-bold md:text-7xl">
            Planificamos las vacaciones
            <br />
            que siempre imaginaste.
          </h1>

          <p className="mx-auto mb-10 max-w-2xl text-lg text-white/90">
            Diseñamos experiencias únicas y personalizadas para descubrir la
            Riviera Maya.
          </p>

          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
            <button className="rounded-full bg-cyan-400 px-8 py-4 font-semibold text-black hover:bg-cyan-300 transition">
              Planear mis vacaciones
            </button>

            <button className="rounded-full border border-white px-8 py-4 font-semibold hover:bg-white hover:text-black transition">
              Ver experiencias
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}