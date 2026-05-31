import Image from "next/image";

const portfolioImages = [
  {
    src: "/JaceyMacRunway.png",
    alt: "Jacey MacKinnon in a runway editorial portrait",
    label: "Runway",
  },
  {
    src: "/bikinijacey.png",
    alt: "Jacey MacKinnon in a swimwear editorial portrait",
    label: "Swim",
  },
  {
    src: "/softbeautyjacey.png",
    alt: "Jacey MacKinnon in a soft beauty portrait",
    label: "Beauty",
  },
];

export default function Home() {
  return (
    <main>
      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-copy">
          <p className="eyebrow">Prince Edward Island, Canada</p>
          <p className="brand">JaceyMac</p>
          <h1 id="hero-title">
            Jacey <span>MacKinnon</span>
          </h1>
          <p className="hero-description">
            Model Portfolio <i aria-hidden="true" /> Editorial presence shaped
            by timeless beauty and coastal confidence.
          </p>
          <a className="portfolio-link" href="#portfolio">
            View portfolio <span aria-hidden="true">↓</span>
          </a>
        </div>

        <div className="hero-image-wrap">
          <div className="image-frame" />
          <Image
            className="hero-image"
            src="/JaceyMacStudio.png"
            alt="Studio portrait of Jacey MacKinnon"
            fill
            priority
            sizes="(max-width: 760px) 86vw, 47vw"
          />
          <p className="image-caption">01 — Studio</p>
        </div>

        <p className="side-note">Model Portfolio — 2026</p>
      </section>

      <section
        className="portfolio"
        id="portfolio"
        aria-labelledby="portfolio-title"
      >
        <div className="section-heading">
          <p className="eyebrow">Selected work</p>
          <h2 id="portfolio-title">Portfolio</h2>
          <p>Quiet luxury, natural poise, and an editorial point of view.</p>
        </div>

        <div className="portfolio-grid">
          {portfolioImages.map((image, index) => (
            <article className="portfolio-card" key={image.src}>
              <div className="portfolio-image-wrap">
                <Image
                  className="portfolio-image"
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(max-width: 700px) 92vw, 30vw"
                />
              </div>
              <div className="portfolio-meta">
                <p>{String(index + 2).padStart(2, "0")}</p>
                <h3>{image.label}</h3>
              </div>
            </article>
          ))}
        </div>
      </section>

      <footer>
        <p>JaceyMac</p>
        <p>Jacey MacKinnon — Prince Edward Island, Canada</p>
      </footer>
    </main>
  );
}
