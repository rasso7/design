import Image from "next/image";

export default function Home() {
  return (
    <div
      style={{ background: "#f0f0eb", minHeight: "100vh", fontFamily: "'Inter', 'Helvetica Neue', Arial, sans-serif" }}
    >
      <style>{`
        @media (max-width: 768px) {
          .nav-links { display: none !important; }
          .nav-bar { padding: 16px 20px !important; }
          .book-btn { padding: 9px 16px !important; font-size: 11px !important; }
          .hero-section {
            flex-direction: column !important;
            padding: 24px 20px 40px 20px !important;
            min-height: unset !important;
            align-items: flex-start !important;
          }
          .hero-left {
            max-width: 100% !important;
            width: 100% !important;
            order: 1;
            text-align: center;
            align-items: center;
          }
          .hero-tag { justify-content: center !important; }
          .email-cta { justify-content: center !important; }
          .hero-left h1 {
            font-size: 48px !important;
          }
          .hero-tag { margin-top: 16px !important; }
          .hero-center {
            order: 2;
            width: 100% !important;
            flex: unset !important;
            margin-top: 24px;
          }
          .hero-center img {
            width: 280px !important;
            height: 280px !important;
          }
          .right-annotations { display: none !important; }
          .email-cta input { width: 150px !important; }
        }
        @media (min-width: 1280px) {
          .nav-bar { padding: 0 160px !important; }
        }
      `}</style>

      {/* NAVBAR */}
      <nav
        className="nav-bar"
        style={{
          background: "#f0f0eb",
          padding: "0 80px",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            maxWidth: "1280px",
            margin: "0 auto",
            padding: "22px 0",
          }}
        >
          {/* Logo left */}
          <div style={{ display: "flex", alignItems: "center" }}>
            <Image
              src="/logo.png"
              alt="Main Logo"
              width={32}
              height={32}
              style={{ objectFit: "contain" }}
              priority
            />
          </div>

          {/* Nav links center */}
          <div className="nav-links" style={{ display: "flex", gap: "40px", alignItems: "center" }}>
            {["SERVICES", "HOW IT WORKS", "ABOUT US", "FAQs"].map((item) => (
              <a
                key={item}
                href="#"
                style={{
                  color: "#1c1c1c",
                  fontSize: "13px",
                  fontWeight: 500,
                  letterSpacing: "0.04em",
                  textDecoration: "none",
                  fontFamily: "'Inter', sans-serif",
                }}
              >
                {item}
              </a>
            ))}
          </div>

          {/* Book a call button */}
          <a
            href="#"
            className="book-btn"
            style={{
              border: "1.5px solid #b8d400",
              color: "#b8d400",
              background: "transparent",
              borderRadius: "50px",
              padding: "11px 24px",
              fontSize: "13px",
              fontWeight: 600,
              letterSpacing: "0.04em",
              textDecoration: "none",
              display: "flex",
              alignItems: "center",
              gap: "8px",
              cursor: "pointer",
            }}
          >
            BOOK A CALL <span style={{ fontSize: "16px" }}>→</span>
          </a>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section
        className="hero-section"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "32px 48px 48px 48px",
          maxWidth: "1280px",
          margin: "0 auto",
          position: "relative",
          minHeight: "calc(100vh - 92px)",
        }}
      >
        {/* LEFT CONTENT */}
        <div className="hero-left" style={{ flex: "0 0 auto", maxWidth: "480px", zIndex: 2 }}>
          {/* Tag line */}
          <div
            className="hero-tag"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              marginTop: "60px",
              marginBottom: "28px",
            }}
          >
            <span style={{ color: "#b8d400", fontSize: "16px", fontWeight: 700 }}>✦</span>
            <span
              style={{
                color: "#555",
                fontSize: "11.5px",
                fontWeight: 500,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
              }}
            >
              Full Stack Generative AI Solutions
            </span>
          </div>

          {/* Main headline */}
          <h1
            style={{
              fontSize: "72px",
              fontWeight: 600,
              lineHeight: 1.0,
              color: "#1c1c1c",
              margin: "0 0 0 0",
              letterSpacing: "-0.02em",
              textTransform: "uppercase",
            }}
          >
            TRANSFORM
            <br />
            WORK WITH
            <br />
            <span style={{ color: "#b8d400" }}>GENAI</span>
            <span
              style={{
                color: "#1c1c1c",
                fontSize: "28px",
                fontWeight: 400,
                marginLeft: "16px",
                letterSpacing: "0.05em",
                verticalAlign: "middle",
              }}
            >
              <svg width="80" height="28" viewBox="0 0 80 28" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ display: "inline-block", verticalAlign: "middle" }}>
                <line x1="74" y1="14" x2="4" y2="14" stroke="#c8d400" strokeWidth="2" />
                <polyline points="12,6 4,14 12,22" stroke="#c8d400" strokeWidth="2" fill="none" strokeLinejoin="round" strokeLinecap="round" />
                <circle cx="76" cy="14" r="4" fill="#c8d400" />
              </svg>
            </span>
          </h1>

          {/* Body copy */}
          <p
            style={{
              color: "#555",
              fontSize: "15px",
              lineHeight: 1.75,
              marginTop: "28px",
              marginBottom: "36px",
              maxWidth: "380px",
            }}
          >
            We build intelligent systems and AI-powered
            <br />
            products that automate workflows, unlock insights,
            <br />
            and drive real business impact.
          </p>

          {/* Email + CTA */}
          <div
            className="email-cta"
            style={{
              display: "inline-flex",
              alignItems: "center",
              border: "1.5px solid #c8c8c8",
              borderRadius: "50px",
              padding: "0 0 0 20px",
              background: "#f0f0eb",
              gap: "0",
            }}
          >
            <input
              type="email"
              placeholder="name@email.com"
              style={{
                border: "none",
                background: "transparent",
                outline: "none",
                fontSize: "14px",
                color: "#555",
                fontFamily: "'Inter', sans-serif",
                width: "200px",
                padding: "6px 0",
              }}
            />
            <button
              style={{
                background: "#c8d400",
                color: "#1c1c1c",
                border: "none",
                borderRadius: "50px",
                padding: "13px 28px",
                fontSize: "12.5px",
                fontWeight: 700,
                letterSpacing: "0.07em",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                gap: "6px",
                textTransform: "uppercase",
                whiteSpace: "nowrap",
                flexShrink: 0,
              }}
            >
              CONTACT US <span style={{ fontSize: "15px", fontWeight: 400 }}>↗</span>
            </button>
          </div>

        </div>

        {/* CENTER – main logo image */}
        <div
          className="hero-center"
          style={{
            flex: "1",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            position: "relative",
            marginLeft: "130px",
          }}
        >
          <Image
            src="/main_logo.png"
            alt="Hero Visual"
            width={620}
            height={620}
            style={{ objectFit: "contain" }}
            priority
          />
        </div>

        {/* RIGHT ANNOTATIONS */}
        <div
          className="right-annotations"
          style={{
            position: "absolute",
            right: "48px",
            top: "32px",
            bottom: "48px",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-end",
            justifyContent: "space-between",
          }}
        >
          {/* Top annotation */}
          <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: "0", marginTop: "40px" }}>
            <p
              style={{
                color: "#555",
                fontSize: "10.5px",
                fontWeight: 500,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                lineHeight: 1.5,
                margin: 0,
                textAlign: "right",
              }}
            >
              AI THAT WORKS
              <br />
              FOR YOU
            </p>
          </div>

          {/* Bottom – trusted avatars */}
          <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: "8px" }}>
            <div style={{ display: "flex", alignItems: "center" }}>
              {[
                { src: "/naziya.jpeg", alt: "Naziya" },
                { src: "/rashid.jpg", alt: "Rashid" },
                { src: "/wasit.jpg", alt: "Wasit" },
              ].map((person, i) => (
                <div
                  key={i}
                  style={{
                    width: "32px",
                    height: "32px",
                    borderRadius: "50%",
                    border: "2px solid #f0f0eb",
                    marginLeft: i === 0 ? "0" : "-10px",
                    position: "relative",
                    zIndex: 3 - i,
                    overflow: "hidden",
                    flexShrink: 0,
                  }}
                >
                  <Image
                    src={person.src}
                    alt={person.alt}
                    fill
                    style={{ objectFit: "cover" }}
                  />
                </div>
              ))}
            </div>
            <p
              style={{
                color: "#555",
                fontSize: "11px",
                lineHeight: 1.5,
                margin: 0,
                textAlign: "right",
              }}
            >
              Trusted by forward-
              <br />
              thinking teams
            </p>
          </div>
        </div>
      </section>

      {/* WHAT WE DO SECTION */}
      <section
        style={{
          background: "#f8f8f4",
          padding: "60px 48px 72px 48px",
          fontFamily: "'Inter', 'Helvetica Neue', Arial, sans-serif",
        }}
      >
        <style>{`
          .wwd-card {
            background: #fff;
            border-radius: 16px;
            border: 1px solid #e8e8e0;
            padding: 28px 24px 24px 24px;
            display: flex;
            flex-direction: column;
            flex: 1;
            min-width: 0;
            transition: box-shadow 0.2s, transform 0.2s;
          }
          .wwd-card:hover {
            box-shadow: 0 8px 32px rgba(0,0,0,0.10);
            transform: translateY(-4px);
          }
          .wwd-card.active {
            border: 2px solid #b8d400;
            background: #f9fde6;
          }
          .wwd-learn {
            color: #7b2ff7;
            font-size: 12px;
            font-weight: 700;
            letter-spacing: 0.08em;
            text-decoration: none;
            display: flex;
            align-items: center;
            gap: 5px;
            margin-top: auto;
            padding-top: 18px;
            cursor: pointer;
            transition: opacity 0.15s;
          }
          .wwd-card.active .wwd-learn {
            color: #8fc400;
          }
          .wwd-card:nth-child(4) .wwd-learn {
            color: #e6700d;
          }
          .wwd-card:nth-child(5) .wwd-learn {
            color: #1a73d6;
          }
          .wwd-learn:hover { opacity: 0.75; }
          @media (max-width: 900px) {
            .wwd-grid { flex-wrap: wrap !important; }
            .wwd-card { min-width: 44% !important; flex: 0 0 44% !important; }
          }
          @media (max-width: 560px) {
            .wwd-grid { flex-direction: column !important; }
            .wwd-card { min-width: unset !important; flex: unset !important; width: 100% !important; }
          }
        `}</style>

        {/* Section header */}
        <div style={{ textAlign: "center", marginBottom: "40px" }}>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "7px",
              marginBottom: "12px",
            }}
          >
            <span style={{ color: "#b8d400", fontSize: "15px", fontWeight: 700 }}>✦</span>
            <span
              style={{
                color: "#888",
                fontSize: "11px",
                fontWeight: 600,
                letterSpacing: "0.14em",
                textTransform: "uppercase",
              }}
            >
              WHAT WE DO
            </span>
          </div>
          <h2
            style={{
              fontSize: "40px",
              fontWeight: 700,
              color: "#1c1c1c",
              margin: "0",
              letterSpacing: "-0.01em",
            }}
          >
            Intelligent Solutions. Real Impact.
          </h2>
        </div>

        {/* Cards grid */}
        <div
          className="wwd-grid"
          style={{
            display: "flex",
            gap: "16px",
            maxWidth: "1200px",
            margin: "0 auto",
          }}
        >
          {/* Card 1 – NLP */}
          <div className="wwd-card">
            <span style={{ color: "#aaa", fontSize: "11px", fontWeight: 600, letterSpacing: "0.08em", marginBottom: "8px" }}>01</span>
            <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "16px" }}>
              <span style={{ fontSize: "20px", fontWeight: 700, color: "#1c1c1c", letterSpacing: "0.04em" }}>NLP</span>
              <span style={{ color: "#7b2ff7", fontSize: "16px", fontWeight: 700 }}>✦</span>
            </div>
            <div style={{ borderRadius: "12px", overflow: "hidden", marginBottom: "20px", width: "100%", aspectRatio: "4/3", position: "relative" }}>
              <Image
                src="/Nlp.png"
                alt="NLP illustration"
                fill
                style={{ objectFit: "cover", borderRadius: "12px" }}
              />
            </div>
            <p style={{ color: "#555", fontSize: "13.5px", lineHeight: 1.65, margin: "0" }}>
              Understand, analyze and generate human like language.
            </p>
            <a className="wwd-learn" href="#">LEARN MORE →</a>
          </div>

          {/* Card 2 – Multimodal */}
          <div className="wwd-card">
            <span style={{ color: "#aaa", fontSize: "11px", fontWeight: 600, letterSpacing: "0.08em", marginBottom: "8px" }}>02</span>
            <div style={{ marginBottom: "16px" }}>
              <span style={{ fontSize: "20px", fontWeight: 700, color: "#1c1c1c", letterSpacing: "0.04em" }}>MULTIMODAL</span>
            </div>
            <div style={{ borderRadius: "12px", overflow: "hidden", marginBottom: "20px", width: "100%", aspectRatio: "4/3", position: "relative" }}>
              <Image
                src="/multimodal.png"
                alt="Multimodal illustration"
                fill
                style={{ objectFit: "cover", borderRadius: "12px" }}
              />
            </div>
            <p style={{ color: "#555", fontSize: "13.5px", lineHeight: 1.65, margin: "0" }}>
              Combine text, image, audio and more for smarter outputs.
            </p>
            <a className="wwd-learn" href="#">LEARN MORE →</a>
          </div>

          {/* Card 3 – Vision (active/highlighted) */}
          <div className="wwd-card active">
            <span style={{ color: "#8fc400", fontSize: "11px", fontWeight: 600, letterSpacing: "0.08em", marginBottom: "8px" }}>03</span>
            <div style={{ marginBottom: "16px" }}>
              <span style={{ fontSize: "20px", fontWeight: 700, color: "#8fc400", letterSpacing: "0.04em" }}>VISION</span>
            </div>
            <div style={{ borderRadius: "12px", overflow: "hidden", marginBottom: "20px", width: "100%", aspectRatio: "4/3", position: "relative" }}>
              <Image
                src="/vison.jpeg"
                alt="Vision illustration"
                fill
                style={{ objectFit: "cover", borderRadius: "12px" }}
              />
            </div>
            <p style={{ color: "#555", fontSize: "13.5px", lineHeight: 1.65, margin: "0" }}>
              See more. Detect, recognize and extract with precision.
            </p>
            <a className="wwd-learn" href="#">LEARN MORE →</a>
          </div>

          {/* Card 4 – Automation */}
          <div className="wwd-card">
            <span style={{ color: "#aaa", fontSize: "11px", fontWeight: 600, letterSpacing: "0.08em", marginBottom: "8px" }}>04</span>
            <div style={{ marginBottom: "16px" }}>
              <span style={{ fontSize: "20px", fontWeight: 700, color: "#1c1c1c", letterSpacing: "0.04em" }}>AUTOMATION</span>
            </div>
            <div style={{ borderRadius: "12px", overflow: "hidden", marginBottom: "20px", width: "100%", aspectRatio: "4/3", position: "relative" }}>
              <Image
                src="/automation.png"
                alt="Automation illustration"
                fill
                style={{ objectFit: "cover", borderRadius: "12px" }}
              />
            </div>
            <p style={{ color: "#555", fontSize: "13.5px", lineHeight: 1.65, margin: "0" }}>
              Automate workflows and scale operations effortlessly.
            </p>
            <a className="wwd-learn" href="#" style={{ color: "#e6700d" }}>LEARN MORE →</a>
          </div>

          {/* Card 5 – Security */}
          <div className="wwd-card">
            <span style={{ color: "#aaa", fontSize: "11px", fontWeight: 600, letterSpacing: "0.08em", marginBottom: "8px" }}>05</span>
            <div style={{ marginBottom: "16px" }}>
              <span style={{ fontSize: "20px", fontWeight: 700, color: "#1c1c1c", letterSpacing: "0.04em" }}>SECURITY</span>
            </div>
            <div style={{ borderRadius: "12px", overflow: "hidden", marginBottom: "20px", width: "100%", aspectRatio: "4/3", position: "relative" }}>
              <Image
                src="/security.jpeg"
                alt="Security illustration"
                fill
                style={{ objectFit: "cover", borderRadius: "12px" }}
              />
            </div>
            <p style={{ color: "#555", fontSize: "13.5px", lineHeight: 1.65, margin: "0" }}>
              Enterprise grade security for your AI powered systems.
            </p>
            <a className="wwd-learn" href="#" style={{ color: "#1a73d6" }}>LEARN MORE →</a>
          </div>
        </div>
      </section>
    </div>
  );
}
