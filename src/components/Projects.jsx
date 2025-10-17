import { Link } from "react-router-dom";
import { Github } from "lucide-react";
import { projects } from "../data/projects";

export default function Projects() {
  // Resolve asset paths declared as './assets/...' in project.image
  const assetUrls = import.meta.glob("../assets/**", { eager: true, query: "?url", import: "default" });
  const resolveAsset = (rel) => {
    if (!rel) return null;
    const key = rel.replace(/^\.\//, "../"); // ./assets/foo.png -> ../assets/foo.png
    return assetUrls[key] || null;
  };
  return (
    <section id="projects" className="py-16 scroll-mt-24">
      <div className="neutral-section p-8 sm:p-10">
        <h2 className="text-4xl sm:text-5xl font-extrabold text-orange-900">My Best Projects.</h2>
        <p className="mt-2 text-[var(--neutral-muted)]">My best display of work so far.</p>
        <div className="marquee mt-8">
          <div className="marquee-content">
            {[...projects, ...projects].map((p, idx) => {
              const bg = p.image ? resolveAsset(p.image) : null;
              return (
                <Link
                  key={`${p.slug}-${idx}`}
                  to={`/projects/${p.slug}`}
                  className="shrink-0 w-72 sm:w-80 rounded-xl overflow-hidden neutral-card group"
                >
                  <div
                    className={`relative h-44 grid place-items-center text-2xl font-semibold ${bg ? '' : 'bg-gradient-to-b from-gray-50 to-white'}`}
                    style={bg ? { backgroundImage: `url(${bg})`, backgroundSize: 'cover', backgroundPosition: 'center' } : {}}
                  >
                    {bg && <div className="absolute inset-0 bg-white/60 group-hover:bg-white/50 transition-colors" />}
                    <div className="relative z-10 text-[var(--neutral-ink)]">{p.title}</div>
                  </div>
                  <div className="p-4 text-sm text-[var(--neutral-muted)] flex items-center justify-between">
                    <span>{p.tag}</span>
                    <div className="flex items-center gap-3">
                      {p.github && (
                        <a
                          href={p.github}
                          target="_blank"
                          rel="noreferrer"
                          aria-label={`${p.title} GitHub`}
                          className="hover:text-orange-700"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <Github size={18} />
                        </a>
                      )}
                      <span className="text-lg">Read →</span>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
        <div className="mt-6">
          <Link to="/projects" className="underline" style={{color:'var(--neutral-ink)'}}>View all projects</Link>
        </div>
      </div>
    </section>
  );
}
