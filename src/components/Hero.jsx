import { Github, Linkedin, Mail, Instagram } from "lucide-react";
import myImage from "../assets/myimage.jpg";
export default function Hero() {
  return (
    <section id="home" className="min-h-[70vh] flex flex-col justify-center gap-1 scroll-mt-32 mt-12">
      <div className="flex flex-col-reverse sm:flex-row items-center sm:items-start justify-between gap-6">
        <div className="text-4xl sm:text-5xl font-semibold leading-tight text-center sm:text-left">
          <div>{"<Hello, I'm "}<span className="text-orange-700 underline">Vishakha</span>{"!>"}</div>
          <div className="mt-2">{"<I "}<span className="text-orange-700 underline">design</span>{" and "}<span className="text-orange-700 underline">develop</span></div>
          <div className="mt-2">{"websites.>"}</div>
          <p className="text-gray-600 text-lg mt-4 text-left">I also do Graphic Designing…</p>
        </div>
        
        <div className="block sm:mt-0">
          <div className="h-36 w-36 sm:h-56 sm:w-56 md:h-64 md:w-64 rounded-full bg-gradient-to-br from-orange-500 to-orange-300 p-[4px] mx-auto sm:mx-0">
            <div className="h-full w-full rounded-full bg-white overflow-hidden">
              <img src={myImage} alt="Vishakha portrait" className="h-full w-full object-cover" />
            </div>
          </div>
        </div>
      </div>
      
      <p className="text-gray-600 text-lg mt-2">Connect with me on</p>
      <div className="flex items-center gap-4 text-gray-700">
        
        <a href="https://www.linkedin.com/in/vishakha-sharma-063741359/" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="hover:text-indigo-700">
          <Linkedin />
        </a>
        <a href="https://github.com/vishakha-sharma21" target="_blank" rel="noreferrer" aria-label="GitHub" className="hover:text-indigo-700">
          <Github />
        </a>
        <a href="vishakha.sharma.dpsv@gmail.com" aria-label="Email" className="hover:text-indigo-700">
          <Mail />
        </a>
      </div>
      
      <div className="flex items-center gap-3 text-gray-700">
        <a href="#about" className="underline">Learn more</a>
        
      </div>
    </section>
  );
}
