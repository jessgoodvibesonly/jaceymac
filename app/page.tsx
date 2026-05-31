import Image from "next/image";

type PortfolioImage = {
  src: string;
  alt: string;
  label: string;
  className: string;
};

const portfolioImages: PortfolioImage[] = [
  {
    src: "/JaceyMacStudio.png",
    alt: "Jacey MacKinnon in a polished studio portrait",
    label: "Studio",
    className: "portrait-card portrait-card--tall",
  },
  {
    src: "/JaceyMacRunway.png",
    alt: "Jacey MacKinnon in a runway-inspired fashion portrait",
    label: "Runway Inspired",
    className: "portrait-card",
  },
  {
    src: "/bikinijacey.png",
    alt: "Jacey MacKinnon in a summer editorial portrait",
    label: "Summer Editorial",
    className: "portrait-card",
  },
  {
    src: "/softbeautyjacey.png",
    alt: "Jacey MacKinnon in a soft natural beauty portrait",
    label: "Natural Beauty",
    className: "portrait-card portrait-card--tall",
  },
];

const details = [
  ["Age", "22"],
  ["Location", "Prince Edward Island, Canada"],
  ["Focus", "Fashion • Beauty • Lifestyle • Editorial"],
  ["Availability", "Portfolio building and selective collaborations"],
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="JaceyMac homepage">
          Jacey<span>Mac</span>
        </a>
        <nav aria-label="Main navigation">
          <a href="#about">About</a>
          <a href="#portfolio">Portfolio</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow">Prince Edward Island, Canada</p>
          <h1>
            Jacey
            <span>MacKinnon</span>
          </h1>
          <p className="hero-role">Model Portfolio</p>
          <p className="hero-intro">
            Jacey MacKinnon is a 22-year-old model based in Prince Edward
            Island, Canada. Her portfolio blends natural beauty, editorial
            softness, and confident runway-inspired presence.
          </p>
          <a className="primary-button" href="#portfolio">
            View Portfolio
          </a>
        </div>
        <div className="hero-image-wrap">
          <div className="hero-image-frame">
            <Image
              className="hero-image"
              src="/JaceyMacStudio.png"
              alt="Jacey MacKinnon studio portrait"
              fill
              priority
              sizes="(max-width: 820px) 100vw, 50vw"
            />
          </div>
          <p className="image-note">JaceyMac — Portfolio 2026</p>
        </div>
      </section>

      <section className="about section" id="about">
        <div className="section-heading">
          <p className="eyebrow">Profile</p>
          <h2>About Jacey</h2>
        </div>
        <div className="about-content">
          <p className="about-lead">
            Jacey MacKinnon is building a professional modelling portfolio with
            a look that feels natural, fresh, confident, and versatile. Based in
            Prince Edward Island, Canada, she brings a soft editorial presence
            with strong potential for fashion, beauty, lifestyle, and creative
            campaign work.
          </p>
          <div className="details-grid">
            {details.map(([label, value]) => (
              <div className="detail-card" key={label}>
                <p>{label}</p>
                <h3>{value}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="portfolio section" id="portfolio">
        <div className="section-heading section-heading--inline">
          <div>
            <p className="eyebrow">Selected Work</p>
            <h2>Portfolio</h2>
          </div>
          <p>Editorial studies in confidence, light, and natural beauty.</p>
        </div>
        <div className="portfolio-grid">
          {portfolioImages.map((image, index) => (
            <figure className={image.className} key={image.src}>
              <div className="portrait-image-wrap">
                <Image
                  className="portrait-image"
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1000px) 50vw, 25vw"
                />
              </div>
              <figcaption>
                <span>0{index + 1}</span>
                {image.label}
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="contact section" id="contact">
        <p className="eyebrow">Contact</p>
        <h2>Booking &amp; Collaborations</h2>
        <p>
          For booking inquiries, collaborations, and portfolio opportunities,
          please reach out directly.
        </p>
        <div className="contact-buttons" aria-label="Contact methods coming soon">
          <button type="button" disabled>
            Email Coming Soon
          </button>
          <button type="button" disabled>
            Instagram Coming Soon
          </button>
        </div>
      </section>

      <footer>
        <a className="wordmark" href="#top" aria-label="Back to top">
          Jacey<span>Mac</span>
        </a>
        <p>© 2026 Jacey MacKinnon. Model Portfolio.</p>
      </footer>
    </main>
  );
}
