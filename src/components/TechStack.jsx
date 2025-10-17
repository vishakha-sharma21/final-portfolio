export default function TechStack() {
  const logos = [
    { name: "HTML5", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
    { name: "CSS3", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
    { name: "JavaScript", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
    { name: "React", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    { name: "Canva", src: "https://cdn.simpleicons.org/canva/00C4CC" },
    { name: "Redux", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg" },
    { name: "Tailwind", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
    { name: "Node.js", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
    { name: "Express", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
    { name: "MySQL", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
    { name: "MongoDB", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
    { name: "Git", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
  ];

  return (
    <section id="stack" className="py-16 scroll-mt-24">
      <div className="neutral-section p-8 sm:p-10">
        <h2 className="text-4xl sm:text-5xl font-extrabold text-orange-900">Tech Stack.</h2>
        <p className="mt-2 text-[var(--neutral-muted)]">Tools and technologies I work with.</p>
        <div className="stack-grid mt-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-5 sm:gap-6 place-items-center max-w-5xl mx-auto">
          {logos.map((l) => (
            <div key={l.name} className="group w-20 sm:w-24">
              <div className="neutral-card aspect-square w-full grid place-items-center group-hover:scale-105 transition-transform">
                <img src={l.src} alt={l.name} className="h-10 w-10 sm:h-12 sm:w-12 object-contain" />
              </div>
              <div className="mt-2 h-5 text-xs text-[var(--neutral-muted)] text-center truncate">{l.name}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
