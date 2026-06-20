import Image from "next/image";

export default function Home() {
  const skills = [
    "Java","Spring Boot","React","MySQL","REST APIs","Git",
    "GitHub","JDBC","DSA","HTML","CSS","JavaScript"
  ];

  const projects = [
    {
      title: "Car Rental System",
      tech: "Spring Boot • React • MySQL",
      desc: "Full-stack application with authentication, booking management and REST APIs."
    },
    {
      title: "HealthMate",
      tech: "Java • MySQL",
      desc: "BMI calculator and diet recommendation system."
    },
    {
      title: "Food Delivery Application",
      tech: "HTML • CSS • JavaScript • PHP • MySQL",
      desc: "Responsive food ordering platform with order management."
    }
  ];

  return (
    <main className="bg-slate-950 text-white scroll-smooth">
      <nav className="fixed top-0 w-full bg-slate-950/90 backdrop-blur border-b border-slate-800 z-50">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
          <h1 className="font-bold text-xl">Swapnil Chavan</h1>
          <div className="flex gap-4 text-sm">
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
      </nav>

      <section className="min-h-screen flex items-center pt-20 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-blue-400 mb-3">AVAILABLE FOR OPPORTUNITIES</p>
            <h1 className="text-5xl md:text-7xl font-bold">
              Hi, I'm <span className="text-blue-500">Swapnil</span>
            </h1>
            <h2 className="text-2xl mt-4 text-slate-300">
              Java Full Stack Developer
            </h2>
            <p className="mt-6 text-slate-400 leading-8">
              Final-Year Computer Science & Engineering student passionate about
              Java, Spring Boot, React, MySQL and scalable software development.
            </p>

            <div className="flex gap-4 mt-8 flex-wrap">
              <a href="https://github.com/chavanswapnil-github" className="bg-blue-600 px-5 py-3 rounded-xl">GitHub</a>
              <a href="https://www.linkedin.com/in/swapnil-chavan-640642271" className="border px-5 py-3 rounded-xl">LinkedIn</a>
              <a href="/Swapnil_Chavan_Resume.pdf" className="border px-5 py-3 rounded-xl">Resume</a>
            </div>

            <div className="grid grid-cols-2 gap-4 mt-10">
              <div className="bg-slate-900 p-4 rounded-xl"><h3 className="text-2xl font-bold">200+</h3><p>Problems Solved</p></div>
              <div className="bg-slate-900 p-4 rounded-xl"><h3 className="text-2xl font-bold">5★</h3><p>Java HackerRank</p></div>
              <div className="bg-slate-900 p-4 rounded-xl"><h3 className="text-2xl font-bold">3+</h3><p>Projects</p></div>
              <div className="bg-slate-900 p-4 rounded-xl"><h3 className="text-2xl font-bold">8.71</h3><p>GPA</p></div>
            </div>
          </div>

          <div className="flex justify-center">
            <Image src="/images/Profile.jpeg" alt="Profile" width={420} height={420}
              className="rounded-3xl border-4 border-blue-500" />
          </div>
        </div>
      </section>

      <section id="about" className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold mb-6">About Me</h2>
        <div className="bg-slate-900 p-8 rounded-2xl">
          Final-Year B.Tech CSE student at Sandip University with GPA 8.71.
          Experienced in Java, Spring Boot, MySQL, REST APIs and full-stack development.
        </div>
      </section>

      <section id="skills" className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold mb-8">Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {skills.map((s) => (
            <div key={s} className="bg-slate-900 p-5 rounded-xl text-center">{s}</div>
          ))}
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold mb-8">Coding Achievements</h2>
        <div className="grid md:grid-cols-3 gap-4">
          <div className="bg-slate-900 p-6 rounded-xl">200+ CodeChef Problems</div>
          <div className="bg-slate-900 p-6 rounded-xl">5★ Java HackerRank</div>
          <div className="bg-slate-900 p-6 rounded-xl">Active LeetCode Practice</div>
        </div>
      </section>

      <section id="projects" className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold mb-8">Projects</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((p) => (
            <div key={p.title} className="bg-slate-900 p-6 rounded-2xl">
              <h3 className="text-2xl font-semibold">{p.title}</h3>
              <p className="text-blue-400 mt-2">{p.tech}</p>
              <p className="text-slate-400 mt-4">{p.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold mb-8">Internship</h2>
        <div className="bg-slate-900 p-8 rounded-2xl">
          <h3 className="text-2xl font-semibold">Java Developer Intern</h3>
          <p className="text-blue-400">Neotech King Global Solutions Pvt. Ltd.</p>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold mb-8">Education</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-slate-900 p-6 rounded-2xl">B.Tech CSE - GPA 8.71</div>
          <div className="bg-slate-900 p-6 rounded-2xl">Diploma CE - 81.43%</div>
        </div>
      </section>

      <section id="contact" className="max-w-6xl mx-auto px-6 py-20 text-center">
        <h2 className="text-4xl font-bold mb-8">Contact</h2>
        <p>swapnilc983@gmail.com</p>
        <p className="mt-2">Nashik, Maharashtra</p>
      </section>
    </main>
  );
}
