import { useState, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Sidebar from "./components/Sidebar.jsx";
import Hero from "./components/Hero.jsx";
import Projects from "./components/Projects.jsx";
import About from "./components/About.jsx";
import TechStack from "./components/TechStack.jsx";
import Contact from "./components/Contact.jsx";
import ProjectDetail from "./pages/ProjectDetail.jsx";
import Resume from "./pages/Resume.jsx";
import "./App.css";

function App() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  // Scroll to hash targets like /#projects on navigation
  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");
      // wait a tick to ensure DOM is painted
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 0);
    }
  }, [location]);

  return (
    <div className="min-h-screen site-bg text-[var(--neutral-ink)]">
      <Sidebar open={open} setOpen={setOpen} />
      <main className={`transition-all duration-300 ${open ? "lg:ml-56 ml-0" : "ml-0"}`}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="sticky top-4 z-20 flex justify-end">
            <a
              href="#contact"
              className="bg-orange-700 hover:bg-orange-600 text-white px-3 py-2 text-sm rounded-md shadow"
            >
              Work with me →
            </a>
          </div>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Hero />
                  <About />
                  <Projects />
                  
                  <TechStack />
                  <Contact />
                </>
              }
            />
            <Route path="/projects/:slug" element={<ProjectDetail />} />
            <Route path="/resume" element={<Resume />} />
          </Routes>
        </div>
      </main>
    </div>
  );
}

export default App;
