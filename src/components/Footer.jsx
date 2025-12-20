import React from "react";
import { motion as Motion } from "framer-motion";
import SocialIcon from "./SocialIcon";
import { contactInfo } from "../data/siteData";

export default function Footer() {
  const year = 2025;

  const linkStyle = { color: "var(--text-secondary)", textDecoration: "none" };
  const cardStyle = {
    padding: 20,
    borderRadius: 12,
    background: "transparent",
    border: "none"
  };

  return (
    <footer style={{
      padding: "48px 36px 0",
      color: "#E8F0F8",
      borderTop: "1px solid var(--border)",
      background: "linear-gradient(to top, rgba(0,0,0,0.38), rgba(52, 121, 190, 0.76) 60%), url('/models/foot.jpg') center bottom / cover no-repeat, url('/assets/footer/foot.svg') center bottom / cover no-repeat",
    }}>
      <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr", gap: 32, maxWidth: 1400, margin: "0 auto" }}>
        <div style={cardStyle}>
          <Motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <div style={{ fontSize: 20, fontWeight: 800, color: "var(--text-primary)", letterSpacing: "0.02em" }}>Gale Grid</div>
            <p style={{ marginTop: 8 }}>Building high-impact web and mobile experiences.</p>
          </Motion.div>
        </div>

        <div style={cardStyle}>
          <h4 style={{ color: "#FFFFFF", marginBottom: 8, fontSize: 14, textTransform: "uppercase", letterSpacing: "0.09em" }}>Links</h4>
          <div style={{ width: "80%", height: 1, background: "rgba(255,255,255,0.5)", margin: "0 0 12px 0" }} />
          <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "grid", gap: 8 }}>
            {[ 
              { label: "Home", href: "#home" },
              { label: "About", href: "#about" },
              { label: "Services", href: "#services" },
              { label: "Projects", href: "#projects" },
              { label: "Team", href: "#team" },
              { label: "Contact", href: "#contact" }
            ].map((l) => (
              <li key={l.label}><a href={l.href} style={{ ...linkStyle, color: "#E8F0F8" }}>{l.label}</a></li>
            ))}
          </ul>
        </div>

        <div style={cardStyle}>
          <h4 style={{ color: "#FFFFFF", marginBottom: 8, fontSize: 14, textTransform: "uppercase", letterSpacing: "0.09em" }}>Links</h4>
          <div style={{ width: "80%", height: 1, background: "rgba(255,255,255,0.5)", margin: "0 0 12px 0" }} />
          <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "grid", gap: 8 }}>
            {[
              "Web Development",
              "Mobile App Development",
              "UI/UX Design",
              "Backend & APIs",
              "Performance & SEO"
            ].map((label) => (
              <li key={label}><a href="#services" style={{ ...linkStyle, color: "#E8F0F8" }}>{label}</a></li>
            ))}
          </ul>
        </div>

        <div style={cardStyle}>
          <h4 style={{ color: "#FFFFFF", marginBottom: 8, fontSize: 14, textTransform: "uppercase", letterSpacing: "0.09em" }}>TrafficBot.uk</h4>
          <div style={{ width: "80%", height: 1, background: "rgba(255,255,255,0.5)", margin: "0 0 12px 0" }} />
          <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "grid", gap: 8 }}>
            <li style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <span aria-hidden="true" style={{ display: "inline-flex" }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <path d="M4 6H20V18H4V6Z" stroke="currentColor" strokeWidth="1.4" />
                  <path d="M4 6L12 12L20 6" stroke="currentColor" strokeWidth="1.4" />
                </svg>
              </span>
              <a href={`mailto:${contactInfo.email}`} style={{ ...linkStyle, color: "#E8F0F8" }}>{contactInfo.email}</a>
            </li>
            {contactInfo.phone && (
              <li style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <span aria-hidden="true" style={{ display: "inline-flex" }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <path d="M6.5 4.5C7.5 3.5 9.5 3.5 10.5 4.5L12 6C12.8 6.8 12.8 8.1 12 8.9L11 9.9C11.7 11.7 13.3 13.3 15.1 14L16.1 13C16.9 12.2 18.2 12.2 19 13L20.5 14.5C21.5 15.5 21.5 17.5 20.5 18.5C18.6 20.4 15.4 20.2 12.6 18.4C9.8 16.6 7.4 14.2 5.6 11.4C3.8 8.6 3.6 5.4 5.5 3.5Z" stroke="currentColor" strokeWidth="1.4" />
                  </svg>
                </span>
                <span style={{ color: "#E8F0F8" }}>{contactInfo.phone}</span>
              </li>
            )}
            <li style={{ color: "#E8F0F8", display: "flex", alignItems: "center", gap: 8 }}>
              <span aria-hidden="true" style={{ display: "inline-flex" }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <path d="M12 21C12 21 5 14.97 5 10.5C5 7.46 7.46 5 10.5 5C12.43 5 14.17 5.99 15.16 7.53C16.15 9.07 16.16 11.03 15.18 12.57C14.2 14.11 12 16 12 16C12 16 9.8 14.11 8.82 12.57" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
                  <circle cx="10.5" cy="10.5" r="2.5" stroke="currentColor" strokeWidth="1.4" />
                </svg>
              </span>
              {contactInfo.location}
            </li>
          </ul>
          <div style={{ display: "flex", gap: 12, marginTop: 12 }}>
            {[
              { key: "linkedin", href: "#" },
              { key: "github", href: "#" },
              { key: "portfolio", href: "#" }
            ].map((s) => (
              <a
                key={s.key}
                href={s.href}
                aria-label={s.key}
                style={{
                  display: "inline-flex",
                  width: 36,
                  height: 36,
                  borderRadius: 18,
                  alignItems: "center",
                  justifyContent: "center",
                  background: "rgba(255,255,255,0.08)",
                  border: "1px solid rgba(255,255,255,0.15)",
                  color: "#E8F0F8"
                }}
              >
                <SocialIcon type={s.key} />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div style={{ marginTop: 24, borderTop: "1px solid rgba(255,255,255,0.15)", padding: "16px 0" }}>
        <div style={{ maxWidth: 1400, margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between", gap: 12, flexWrap: "wrap", color: "#E8F0F8" }}>
          <div>© {year} Gale Grid. All rights reserved.</div>
          <div style={{ display: "flex", gap: 16 }}>
            <a href="#" style={{ ...linkStyle, color: "#E8F0F8" }}>Privacy Policy</a>
            <a href="#" style={{ ...linkStyle, color: "#E8F0F8" }}>Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
  
