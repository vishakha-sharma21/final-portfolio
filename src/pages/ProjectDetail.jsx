import { useParams, Link } from "react-router-dom";
import { Github } from "lucide-react";
import { projects } from "../data/projects";

export default function ProjectDetail() {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <section className="py-12">
        <h1 className="text-3xl font-semibold">Project not found</h1>
        <Link className="text-indigo-700 underline" to="/projects">Back to projects</Link>
      </section>
    );
  }

  // Map any './assets/...' references in HTML to real URLs bundled by Vite
  const assetUrls = import.meta.glob("../assets/**", { eager: true, query: "?url", import: "default" });
  const mapAssetPath = (match, p1) => {
    const key = `../assets/${p1}`;
    return assetUrls[key] || match;
  };
  const processedHtml = project?.content
    ?.replace(/"\.\/assets\/(.*?)"/g, (m, p1) => `"${mapAssetPath(m, p1)}"`)
    .replace(/'\.\/assets\/(.*?)'/g, (m, p1) => `'${mapAssetPath(m, p1)}'`);

  return (
    <article className="py-12 prose max-w-none">
      <Link className="text-indigo-700 no-underline" to="/#projects">← All projects</Link>
      <div className="flex items-center gap-3 mt-2">
        <h1 className="!mb-0 mr-2">{project.title}</h1>
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            aria-label={`${project.title} GitHub`}
            className="hover:text-orange-700"
          >
            <Github size={20} />
          </a>
        )}
      </div>
      <p className="!mt-1 text-gray-500">{project.tag}</p>
      <div className="mt-6 rounded-xl border bg-white shadow-sm overflow-hidden">
        <div
          className="p-6 table-responsive text-gray-800 leading-7"
          dangerouslySetInnerHTML={{ __html: processedHtml || project.content }}
        />
      </div>
      {project.gallery && project.gallery.length > 0 && (
        <section className="mt-10">
          <h2 className="text-2xl font-semibold mb-4">Gallery</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {project.gallery.map((src, i) => (
              <img
                key={i}
                src={src}
                alt={`${project.title} screenshot ${i + 1}`}
                className="w-full h-56 object-cover rounded-lg border"
                loading="lazy"
              />
            ))}
          </div>
        </section>
      )}
    </article>
  );
}
