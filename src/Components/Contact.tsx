export default function Contact()
{
    return (
    <footer id="contact" className="py-5 section-navy footer-navy text-center">
      <div className="container">
        <span className="eyebrow">// get in touch</span>
        <h2 className="fw-bold mb-3">Contact Me</h2>
        <p className="mb-4" style={{ color: 'var(--text-muted)' }}>
          Open to Werkstudent Software/AI Developer roles — feel free to reach out.
        </p>
        <p className="fs-5 mb-1">
          📧 <a href="mailto:anchalsaini595@gmail.com" className="text-decoration-none">
     anchalsaini595@gmail.com
          </a>
        </p>
        <p className="fs-5">
          🔗 <a href="https://www.linkedin.com/in/aanchal-saini-552a9b416/" target="_blank" rel="noreferrer" className="text-decoration-none">
         linkedin.com
          </a>
        </p>
        <hr className="my-4" style={{ borderColor: 'rgba(232,163,61,0.2)' }} />
        <p className="small" style={{ color: 'var(--text-muted)' }}>
          © {new Date().getFullYear()} Aanchal Saini. All rights reserved.
        </p>
      </div>
    </footer>
  );
};