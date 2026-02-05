import { useState } from "react";
import "../styles/curtain.css";

const Curtain = () => {
  const [open, setOpen] = useState(false);

  return (
    <section className="skills-section">
      <button className="reveal-btn" onClick={() => setOpen(!open)}>
        {open ? "CLOSE SKILLS" : "VIEW SKILLS"}
      </button>

      <div className={`royal-box ${open ? "open" : ""}`}>
        <span>React</span>
        <span>JavaScript</span>
        <span>Bootstrap</span>
        <span>HTML</span>
        <span>CSS</span>
        <span>REST API</span>
        <span>Postman</span>
        <span>GitHub</span>
        <span>MongoDB</span>
        <span>SQL</span>
        <span>UI / UX</span>
      </div>
    </section>
  );
};

export default Curtain;
