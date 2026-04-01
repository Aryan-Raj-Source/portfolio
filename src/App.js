import React, { useState } from "react";
import { motion } from "framer-motion";

export default function App() {
  const [dark, setDark] = useState(true);
  return (
    <div className={dark 
  ? "bg-gradient-to-br from-purple-900 via-black to-blue-900 text-white scroll-smooth"
  : "bg-gray-100 text-black scroll-smooth"}>

      {/* 🔝 NAVBAR */}
      <nav className="fixed top-0 w-full backdrop-blur-md bg-white/10 border-b border-white/20 z-50">
        <div className="max-w-7xl mx-auto flex justify-between px-6 py-4">
          <h1 className="font-bold">Aryan Raj</h1>
          <div className="flex gap-6 text-sm items-center">
            <a href="#about">About</a>
            <a href="#tech">Tech</a>
            <a href="#projects">Projects</a>
            <a href="#certifications">Certifications</a>
            <a href="#contact">Contact</a>
            {/* 🌙 Toggle Button */}
  <button 
    onClick={() => setDark(!dark)} 
    className="glass-card px-3 py-1"
  >
    {dark ? "☀️" : "🌙"}
  </button>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section className="h-screen flex flex-col justify-center items-center text-center px-6">
        <motion.h1 initial={{opacity:0,y:-50}} animate={{opacity:1,y:0}} className="text-6xl font-bold">
          Aryan Raj
        </motion.h1>

        <p className="mt-4 text-gray-300 text-lg">
          AI/ML Engineer | Building Intelligent Systems 🚀
        </p>

        <div className="mt-8 flex gap-4">
          <a href="#projects" className="glass-card hover:scale-105">View Work</a>
          <a href="https://drive.google.com/file/d/1ywgnhLLY0r5Xo87W_mv2j6NSvm_w-yuH/view" className="glass-card hover:scale-105">Resume</a>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="min-h-screen flex items-center px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">

          <div className="glass-card">
            <h2 className="text-3xl mb-4">Who I Am</h2>
            <p className="text-gray-300 leading-relaxed">
              I'm Aryan Raj, a B.Tech student specializing in AI/ML at Manipal University Jaipur (2023–2027).  
              I build intelligent systems and modern web apps using AI + software engineering.  
              Currently mastering DSA, DBMS, OS, and OOP while shipping real projects.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-4">
            <div className="glass-card text-center">2027<br/>Graduating</div>
            <div className="glass-card text-center">7.26<br/>CGPA</div>
            <div className="glass-card text-center">2+<br/>Projects</div>
            <div className="glass-card text-center">4+<br/>Certs</div>
          </div>

        </div>
      </section>

      {/* TECH STACK */}
      <section id="tech" className="min-h-screen flex items-center px-6">
        <div className="max-w-6xl mx-auto w-full">
          <h2 className="text-3xl mb-10 text-center">My Arsenal</h2>

          <div className="grid md:grid-cols-3 gap-6">

            <div className="glass-card"><h3>Languages</h3><p>C, C++, Python</p></div>
            <div className="glass-card"><h3>Web</h3><p>HTML, CSS, JS, React*</p></div>
            <div className="glass-card"><h3>Tools</h3><p>GitHub, VS Code, Jupyter, MySQL</p></div>
            <div className="glass-card"><h3>AI Tools</h3><p>ChatGPT, Copilot, Cursor, Claude</p></div>
            <div className="glass-card"><h3>CS Core</h3><p>DSA, DBMS, OS, OOP</p></div>
            <div className="glass-card"><h3>Soft Skills</h3><p>Leadership, Teamwork, Problem Solving</p></div>

          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="min-h-screen px-6 py-20">
        <h2 className="text-3xl text-center mb-12">What I've Built</h2>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">

          {/* Project 1 */}
          <motion.div whileHover={{scale:1.05}} className="glass-card">
            <h3 className="text-xl font-semibold">Portfolio Website</h3>
            <p className="text-gray-400 mt-2">
              Modern React portfolio with animations, dark mode, and interactive UI.
            </p>

            <div className="mt-4 flex gap-4">
              <a href="https://github.com/aryan238raj" target="_blank" className="underline">GitHub</a>
              <a href="#" className="underline">Live Demo</a>
            </div>
          </motion.div>

          {/* Project 2 */}
          <motion.div whileHover={{scale:1.05}} className="glass-card">
            <h3 className="text-xl font-semibold">AI Fitness Coach</h3>
            <p className="text-gray-400 mt-2">
              Smart fitness app with personalized workouts and nutrition tracking.
            </p>

            <div className="mt-4 flex gap-4">
              <a href="https://github.com/aryan238raj" target="_blank" className="underline">GitHub</a>
              <a href="https://ai-fitness-coach-drab.vercel.app/" className="underline">Live Demo</a>
            </div>
          </motion.div>

        </div>
      </section>
      {/* CERTIFICATIONS */}
<section id="certifications" className="min-h-screen px-6 py-20">
  <h2 className="text-3xl text-center mb-12">What I've Earned</h2>

  <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-6">

    {/* Cert 1 */}
    <div className="glass-card hover:scale-105 transition">
      <h3 className="text-xl font-semibold">Introduction to DevOps</h3>
      <p className="text-gray-400 mt-2">Coursera</p>

      <a 
        href="https://www.coursera.org/account/accomplishments/verify/61862W1W34C2" 
        target="_blank" 
        className="mt-4 inline-block underline"
      >
        View Certificate ↗
      </a>
    </div>

    {/* Cert 2 */}
    <div className="glass-card hover:scale-105 transition">
      <h3 className="text-xl font-semibold">Data Structures And Algorithms</h3>
      <p className="text-gray-400 mt-2">CodeChef</p>

      <a 
        href="https://www.codechef.com/certificates/public/222e214" 
        target="_blank" 
        className="mt-4 inline-block underline"
      >
        View Certificate ↗
      </a>
    </div>

    {/* Cert 3 */}
    <div className="glass-card hover:scale-105 transition">
      <h3 className="text-xl font-semibold">Python Essentials 1</h3>
      <p className="text-gray-400 mt-2">Cisco</p>

      <a 
        href="https://www.credly.com/users/aryan-raj.15ecf151/badges#credly" 
        target="_blank" 
        className="mt-4 inline-block underline"
      >
        View Certificate ↗
      </a>
    </div>

    {/* Cert 4 */}
    <div className="glass-card hover:scale-105 transition">
      <h3 className="text-xl font-semibold">Python Essentials 2</h3>
      <p className="text-gray-400 mt-2">Cisco</p>

      <a 
        href="https://www.credly.com/users/aryan-raj.15ecf151/badges#credly" 
        target="_blank" 
        className="mt-4 inline-block underline"
      >
        View Certificate ↗
      </a>
    </div>

  </div>
</section>

      {/* CONTACT */}
      <section id="contact" className="min-h-screen flex items-center px-6">
        <div className="max-w-4xl mx-auto text-center w-full">
          <h2 className="text-3xl mb-6">Let's Connect</h2>

          <div className="glass-card">
            <p>Email: aryan238raj@gmail.com</p>
            <p className="mt-2">Phone: +91 7428631476</p>

            <div className="mt-4 flex justify-center gap-6">
              <a href="https://www.linkedin.com/in/aryan-raj-039832302/" target="_blank">LinkedIn</a>
              <a href="https://github.com/Aryan-Raj-Source" target="_blank">GitHub</a>
              <a href="https://www.credly.com/users/aryan-raj.15ecf151" target="_blank">Creadly</a>
            </div>
          </div>
        </div>
      </section>
      <footer className="text-center py-6 text-gray-400">
  Built with ❤️ by Aryan Raj
</footer>
<a 
  href="#" 
  className="fixed bottom-5 right-5 glass-card text-sm"
>
  ↑ Top
</a>

    </div>
  );
}