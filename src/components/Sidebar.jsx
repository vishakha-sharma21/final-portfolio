import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { HouseHeart, File,FolderOpenDot, ContactRound,Linkedin, Github, Mail, Instagram } from "lucide-react";
import logoUrl from "../assets/vishakha-logo.png";

export default function Sidebar({ open, setOpen }) {
  const [active, setActive] = useState("home");
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => {
      const sections = ["home", "projects", "about"];
      for (const id of sections) {
        const el = document.getElementById(id);
        if (!el) continue;
        const rect = el.getBoundingClientRect();
        if (rect.top <= 120 && rect.bottom >= 120) {
          setActive(id);
          break;
        }
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // update active when route changes (projects page)
  useEffect(() => {
    if (location.pathname.startsWith("/projects")) {
      setActive("projects");
    } else {
      setActive("home");
    }
  }, [location.pathname]);

  const handleNavClick = () => {
    if (window.innerWidth < 768) setOpen(false);
  };

  const goToSection = async (id) => {
    if (location.pathname !== "/") {
      await navigate("/");
      // wait a tick for home to render then scroll
      requestAnimationFrame(() => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
      });
    } else {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    handleNavClick();
  };

  return (
    <>
      <aside
        className={`fixed left-0 top-0 h-screen w-56 border-r border-[var(--neutral-border)] bg-[#fffdf9]/90 backdrop-blur z-20 transition-transform duration-300 ${
          open ? "translate-x-0" : "-translate-x-56"
        }`}
      >
        <div className="flex flex-col items-center gap-6 py-6">
          <div className="h-24 w-24 rounded-full bg-gradient-to-br from-stone-300 to-stone-100 p-[3px]">
            <div className="h-full w-full rounded-full bg-white grid place-items-center icon-ring">
              <img src={logoUrl} alt="Vishakha logo" className="h-16 w-16 rounded-full object-cover" />
            </div>
          </div>
          <nav className="w-full px-4 flex flex-col gap-2">
            <Link to="/" onClick={handleNavClick} className={`flex items-center gap-3 rounded-lg px-3 py-2 text-sm ${active === "home" ? "bg-orange-50 text-orange-700" : "text-gray-700 hover:bg-gray-50"}`}><HouseHeart /> Home</Link>
            <button onClick={() => goToSection("projects")} className={`text-left flex items-center gap-3 rounded-lg px-3 py-2 text-sm w-full ${active === "projects" ? "bg-orange-50 text-orange-700" : "text-gray-700 hover:bg-gray-50"}`}><FolderOpenDot /> Projects</button>
            <button onClick={() => goToSection("about")} className={`text-left flex items-center gap-3 rounded-lg px-3 py-2 text-sm w-full ${active === "about" ? "bg-orange-50 text-orange-700" : "text-gray-700 hover:bg-gray-50"}`}><ContactRound /> About Me</button>
            <Link
              to="/resume"
              onClick={handleNavClick}
              className={`flex items-center gap-3 rounded-lg px-3 py-2 text-sm ${"text-gray-700 hover:bg-gray-50"}`}
            >
              <File /> Resume
            </Link>
          </nav>
          
          <div className="flex items-center gap-3 text-xl">
            <a className="hover:text-orange-700" href="https://www.linkedin.com/in/vishakha-sharma-063741359/"><Linkedin /></a>
            <a className="hover:text-orange-700" href="https://github.com/vishakha-sharma21"><Github /></a>
            <a className="hover:text-orange-700" href="vishakha.sharma.dpsv@gmail.com"><Mail /></a>
          </div>
        </div>
      </aside>
      {/* Toggle button */}
      <button
        aria-label="Toggle menu"
        onClick={() => setOpen((v) => !v)}
        className={`fixed left-4 top-4 z-30 h-9 w-9 rounded-full bg-white border shadow grid place-items-center transition-transform ${
          open ? "translate-x-56" : "translate-x-0"
        }`}
      >
        {open ? "←" : "☰"}
      </button>
    </>
  );
}
