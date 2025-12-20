import React from "react";
import Section from "../components/Section";
import { motion as Motion } from "framer-motion";

export default function About() {
  return (
    <Section id="about" title="About Us">
      <Motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        style={{ maxWidth: "900px", margin: "0 auto", textAlign: "center" }}
      >
        <p style={{ fontSize: "18px", lineHeight: 1.8, color: "var(--text-secondary)", marginBottom: 40 }}>
          GALE GRID is a digital studio focused on high-impact web and mobile experiences. We combine modern engineering, thoughtful design, and smooth motion to build products that feel fast, intuitive, and truly memorable.
        </p>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 32, marginTop: 60, marginBottom: 80 }}>
          {[
            { number: "50+", label: "Projects Delivered" },
            { number: "30+", label: "Happy Clients" },
            { number: "100%", label: "Satisfaction Rate" }
          ].map((stat, i) => (
            <Motion.div key={i} initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} style={{ padding: "32px", borderRadius: "16px", background: "var(--card-surface)", backdropFilter: "blur(20px)", border: "1px solid var(--border)", boxShadow: "var(--shadow-md)", textAlign: "center" }}>
              <h3 style={{ fontSize: "36px", marginBottom: 8, background: "linear-gradient(135deg, var(--accent) 0%, var(--accent-2) 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>{stat.number}</h3>
              <p style={{ color: "var(--text-secondary)", fontSize: "14px" }}>{stat.label}</p>
            </Motion.div>
          ))}
        </div>

        {/* Team section moved to separate Team.jsx */}
      </Motion.div>
    </Section>
  );
}
