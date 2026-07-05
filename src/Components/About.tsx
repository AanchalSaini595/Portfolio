export default function About()
{
    return(
<section className="py-5 section-navy-alt" id="about">
  <div className="container mt-5">
    <div className="row align-items-center">
      <div className="col-md-5 text-center mb-4">
        <img src="/aanchal.png" alt="Aanchal Saini" className="img-fluid shadow w-75 rounded"style={{maxWidth: '220px'}}/>
      </div>

      <div className="col-md-7">
        <span className="eyebrow">// about</span>
        <h1 className="mb-3">About Me</h1>
        <p style={{ color: 'var(--text-muted)' }}>
          I'm currently completing my M.Sc. in IT Engineering at FH Wedel, Germany,
          where my coursework spans cryptography (implementing ECDH key exchange in
          SageMath), IIoT systems, and network security. My current project builds a
          system intrusion detection pipeline using an mmWave sensor and ESP32.
        </p>
        <p style={{ color: 'var(--text-muted)' }}>
          Outside coursework, I build and ship projects end-to-end — a deployed
          Flask + React expense tracker, workflow automation with n8n, and Python
          tools for speech recognition and email automation. I hold a BCA from
          Chandigarh University and stay sharp on <strong>HackerRank</strong>.
        </p>

       

        <span className="eyebrow" style={{ marginBottom: '0.4rem' }}>education</span>
        <p style={{ color: 'var(--text)' }}>
          <strong>M.Sc. IT Engineering</strong> — FH Wedel, Germany (ongoing)<br/>
          <strong>Bachelor of Computer Applications</strong> — Chandigarh University, Mohali (2024)
        </p>

        <div className="mt-4">
          <a href="https://www.hackerrank.com/profile/anchalsaini595" target="_blank" className="btn btn-accent me-2">
            HackerRank
          </a>
          <a href="Aanchal_Saini_CV_Updated (2).pdf" className="btn btn-outline-light me-3" download>
            Resume
          </a>
        </div>
      </div>
    </div>
  </div>
</section>

    )
}