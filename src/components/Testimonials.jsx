const REVIEWS = [
  {
    text: '"C3Tech built our company website in just 10 days. The design is clean, professional, and our enquiries have doubled since launch. Highly recommended!"',
    name: "Rohit Sharma",
    role: "Director, NovaTech Solutions Pvt. Ltd.",
    initials: "RS",
    avatarBg: "#1a1a2e",
  },
  {
    text: '"My portfolio website got me 3 freelance clients within the first month. Ritik understood exactly what I needed — great work at a great price!"',
    name: "Priya Mehta",
    role: "Freelance Graphic Designer, Delhi",
    initials: "PM",
    avatarBg: "#2d6a4f",
  },
  {
    text: '"Their Google Ads management brought us 5x more customers in 2 months. The team is responsive, honest, and genuinely cares about results."',
    name: "Arun Kumar",
    role: "Owner, Kashi Sweets, Varanasi",
    initials: "AK",
    avatarBg: "#c8a96e",
  },
];

export default function Testimonials() {
  return (
    <section className="c3-section" id="testimonials">
      <div className="c3-testimonials-header">
        <div>
          <div className="c3-section-label">Client Love</div>
          <h2 className="c3-h2">What Our Clients Say</h2>
        </div>
      </div>

      <div className="c3-testimonials-grid">
        {REVIEWS.map((r) => (
          <div className="c3-tcard" key={r.name}>
            <div className="c3-tcard-stars">
              {"★★★★★".split("").map((star, i) => (
                <span key={i} className="c3-star">{star}</span>
              ))}
            </div>
            <p className="c3-tcard-text">{r.text}</p>
            <div className="c3-tcard-author">
              <div
                className="c3-tcard-avatar"
                style={{ background: r.avatarBg }}
              >
                {r.initials}
              </div>
              <div>
                <div className="c3-tcard-name">{r.name}</div>
                <div className="c3-tcard-role">{r.role}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
