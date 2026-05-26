const PROJECTS = [
  {
    colorClass: "c3-pi-c1",
    cat: "Business Website · SEO",
    title: "Agarwal Trading Co. — Corporate Site",
  },
  {
    colorClass: "c3-pi-c2",
    cat: "Portfolio",
    title: "Priya Mehta — Design Portfolio",
  },
  {
    colorClass: "c3-pi-c3",
    cat: "Pvt. Ltd. Website",
    title: "NovaTech Solutions Pvt. Ltd.",
  },
  {
    colorClass: "c3-pi-c4",
    cat: "Digital Marketing",
    title: "Kashi Sweets — Google Ads Campaign",
  },
];

export default function Portfolio() {
  return (
    <section className="c3-section" id="portfolio">
      <div className="c3-portfolio-header">
        <div>
          <div className="c3-section-label">Our Work</div>
          <h2 className="c3-h2">
            Projects We're
            <br />
            Proud Of
          </h2>
        </div>
        <a
          className="c3-btn-secondary"
          onClick={() =>
            document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
          }
        >
          Start Your Project →
        </a>
      </div>

      <div className="c3-portfolio-grid">
        {PROJECTS.map((p, i) => (
          <div className="c3-portfolio-item" key={i}>
            <div className={`c3-pi-bg ${p.colorClass}`}>
              <div className="c3-pi-overlay" />
              <div className="c3-pi-content">
                <div className="c3-pi-cat">{p.cat}</div>
                <div className="c3-pi-title">{p.title}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
