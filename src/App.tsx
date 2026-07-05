import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { useEffect, useState } from "react";

import Contact from './Components/Contact'
import Navbar from './Components/Navbar'
import Projects from './Components/Project'
import About from './Components/About'
import Certificates from './Components/Certificates'

function App() {
  const roles = ["Software Developer", "AI & Data Enthusiast", "Werkstudent — open to roles"];
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const current = roles[roleIndex];
    if (charIndex < current.length) {
      const timeout = setTimeout(() => {
        setDisplayText(current.slice(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      }, 55);
      return () => clearTimeout(timeout);
    } else {
      const pause = setTimeout(() => {
        setCharIndex(0);
        setDisplayText("");
        setRoleIndex((roleIndex + 1) % roles.length);
      }, 1800);
      return () => clearTimeout(pause);
    }
  }, [charIndex, roleIndex]);

  return (
    <>
      <Navbar />

      <section
        id="home"
        className="d-flex flex-column justify-content-center align-items-center text-center section-navy"
        style={{ minHeight: '90vh', paddingTop: '80px' }}
      >
        <div className="container-fluid" style={{ maxWidth: '720px' }}>
          <span className="role-tag">{`<${displayText}/>`}</span>
          <h1 className="fw-bold display-4 mt-4 mb-3">Aanchal Saini</h1>
          <p className="lead mb-4" style={{ color: 'var(--text-muted)' }}>
            M.Sc. IT Engineering student at FH Wedel, building AI-driven applications
            and web tools — from an IIoT intrusion detection project to a deployed
            full-stack expense tracker.
          </p>
          <a href="#projects" className="btn btn-accent btn-lg">
            View My Projects
          </a>
        </div>
      </section>

      <About />
       <Projects />
      <Certificates />
     
      <Contact />
    </>
  )
}

export default App