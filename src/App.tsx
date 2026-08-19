import { useEffect, useState, type ReactNode } from "react";

const GRIDPILOT = "https://gridpilotai.co/";
const GRIDPILOT_DEMO = "https://gridpilotai.co/app#/demo";
const CALENDLY = "https://calendly.com/hansu";
const EMAIL = "ceo@faradon.com";

const ISOS = [
  "CAISO GIDAP",
  "PJM",
  "MISO",
  "ERCOT",
  "SPP",
  "NYISO",
  "ISO-NE",
  "ISP / Fast Track",
  "GE PSLF",
  "RIMS5",
];

function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <a className="logo" href="#top" aria-label="Faradon home">
      <svg viewBox="0 0 32 32" aria-hidden="true">
        <path
          d="M16 5.2L25.2 10.5V21.1L16 26.4L6.8 21.1V10.5L16 5.2Z"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.35"
        />
        <circle cx="16" cy="16" r="2.05" fill="currentColor" />
        <path
          d="M16 7.4V13.6M16 18.4V24.2M8.9 11.8L14.1 14.7M17.9 17.3L23.1 20.2M23.1 11.8L17.9 14.7M14.1 17.3L8.9 20.2"
          stroke="currentColor"
          strokeWidth="1.05"
          strokeLinecap="round"
        />
      </svg>
      <span className="logo-word">
        Faradon
        {compact && <em>Inc.</em>}
      </span>
    </a>
  );
}

