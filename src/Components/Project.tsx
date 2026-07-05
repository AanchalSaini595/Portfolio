import "bootstrap/dist/css/bootstrap.min.css";

const projects = [
  {
    title: "Expense Tracker",
    text: "A full-stack Flask + React/TypeScript app for tracking and visualizing daily expenses, deployed with a live SQLite-backed API.",
    img: "expense.jpg",
    link: "https://github.com/AanchalSaini595/Expenses_Tracker",
    liveDemo: "https://expenses-tracker-frontend-teow.onrender.com",
  },
  {
    title: "Currency Converter",
    text: "A currency converter using live API integration and AI-based rate analysis.",
    img: "currency_exchange.jpg",
    link: "https://github.com/AanchalSaini595/Majorproject",
    liveDemo: "https://aanchalsaini595.github.io/Majorproject/",
  },
  {
    title: "Speech Recognizer & Responder",
    text: "Python-powered voice assistant that listens, processes speech, and responds interactively.",
    img: "talk.jpg",
    link: "https://github.com/AanchalSaini595/SPEECH_RECOGNIZER_-_RESPONDER.PY",
  },
  {
    title: "Automatic Email Replier",
    text: "Automates email replies using Python and Gmail API — perfect for workflow efficiency.",
    img: "reply.jpg",
    link: "https://github.com/AanchalSaini595/AUTOMATIC_EMAIL_REPLIER.PY",
  },
  {
    title: "Python MCQ Quiz App",
    text: "Interactive quiz app built with Tkinter — a fun and educational GUI project.",
    img: "mcq.jpg",
    link: "https://github.com/AanchalSaini595/Tkinter_python_mcq_quiz",
  },
];

const Projects = () => {
  return (
    <section className="py-5 section-navy-alt" id="projects">
      <div className="container">
        <h2 className="text-center mb-5 poppins">
          <span className="line"></span>
          <i>My Projects</i>
          <span className="line"></span>
        </h2>

        <div className="row g-4">
          {projects.map((project, index) => (
            <div className="col-md-4" key={index}>
              <div className="card h-100 shadow-sm border-0 position-relative overflow-hidden">
                <img
                  src={project.img}
                  className="card-img-top"
                  alt={project.title}
                  style={{ height: "250px", objectFit: "cover" }}
                />

                <div className="overlay-icons d-flex justify-content-center align-items-center position-absolute top-0 start-0 w-100 h-100 gap-3">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="view-link"
                  >
                    <span className="line"></span>
                    <span className="view-text">Code</span>
                    <span className="line"></span>
                  </a>
                  {project.liveDemo && (
                    <a
                      href={project.liveDemo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="view-link"
                    >
                      <span className="line"></span>
                      <span className="view-text">Live Demo</span>
                      <span className="line"></span>
                    </a>
                  )}
                </div>

                <div className="card-body text-center">
                  <h5 className="card-title">{project.title}</h5>
                  <p className="card-text">{project.text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;