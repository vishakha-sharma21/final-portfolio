import { Code2, MonitorSmartphone, Server, Palette } from "lucide-react";
export default function About() {
  return (
    <section id="about" className="py-16 scroll-mt-24">
      <div className="neutral-section p-8 sm:p-10">
        <h2 className="mt-2 text-4xl sm:text-5xl font-extrabold text-orange-900">Overview<span className="text-orange-900">.</span></h2>
        <p className="mt-4 max-w-3xl text-[var(--neutral-ink)]/80 leading-7">
          I’m a Computer Engineering student who designs and develops elegant, intuitive, and accessible web applications.
          I work across the stack with React, Node.js and MySQL, focusing on responsive UX and real-world impact. My background in art and graphic design helps me blend code with aesthetics.
        </p>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          <div className="neutral-card p-6">
            <div className="h-14 w-14 grid place-items-center rounded-xl bg-gradient-to-br from-stone-300 to-stone-100 text-[var(--neutral-ink)] icon-ring">
              <Code2 />
            </div>
            <div className="mt-6 font-semibold">Full‑Stack Developer</div>
          </div>
          <div className="neutral-card p-6">
            <div className="h-14 w-14 grid place-items-center rounded-xl bg-gradient-to-br from-stone-300 to-stone-100 text-[var(--neutral-ink)] icon-ring">
              <Palette />
            </div>
            <div className="mt-6 font-semibold">Frontend Developer</div>
          </div>
          <div className="neutral-card p-6">
            <div className="h-14 w-14 grid place-items-center rounded-xl bg-gradient-to-br from-stone-300 to-stone-100 text-[var(--neutral-ink)] icon-ring">
              <MonitorSmartphone />
            </div>
            <div className="mt-6 font-semibold">Backend Developer</div>
          </div>

          <div className="neutral-card p-6">
            <div className="h-14 w-14 grid place-items-center rounded-xl bg-gradient-to-br from-stone-300 to-stone-100 text-[var(--neutral-ink)] icon-ring">
              <Server />
            </div>
            <div className="mt-6 font-semibold">Graphic Designer</div>
          </div>
        </div>
      </div>
    </section>
  );
}
