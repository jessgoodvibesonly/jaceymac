import { existsSync } from "node:fs";
import { join } from "node:path";
import styles from "./page.module.css";

type PortfolioImage = {
  src: string;
  alt: string;
  label: string;
  eyebrow: string;
  required?: boolean;
};

const portfolioImages: PortfolioImage[] = [
  {
    src: "/JaceyMacStudio.png",
    alt: "Studio portrait of model Jacey MacKinnon",
    label: "Studio Portrait",
    eyebrow: "01 / Studio",
    required: true,
  },
  {
    src: "/JaceyCompCardNoInfo.png",
    alt: "Comp card portrait of model Jacey MacKinnon",
    label: "Comp Card",
    eyebrow: "02 / Editorial",
  },
  {
    src: "/JaceyRunway.png",
    alt: "Runway portrait of model Jacey MacKinnon",
    label: "Runway",
    eyebrow: "03 / Runway",
  },
];

const modelDetails = [
  ["Height", "5’7"],
  ["Bust", "34"],
  ["Waist", "27.5"],
  ["Hips", "34"],
  ["Shoes", "39"],
  ["Hair", "Dirty Blonde"],
  ["Eyes", "Green"],
  ["Age", "22"],
];

function isAvailable(src: string) {
  return existsSync(join(process.cwd(), "public", src.slice(1)));
}

export default function Home() {
  return (
    <main className={styles.page}>
      <header className={styles.hero}>
        <nav className={styles.nav} aria-label="Main navigation">
          <a className={styles.monogram} href="#top" aria-label="Jacey MacKinnon home">
            JM
          </a>
          <div className={styles.navLinks}>
            <a href="#about">About</a>
            <a href="#portfolio">Portfolio</a>
            <a href="#details">Details</a>
            <a href="#contact">Contact</a>
          </div>
        </nav>

        <div className={styles.heroContent} id="top">
          <div className={styles.heroCopy}>
            <p className={styles.eyebrow}>Prince Edward Island · Canada</p>
            <h1>
              Jacey
              <span>MacKinnon</span>
            </h1>
            <p className={styles.heroLabel}>Model Portfolio</p>
            <a className={styles.textLink} href="#portfolio">
              View portfolio <span aria-hidden="true">↓</span>
            </a>
          </div>

          <div className={styles.heroImageWrap}>
            <img
              className={styles.heroImage}
              src="/JaceyMacStudio.png"
              alt="Studio portrait of model Jacey MacKinnon"
            />
            <p className={styles.verticalText}>Jacey MacKinnon · 2026</p>
          </div>
        </div>

        <p className={styles.heroIndex}>01</p>
      </header>

      <section className={`${styles.section} ${styles.about}`} id="about">
        <div className={styles.sectionIntro}>
          <p className={styles.eyebrow}>01 / About</p>
          <h2>Natural presence.<br />Grounded spirit.</h2>
        </div>
        <div className={styles.aboutCopy}>
          <p>
            Born and raised on Prince Edward Island, Jacey MacKinnon is new to
            the modeling scene and brings a natural, grounded presence to every
            opportunity. She is family-oriented, hard-working, health-conscious,
            detail-focused, and known for her warmth, humour, and strong work ethic.
          </p>
          <p>
            Jacey loves dancing, spending time with friends, healthy living, and
            becoming the best version of herself. She attended CMTC 2026 and is
            currently building her modeling portfolio while working as a Room
            Attendant at a high-end four-star hotel.
          </p>
        </div>
      </section>

      <section className={`${styles.section} ${styles.portfolio}`} id="portfolio">
        <div className={styles.portfolioHeader}>
          <div>
            <p className={styles.eyebrow}>02 / Selected work</p>
            <h2>Portfolio</h2>
          </div>
          <p>Studio · Editorial · Runway</p>
        </div>

        <div className={styles.gallery}>
          {portfolioImages.map((image) => {
            const available = image.required || isAvailable(image.src);

            return (
              <figure className={styles.portfolioCard} key={image.src}>
                <div className={styles.imageFrame}>
                  {available ? (
                    <img src={image.src} alt={image.alt} />
                  ) : (
                    <div className={styles.placeholder} aria-label={`${image.label} image coming soon`}>
                      <span>JM</span>
                      <p>{image.label}</p>
                      <small>Image coming soon</small>
                    </div>
                  )}
                </div>
                <figcaption>
                  <span>{image.eyebrow}</span>
                  <strong>{image.label}</strong>
                </figcaption>
              </figure>
            );
          })}
        </div>
      </section>

      <section className={`${styles.section} ${styles.details}`} id="details">
        <div className={styles.detailsTitle}>
          <p className={styles.eyebrow}>03 / Profile</p>
          <h2>Model<br />Details</h2>
        </div>
        <dl className={styles.detailsGrid}>
          {modelDetails.map(([label, value]) => (
            <div key={label}>
              <dt>{label}</dt>
              <dd>{value}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section className={`${styles.section} ${styles.contact}`} id="contact">
        <p className={styles.eyebrow}>04 / Contact</p>
        <h2>Let&apos;s work<br />together.</h2>
        <p className={styles.contactText}>
          For bookings, collaborations, and portfolio inquiries.
        </p>
        <a className={styles.email} href="mailto:jacey.shaye2003@icloud.com">
          jacey.shaye2003@icloud.com
        </a>
      </section>

      <footer className={styles.footer}>
        <a className={styles.monogram} href="#top" aria-label="Back to top">JM</a>
        <p>Jacey MacKinnon · Model Portfolio</p>
        <p>Prince Edward Island, Canada</p>
      </footer>
    </main>
  );
}
