import React from "react";
import Section from "../components/Section";
import { motion as Motion } from "framer-motion";
import { contactInfo } from "../data/siteData";

export default function Contact() {
  return (
    <Section id="contact" title="Get In Touch">
      <Motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} style={{ maxWidth: 600, margin: "0 auto" }}>
        {contactInfo.whatsappNumber && (
          <div style={{ display: "flex", justifyContent: "center", marginBottom: 16 }}>
            <a
              href={`https://wa.me/${contactInfo.whatsappNumber.replace(/\D/g, "")}?text=${encodeURIComponent("Hello Gale Grid, I'd like to discuss a project.")}`}
              target="_blank"
              rel="noreferrer"
            >
              <button
                type="button"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 10,
                  padding: "10px 18px",
                  borderRadius: 999,
                  background: "var(--link-hover-bg)",
                  border: "1px solid var(--border)",
                  color: "var(--text-primary)",
                  boxShadow: "var(--shadow-sm)",
                }}
                onMouseEnter={(e) => { e.currentTarget.style.boxShadow = "0 8px 24px var(--link-hover-shadow)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.boxShadow = "var(--shadow-sm)"; }}
              >
                <span aria-hidden="true" style={{ display: "inline-flex" }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                    <path d="M4 20L5.5 16C4.6 14.7 4.2 13.2 4.2 11.7C4.2 7.9 7.3 5 11.2 5C15.1 5 18.2 7.9 18.2 11.7C18.2 15.5 15.1 18.4 11.2 18.4C9.8 18.4 8.5 18 7.4 17.3L4 20Z" stroke="var(--accent)" strokeWidth="1.4" strokeLinecap="round" />
                    <path d="M9.5 10.8C9.7 11.6 10.7 12.6 11.5 12.8M11.5 12.8C12.1 13 13.2 12.6 13.4 12.2" stroke="var(--accent)" strokeWidth="1.4" strokeLinecap="round" />
                  </svg>
                </span>
                <span>Chat on WhatsApp</span>
              </button>
            </a>
          </div>
        )}
        <form onSubmit={(e) => e.preventDefault()} style={{ display: "grid", gap: 20 }}>
          <Motion.input initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} placeholder="Your name" style={{ padding: "16px 20px", borderRadius: "12px", border: "1px solid var(--border)", background: "var(--card-surface)", backdropFilter: "blur(10px)", color: "var(--text-primary)", fontSize: "15px", transition: "all 0.3s ease" }} onFocus={(e) => { e.target.style.borderColor = "var(--border-strong)"; e.target.style.boxShadow = "0 0 20px var(--link-hover-shadow)"; }} onBlur={(e) => { e.target.style.borderColor = "var(--border)"; e.target.style.boxShadow = "none"; }} />

          <Motion.input initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} placeholder="Email address" type="email" style={{ padding: "16px 20px", borderRadius: "12px", border: "1px solid var(--border)", background: "var(--card-surface)", backdropFilter: "blur(10px)", color: "var(--text-primary)", fontSize: "15px", transition: "all 0.3s ease" }} onFocus={(e) => { e.target.style.borderColor = "var(--border-strong)"; e.target.style.boxShadow = "0 0 20px var(--link-hover-shadow)"; }} onBlur={(e) => { e.target.style.borderColor = "var(--border)"; e.target.style.boxShadow = "none"; }} />

          <Motion.textarea initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }} placeholder="Tell us about your project" rows={6} style={{ padding: "16px 20px", borderRadius: "12px", border: "1px solid var(--border)", background: "var(--card-surface)", backdropFilter: "blur(10px)", color: "var(--text-primary)", fontSize: "15px", fontFamily: "inherit", resize: "vertical", transition: "all 0.3s ease" }} onFocus={(e) => { e.target.style.borderColor = "var(--border-strong)"; e.target.style.boxShadow = "0 0 20px var(--link-hover-shadow)"; }} onBlur={(e) => { e.target.style.borderColor = "var(--border)"; e.target.style.boxShadow = "none"; }} />

          <Motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.4 }}>
            <button type="submit" style={{ width: "100%" }}>Send Message</button>
          </Motion.div>

        </form>
      </Motion.div>
    </Section>
  );
}
