import React from "react";
import Hero3D from "../components/Hero3D";
import { motion as Motion } from "framer-motion";

// Page sections (moved out for modularity)
import About from "./About";
import Services from "./Services";
import Projects from "./Projects";
import Contact from "./Contact";
import Team from "./Team";
import Reviews from "./Reviews";

export default function Home() {
  const currentYear = new Date().getFullYear();

  return (
    <main style={{ position: "relative", zIndex: 1 }}>
      {/* HERO SECTION */}
      <section
        id="home"
        style={{
          display: "flex",
          alignItems: "center",
          minHeight: "100vh",
          paddingTop: "100px",
          paddingBottom: "80px",
          paddingLeft: "48px",
          paddingRight: "48px",
          gap: "60px",
          maxWidth: 1400,
          margin: "0 auto",
          position: "relative"
        }}
      >
        {/* Large watermark */}
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "var(--text-secondary)",
            opacity: 0.06,
            fontSize: "38vw",
            fontWeight: 800,
            letterSpacing: "-0.08em",
            pointerEvents: "none",
            userSelect: "none",
            zIndex: 0
          }}
        >
          {currentYear}
        </div>

        {/* LEFT CONTENT */}
        <Motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          style={{ flex: "0 0 45%", maxWidth: "600px", zIndex: 2 }}
        >
          <Motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            style={{
              display: "inline-block",
              padding: "8px 20px",
              borderRadius: "20px",
            background: "var(--link-hover-bg)",
            border: "1px solid var(--border)",
              marginBottom: "24px",
              fontSize: "14px",
              fontWeight: 600,
            color: "var(--accent)",
              textTransform: "uppercase",
              letterSpacing: "1px"
            }}
          >
            Gale Grid
          </Motion.div>

          <Motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            style={{ 
              fontSize: "clamp(42px, 7vw, 72px)", 
              lineHeight: 1.1,
              marginBottom: "24px",
              fontWeight: 800
            }}
          >
            We Build High-Impact
            <br />
            <span style={{ 
              background: "linear-gradient(135deg, var(--accent) 0%, var(--accent-2) 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text"
            }}>
              Web &amp; Mobile Experiences
            </span>
          </Motion.h1>

          <Motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            style={{ 
              marginTop: 24, 
              color: "var(--text-secondary)",
              fontSize: "18px",
              lineHeight: 1.7,
              maxWidth: "600px"
            }}
          >
            Modern, scalable websites and mobile applications designed to grow your
            business, improve user engagement, and increase conversions.
          </Motion.p>

          <Motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            style={{ marginTop: 40, display: "flex", gap: 20 }}
          >
            <a href="#projects">
              <button>View Projects</button>
            </a>
            <button
              style={{
              background: "transparent",
              border: "2px solid var(--border-strong)",
              color: "var(--accent)",
              boxShadow: "none"
              }}
              onMouseEnter={(e) => {
              e.target.style.background = "var(--link-hover-bg)";
              e.target.style.boxShadow = "0 4px 16px var(--link-hover-shadow)";
              }}
              onMouseLeave={(e) => {
                e.target.style.background = "transparent";
                e.target.style.boxShadow = "none";
              }}
            >
              Learn More
            </button>
          </Motion.div>
        </Motion.div>

        {/* RIGHT 3D - FULL HEIGHT */}
        <Motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          style={{ 
            flex: 1,
            height: "100vh",
            position: "relative",
            zIndex: 1,
            marginTop: "-100px",
            marginBottom: "-80px"
          }}
        >
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: "500px",
              height: "500px",
              borderRadius: "50%",
              background: "radial-gradient(circle, rgba(74, 144, 226, 0.15) 0%, transparent 70%)",
              filter: "blur(60px)",
              zIndex: 0,
              animation: "pulse 4s ease-in-out infinite"
            }}
          />
          <div style={{ position: "relative", zIndex: 1, width: "100%", height: "106%" }}>
            <Hero3D 
              cameraPosition={[0, 1.4, 5.6]}
              robotScale={1.7}
              robotPosition={[0, -0.6, 0]}
              showAutoRotate={false}
            />
          </div>
        </Motion.div>

      </section>

      {/* ABOUT SECTION */}
      <About />

      {/* SERVICES SECTION */}
      <Services />

      {/* PROJECTS SECTION */}
      <Projects />

      {/* TEAM SECTION */}
      <Team />

      {/* REVIEWS SECTION */}
      <Reviews />
      {/* CONTACT SECTION moved to separate component */}
      <Contact />
    </main>
  );
}
