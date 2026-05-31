import Image from "next/image";

type PortfolioImageProps = {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
};

function PortfolioImage({ src, alt, className = "", priority = false }: PortfolioImageProps) {
  return (
    <Image
      className={`portfolio-image ${className}`}
      src={src}
      alt={alt}
      fill
      sizes="(max-width: 720px) 100vw, (max-width: 1100px) 50vw, 33vw"
      priority={priority}
    />
  );
}

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="Jacey MacKinnon home">
          Jacey <span>MacKinnon</span>
        </a>
        <nav aria-label="Primary navigation">
          <a href="#portfolio">Portfolio</a>
          <a href="#about">About</a>
          <a className="nav-cta" href="#contact">Book Jacey</a>
        </nav>
      </header>

      <section className="hero" id="top" aria-labelledby="hero-title">
        <div className="hero-copy">
          <p className="eyebrow">Model Portfolio · 2026</p>
          <h1 id="hero-title">
            Jacey
            <span>MacKinnon</span>
          </h1>
          <p className="hero-description">
            A distinct presence in front of the lens. Editorial edge,
            effortless movement, and a point of view that carries every frame.
          </p>
          <div className="hero-actions">
            <a className="button button-dark" href="#portfolio">View portfolio</a>
            <a className="text-link" href="#contact">Booking inquiries <span aria-hidden="true">↗</span></a>
          </div>
        </div>
        <div className="hero-visual image-frame">
          <PortfolioImage
            src="/JaceyMacRunway.png"
            alt="Jacey MacKinnon posing in a black runway look"
            className="hero-image"
            priority
          />
          <p className="image-index">01 <span>/</span> 04</p>
        </div>
        <p className="vertical-note">Runway · Editorial · Beauty · Swim</p>
      </section>

      <section className="intro" id="portfolio" aria-labelledby="portfolio-heading">
        <p className="eyebrow">Selected portfolio</p>
        <h2 id="portfolio-heading">Presence that<br /><em>speaks for itself.</em></h2>
        <p>
          From refined studio portraiture to bold swim campaigns, Jacey brings
          confidence, clarity, and an instinctive sense of movement to every brief.
        </p>
      </section>

      <section className="portfolio-grid" aria-label="Portfolio images">
        <article className="portfolio-card card-runway">
          <div className="image-frame">
            <PortfolioImage src="/JaceyMacRunway.png" alt="Jacey MacKinnon in an editorial runway portrait" />
          </div>
          <div className="card-caption">
            <p>01</p><h3>Runway</h3><span>Editorial movement</span>
          </div>
        </article>
        <article className="portfolio-card card-studio">
          <div className="image-frame">
            <PortfolioImage src="/JaceyMacStudio.png" alt="Jacey MacKinnon in a studio fashion portrait" />
          </div>
          <div className="card-caption">
            <p>02</p><h3>Studio</h3><span>Fashion portraiture</span>
          </div>
        </article>
        <article className="portfolio-card card-swim">
          <div className="image-frame">
            <PortfolioImage src="/bikinijacey.png" alt="Jacey MacKinnon modeling swimwear outdoors" />
          </div>
          <div className="card-caption">
            <p>03</p><h3>Swim</h3><span>Natural confidence</span>
          </div>
        </article>
        <article className="portfolio-card card-beauty">
          <div className="image-frame">
            <PortfolioImage src="/softbeautyjacey.png" alt="Close-up beauty portrait of Jacey MacKinnon" />
          </div>
          <div className="card-caption">
            <p>04</p><h3>Beauty</h3><span>Soft focus</span>
          </div>
        </article>
      </section>

      <section className="about" id="about" aria-labelledby="about-heading">
        <div>
          <p className="eyebrow">Meet Jacey</p>
          <h2 id="about-heading">Modern beauty.<br /><em>Natural force.</em></h2>
        </div>
        <div className="about-copy">
          <p className="about-lead">
            Jacey MacKinnon is a model with a versatile look and a quiet intensity
            that translates across editorial, beauty, swim, and runway work.
          </p>
          <p>
            Her approach is grounded in movement and presence: intuitive,
            collaborative, and always in service of the image. Available for
            select creative and commercial projects.
          </p>
        </div>
      </section>

      <section className="contact" id="contact" aria-labelledby="contact-heading">
        <p className="eyebrow">Bookings & collaborations</p>
        <h2 id="contact-heading">Let&apos;s create<br /><em>something iconic.</em></h2>
        <a className="button button-light" href="mailto:bookings@jaceymackinnon.com">
          Get in touch <span aria-hidden="true">↗</span>
        </a>
        <p className="contact-email">bookings@jaceymackinnon.com</p>
      </section>

      <footer>
        <a className="wordmark" href="#top">Jacey <span>MacKinnon</span></a>
        <p>© 2026 Jacey MacKinnon. All rights reserved.</p>
        <a href="#top">Back to top ↑</a>
      </footer>
    </main>
  );
}