function Reveal({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return <div className={`reveal ${className}`}>{children}</div>;
}

export default function App() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 18);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const nodes = document.querySelectorAll(".reveal");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-in");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -8% 0px" },
    );
    nodes.forEach((n) => {
      const rect = n.getBoundingClientRect();
      if (rect.top < window.innerHeight * 0.92) {
        n.classList.add("is-in");
      } else {
        io.observe(n);
      }
    });
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <a className="skip" href="#main">
        Skip to content
      </a>

      <header className={`nav ${scrolled ? "is-scrolled" : ""}`}>
        <div className="nav-inner">
          <Logo />
          <nav className="nav-links" aria-label="Primary">
            <a href="#company">Company</a>
            <a href="#product">Products</a>
            <a href="#markets">Who we serve</a>
            <a href="#contact">Contact</a>
          </nav>
          <div className="nav-actions">
            <a
              className="btn btn-ghost btn-sm"
              href={GRIDPILOT}
              target="_blank"
              rel="noreferrer"
            >
              GridPilot
            </a>
            <a className="btn btn-solid btn-sm" href="#contact">
              Talk to us
            </a>
          </div>
          <button
            className={`menu-btn ${menuOpen ? "is-open" : ""}`}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
          >
            <span />
            <span />
          </button>
        </div>
      </header>

      {menuOpen && (
        <div className="mobile-menu" role="dialog" aria-label="Menu">
          <a href="#company" onClick={closeMenu}>
            Company
          </a>
          <a href="#product" onClick={closeMenu}>
            Products
          </a>
          <a href="#markets" onClick={closeMenu}>
            Who we serve
          </a>
          <a href="#contact" onClick={closeMenu}>
            Contact
          </a>
          <a href={GRIDPILOT} target="_blank" rel="noreferrer" onClick={closeMenu}>
            Visit GridPilot
          </a>
        </div>
      )}

      <main id="main">
        <section className="hero" id="top">
          <div className="hero-media" aria-hidden="true">
            <img src="/images/hero.jpg" alt="" />
            <div className="hero-shade" />
            <svg className="hero-mesh" viewBox="0 0 1200 800" preserveAspectRatio="xMidYMid slice">
              <defs>
                <radialGradient id="glow" cx="50%" cy="55%" r="55%">
                  <stop offset="0%" stopColor="#7eb6ff" stopOpacity="0.22" />
                  <stop offset="100%" stopColor="#7eb6ff" stopOpacity="0" />
                </radialGradient>
              </defs>
              <rect width="1200" height="800" fill="url(#glow)" />
              <g stroke="rgba(230,236,245,0.22)" strokeWidth="0.7" fill="none">
                <path d="M80 620 L260 480 L420 540 L610 360 L790 430 L980 250 L1140 320" />
                <path d="M40 340 L220 280 L390 360 L560 220 L740 280 L930 140 L1120 200" />
                <path d="M140 720 L310 640 L500 690 L680 520 L860 590 L1040 430" />
                <path d="M260 480 L260 280 M610 360 L560 220 M790 430 L740 280 M420 540 L390 360" />
              </g>
              <g fill="#e8eef6">
                {[
                  [80, 620],
                  [260, 480],
                  [420, 540],
                  [610, 360],
                  [790, 430],
                  [980, 250],
                  [1140, 320],
                  [220, 280],
                  [390, 360],
                  [560, 220],
                  [740, 280],
                  [930, 140],
                  [310, 640],
                  [680, 520],
                  [860, 590],
                ].map(([x, y]) => (
                  <circle key={`${x}-${y}`} cx={x} cy={y} r="2.4" />
                ))}
              </g>
            </svg>
          </div>

          <div className="hero-copy">
            <p className="eyebrow light">Faradon, Inc.</p>
            <h1>
              Where energy
              <br />
              meets intelligence.
            </h1>
            <p className="lede">
              We build AI for the work that still sits between a power project
              and the grid. Our first product,{" "}
              <a href={GRIDPILOT} target="_blank" rel="noreferrer">
                GridPilot
              </a>
              , turns an interconnection filing from a 4–8 week engagement into
              one working session. LoadPro, for large-load filings, is next.
            </p>
            <div className="hero-cta">
              <a
                className="btn btn-light"
                href={GRIDPILOT}
                target="_blank"
                rel="noreferrer"
              >
                Visit GridPilot
              </a>
              <a className="btn btn-outline" href="#contact">
                Talk to us
              </a>
            </div>
          </div>

          <div className="hero-metrics-wrap">
            <p className="hero-metrics-label">On GridPilot today</p>
            <dl className="hero-metrics">
              <div>
                <dt>7 ISOs</dt>
                <dd>CAISO through ISO-NE, one workspace</dd>
              </div>
              <div>
                <dt>Minutes</dt>
                <dd>Not weeks from kickoff to packet</dd>
              </div>
              <div>
                <dt>1,000+</dt>
                <dd>Validated data points per filing</dd>
              </div>
            </dl>
          </div>
        </section>

        <div className="ticker" aria-label="GridPilot ISO coverage">
          <p>GridPilot is built on the ISO&apos;s own requirements</p>
          <div className="ticker-track">
            <ul>
              {ISOS.map((iso) => (
                <li key={iso}>{iso}</li>
              ))}
            </ul>
          </div>
        </div>

        <section className="section company" id="company">
          <div className="wrap">
            <Reveal>
              <p className="eyebrow">The company</p>
              <h2>
                The queue is growing. Filing still runs at consulting speed.
              </h2>
            </Reveal>
            <Reveal className="company-grid">
              <p className="company-lead">
                Faradon, Inc. builds software for the power system — starting
                with the documents, models, and validations that decide whether
                a project enters an ISO queue, or waits a year.
              </p>
              <div className="company-aside">
                <p>
                  That work is still sold as a bespoke engagement. Each request,
                  and each revision, is assembled by hand. Cluster windows do
                  not move.
                </p>
                <p>
                  We apply AI where it compounds — intake, reconciliation,
                  packet generation — and keep a licensed engineer on every
                  assumption that gets filed.{" "}
                  <a href={GRIDPILOT} target="_blank" rel="noreferrer">
                    GridPilot
                  </a>{" "}
                  is in market. LoadPro — large-load filings — is coming next.
                  Further products remain in stealth.
                </p>
              </div>
            </Reveal>
          </div>
        </section>

        <section className="section platforms" id="product">
          <div className="wrap">
            <Reveal className="section-head">
              <div>
                <p className="eyebrow">Products</p>
                <h2>GridPilot and LoadPro</h2>
              </div>
              <p className="section-intro">
                GridPilot is in market. LoadPro is next — large-load filings,
                not yet public.
              </p>
            </Reveal>

            <Reveal>
              <article className="flagship">
                <div className="flagship-media">
                  <img src="/images/solar.jpg" alt="Utility-scale solar array" />
                  <span className="badge">In market</span>
                </div>
                <div className="flagship-body">
                  <p className="eyebrow">GridPilot</p>
                  <h3>Kickoff documents to a filing packet</h3>
                  <p>
                    Upload the lease, workbook, and vendor specs. GridPilot
                    traces every value, validates it against the ISO rule pack,
                    and writes the packet in one session.
                  </p>
                  <ul className="checklist">
                    <li>Source-traced intake; every field editable</li>
                    <li>CAISO, PJM, MISO, ERCOT, SPP, NYISO, ISO-NE</li>
                    <li>Ready for e-sign and queue submission</li>
                  </ul>
                  <div className="hero-cta">
                    <a
                      className="btn btn-solid"
                      href={GRIDPILOT}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Open GridPilot
                    </a>
                    <a
                      className="btn btn-ghost-dark"
                      href={GRIDPILOT_DEMO}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Run the Ravenwood demo
                    </a>
                  </div>
                </div>
              </article>
            </Reveal>

            <Reveal>
              <article className="flagship coming">
                <div className="flagship-media">
                  <img
                    src="/images/earth.jpg"
                    alt="Earth at night, showing the load on the grid"
                  />
                  <span className="badge">Coming soon</span>
                </div>
                <div className="flagship-body">
                  <p className="eyebrow">LoadPro</p>
                  <h3>Large load filings, ready to file</h3>
                  <p>
                    Upload your documents. LoadPro writes the filing — AI-guided
                    large-load interconnection for data centers and industrial
                    offtake.
                  </p>
                  <ul className="checklist">
                    <li>AI-guided large-load filing</li>
                    <li>A Faradon product</li>
                    <li>Not yet public</li>
                  </ul>
                  <p className="coming-note">Available when it ships.</p>
                </div>
              </article>
            </Reveal>

            <p className="stealth-note">
              Additional Faradon products remain in stealth.
            </p>
          </div>
        </section>

        <section className="section markets" id="markets">
          <div className="wrap">
            <Reveal className="section-head">
              <div>
                <p className="eyebrow">Who we serve</p>
                <h2>The teams who have to file on time.</h2>
              </div>
              <p className="section-intro light">
                GridPilot serves developers, storage, and advisors today.
                LoadPro is for large-load teams — coming soon.
              </p>
            </Reveal>
            <Reveal>
              <ul className="market-list">
                <li>
                  <span>01</span>
                  <div>
                    <h3>Power developers</h3>
                    <p>
                      Keep cluster windows. File CAISO, PJM, MISO, ERCOT and
                      more from one workspace, with engineer sign-off on
                      assumptions.
                    </p>
                  </div>
                </li>
                <li>
                  <span>02</span>
                  <div>
                    <h3>Storage &amp; hybrid</h3>
                    <p>
                      Solar + BESS packets with equipment-library matching,
                      vendor dynamic models, and reactive validation in the
                      same pass.
                    </p>
                  </div>
                </li>
                <li>
                  <span>03</span>
                  <div>
                    <h3>EPCs &amp; advisors</h3>
                    <p>
                      Compress the hand-built packet engagement. Deliver SLD,
                      load-flow, and portal fields with an assumptions log a PE
                      can review.
                    </p>
                  </div>
                </li>
                <li>
                  <span>04</span>
                  <div>
                    <h3>Large-load &amp; data centers</h3>
                    <p>
                      LoadPro — AI-guided large-load filing. Coming soon.
                    </p>
                  </div>
                </li>
              </ul>
            </Reveal>
          </div>
        </section>

        <section className="section approach" id="approach">
          <div className="wrap">
            <Reveal className="section-head">
              <div>
                <p className="eyebrow">How we work</p>
                <h2>Engineering first. AI where it compounds.</h2>
              </div>
              <p className="section-intro">
                Faradon is not a chatbot over a PDF. The product is a filing
                system: extract, validate, generate — with a human on every
                assumption that reaches an ISO.
              </p>
            </Reveal>
            <Reveal className="pillars">
              <article>
                <p className="eyebrow">Provenance</p>
                <h3>Every value traces to a page</h3>
                <p>
                  Megawatts, coordinates, and equipment ratings stay editable
                  and source-linked. Nothing is a black box at filing time.
                </p>
              </article>
              <article>
                <p className="eyebrow">Rules</p>
                <h3>The ISO&apos;s own requirements</h3>
                <p>
                  Packets are assembled against published interconnection
                  rules — not a generic checklist copied across markets.
                </p>
              </article>
              <article>
                <p className="eyebrow">Judgment</p>
                <h3>An engineer stays in the loop</h3>
                <p>
                  Software drafts. A licensed engineer signs the assumptions.
                  That is the product, not a disclaimer.
                </p>
              </article>
            </Reveal>
          </div>
        </section>

        <section className="section contact" id="contact">
          <div className="wrap contact-grid">
            <Reveal>
              <p className="eyebrow">Contact</p>
              <h2>See the product, or talk to the company.</h2>
              <p>
                Bring an ISO and a project type. We will walk a live packet —
                or start from your documents. Write to ceo@faradon.com.
              </p>
            </Reveal>
            <Reveal className="contact-cards">
              <a
                className="contact-card"
                href={CALENDLY}
                target="_blank"
                rel="noreferrer"
              >
                <span className="eyebrow">Walkthrough</span>
                <strong>Schedule 30 minutes</strong>
                <p>A working session on your ISO, or the Ravenwood example.</p>
                <span className="link-arrow">Open Calendly →</span>
              </a>
              <a
                className="contact-card"
                href={GRIDPILOT_DEMO}
                target="_blank"
                rel="noreferrer"
              >
                <span className="eyebrow">Product</span>
                <strong>Try GridPilot now</strong>
                <p>125 MW solar + storage, kickoff docs to a submission zip.</p>
                <span className="link-arrow">Open the guided demo →</span>
              </a>
              <a
                className="contact-card"
                href={`mailto:${EMAIL}?subject=Faradon%20inquiry`}
              >
                <span className="eyebrow">Email</span>
                <strong>{EMAIL}</strong>
                <p>Company, partnership, or filing questions.</p>
                <span className="link-arrow">Write to us →</span>
              </a>
            </Reveal>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="wrap footer-top">
          <div className="footer-brand">
            <Logo compact />
            <p>Where energy meets intelligence.</p>
          </div>
          <div className="footer-cols">
            <div>
              <p>Company</p>
              <a href="#company">About</a>
              <a href="#product">Products</a>
              <a href="#approach">How we work</a>
              <a href="#contact">Contact</a>
            </div>
            <div>
              <p>Products</p>
              <a href={GRIDPILOT} target="_blank" rel="noreferrer">
                GridPilot
              </a>
              <span className="footer-quiet">LoadPro — coming soon</span>
              <a href={`${GRIDPILOT}#pricing`} target="_blank" rel="noreferrer">
                Pricing
              </a>
              <a href={GRIDPILOT_DEMO} target="_blank" rel="noreferrer">
                Guided demo
              </a>
              <a href={`${GRIDPILOT}app#/login`} target="_blank" rel="noreferrer">
                Sign in
              </a>
            </div>
            <div>
              <p>Who we serve</p>
              <a href="#markets">Power developers</a>
              <a href="#markets">Storage &amp; hybrid</a>
              <a href="#markets">EPCs &amp; advisors</a>
              <a href="#markets">Large load</a>
            </div>
            <div>
              <p>Legal</p>
              <a href={`${GRIDPILOT}privacy`} target="_blank" rel="noreferrer">
                Privacy
              </a>
              <a href={`${GRIDPILOT}terms`} target="_blank" rel="noreferrer">
                Terms
              </a>
              <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
            </div>
          </div>
        </div>
        <div className="wrap footer-bottom">
          <p>© {new Date().getFullYear()} Faradon, Inc. All rights reserved.</p>
          <p>United States</p>
        </div>
      </footer>
    </>
  );
}
