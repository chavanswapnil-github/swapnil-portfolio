export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <section className="flex flex-col items-center justify-center py-32 px-6 text-center">
        <h1 className="text-5xl font-bold">Swapnil Chavan</h1>

        <p className="text-xl text-blue-400 mt-4">
          Java Full Stack Developer
        </p>

        <p className="max-w-2xl mt-6 text-gray-300">
          Final Year Computer Science & Engineering Student passionate about
          Java, Spring Boot, React, MySQL, REST APIs and Data Structures &
          Algorithms.
        </p>

        <div className="mt-8 flex gap-4">
          <a
            href="https://github.com/chavanswapnil-github"
            target="_blank"
            className="bg-blue-600 px-6 py-3 rounded-lg"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/swapnil-chavan-640642271"
            target="_blank"
            className="border border-blue-500 px-6 py-3 rounded-lg"
          >
            LinkedIn
          </a>
        </div>
      </section>
    </main>
  );
}