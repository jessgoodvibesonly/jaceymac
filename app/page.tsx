import Image from "next/image";

const gallery = [
  { src: "/JaceyMacRunway.png", alt: "Jacey MacKinnon modeling on the runway", className: "portrait runway" },
  { src: "/bikinijacey.png", alt: "Jacey MacKinnon editorial swimwear portrait", className: "portrait swim" },
  { src: "/softbeautyjacey.png", alt: "Soft beauty portrait of Jacey MacKinnon", className: "portrait beauty" },
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="Jacey MacKinnon home">Jacey MacKinnon</a>
        <nav aria-label="Main navigation">
          <a href="#portfolio">Portfolio</a>
          <a href="#about">About</a>
          <a className="nav-cta" href="mailto:booking@jaceymac.com">Bookings</a>
        </nav>
      </header>

      <section className="hero" id="top">
        <Image
          className="hero-image"
          src="/JaceyMacStudio.png"
          alt="Studio portrait of model Jacey MacKinnon"
          fill
          priority
          sizes="100vw"
        />
        <div className="hero-shade" />
        <div className="hero-content">
          <p className="eyebrow">Model · Editorial · Runway</p>
          <h1>Jacey<br /><span>MacKinnon</span></h1>
          <div className="hero-bottom">
            <p>A study in presence, movement,<br />and effortless confidence.</p>
            <a className="circle-link" href="#portfolio" aria-label="View portfolio">
              <span>View<br />work</span>
              <b aria-hidden="true">↓</b>
            </a>
          </div>
        </div>
        <p className="hero-side">Based in the United States <i /></p>
      </section>

      <section className="intro" id="about">
        <p className="section-index">01 — Introduction</p>
        <div>
          <h2>Distinctive beauty.<br /><em>Natural presence.</em></h2>
          <p className="intro-copy">Jacey MacKinnon is a fashion and editorial model bringing an understated edge and luminous energy to every frame.</p>
        </div>
      </section>

      <section className="portfolio" id="portfolio">
        <div className="section-heading">
          <p className="section-index">02 — Selected work</p>
          <p>Portfolio / 2026</p>
        </div>
        <div className="gallery">
          {gallery.map((image, index) => (
            <figure className={image.className} key={image.src}>
              <div className="image-wrap">
                <Image src={image.src} alt={image.alt} fill sizes="(max-width: 760px) 100vw, 33vw" />
              </div>
              <figcaption><span>0{index + 1}</span><span>{index === 0 ? "Runway" : index === 1 ? "Editorial" : "Beauty"}</span></figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="contact">
        <p className="section-index">03 — Contact</p>
        <div>
          <p className="eyebrow">For collaborations and bookings</p>
          <a href="mailto:booking@jaceymac.com">Let&apos;s create<br /><em>something iconic.</em></a>
        </div>
      </section>

      <footer>
        <a className="wordmark" href="#top">Jacey MacKinnon</a>
        <p>© 2026 Jacey MacKinnon</p>
        <a href="#top">Back to top ↑</a>
      </footer>
    </main>
  );
}
