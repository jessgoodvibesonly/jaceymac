import Image from "next/image";

const details = [
  { label: "Age", value: "22" },
  { label: "Location", value: "Prince Edward Island, Canada" },
  { label: "Focus", value: "Fashion • Beauty • Lifestyle • Editorial" },
  {
    label: "Availability",
    value: "Portfolio building and selective collaborations",
  },
];

const portfolio = [
  { src: "/JaceyMacStudio.png", label: "Studio", number: "01" },
  { src: "/JaceyMacRunway.png", label: "Runway Inspired", number: "02" },
  { src: "/softbeautyjacey.png", label: "Natural Beauty", number: "03" },
  { src: "/bikinijacey.png", label: "Summer Editorial", number: "04" },
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="JaceyMac home">
          Jacey<span>Mac</span>
        </a>
        <nav aria-label="Main navigation">
          <a href="#about">About</a>
          <a href="#portfolio">Portfolio</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <section className="hero" id="top" aria-labelledby="hero-title">
        <div className="hero-copy">
          <p className="eyebrow">Prince Edward Island, Canada</p>
          <h1 id="hero-title">
            Jacey <em>MacKinnon</em>
          </h1>
          <p className="hero-role">Model Portfolio</p>
          <p className="hero-intro">
            Jacey MacKinnon is a 22-year-old model based in Prince Edward
            Island, Canada. Her portfolio blends natural beauty, editorial
            softness, and confident runway-inspired presence.
          </p>
          <a className="button button-dark" href="#portfolio">
            View Portfolio <span aria-hidden="true">↘</span>
          </a>
        </div>
        <div className="hero-image-wrap">
          <Image
            className="hero-image"
            src="/JaceyMacStudio.png"
            alt="Jacey MacKinnon studio portrait"
            fill
            priority
            sizes="(max-width: 900px) 100vw, 54vw"
          />
          <p className="hero-image-note">Studio portrait · 2026</p>
        </div>
        <p className="hero-side-note">01 — Selected Portrait</p>
      </section>

      <section className="about section" id="about" aria-labelledby="about-title">
        <div className="section-heading">
          <p className="eyebrow">Introducing</p>
          <h2 id="about-title">About <em>Jacey</em></h2>
        </div>
        <div className="about-content">
          <p className="about-lead">
            Jacey MacKinnon is building a professional modelling portfolio with
            a look that feels natural, fresh, confident, and versatile.
          </p>
          <p className="about-description">
            Based in Prince Edward Island, Canada, she brings a soft editorial
            presence with strong potential for fashion, beauty, lifestyle, and
            creative campaign work.
          </p>
        </div>
        <dl className="detail-grid">
          {details.map((detail) => (
            <div className="detail-card" key={detail.label}>
              <dt>{detail.label}</dt>
              <dd>{detail.value}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section className="portfolio section" id="portfolio" aria-labelledby="portfolio-title">
        <div className="portfolio-heading">
          <div className="section-heading">
            <p className="eyebrow">Selected Work</p>
            <h2 id="portfolio-title">Port<em>folio</em></h2>
          </div>
          <p>
            A curated collection of studio, beauty, and editorial-inspired
            portraits.
          </p>
        </div>
        <div className="portfolio-grid">
          {portfolio.map((item, index) => (
            <figure className={`portfolio-card card-${index + 1}`} key={item.src}>
              <div className="portfolio-image-wrap">
                <Image
                  className="portfolio-image"
                  src={item.src}
                  alt={`${item.label} portrait of Jacey MacKinnon`}
                  fill
                  sizes="(max-width: 700px) 100vw, (max-width: 1000px) 50vw, 42vw"
                />
              </div>
              <figcaption>
                <span>{item.label}</span>
                <small>{item.number}</small>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="contact section" id="contact" aria-labelledby="contact-title">
        <p className="eyebrow">Get in touch</p>
        <h2 id="contact-title">Booking <em>&amp;</em><br /> Collaborations</h2>
        <p className="contact-copy">
          For booking inquiries, collaborations, and portfolio opportunities,
          please reach out directly.
        </p>
        <div className="contact-actions" aria-label="Contact options coming soon">
          <span className="button button-light">Email coming soon</span>
          <span className="button button-outline">Instagram coming soon</span>
        </div>
      </section>

      <footer>
        <a className="brand" href="#top" aria-label="Back to top">
          Jacey<span>Mac</span>
        </a>
        <p>© 2026 Jacey MacKinnon. Model Portfolio.</p>
        <a href="#top">Back to top <span aria-hidden="true">↑</span></a>
      </footer>
    </main>
  );
}
