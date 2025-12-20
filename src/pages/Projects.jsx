import React from "react";
import Section from "../components/Section";
import { motion as Motion } from "framer-motion";
import { defaultProjects } from "../data/siteData";

export default function Projects() {
  const containerVariants = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.1 } } };
  const itemVariants = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } };

  return (
    <Section id="projects" title="Featured Projects">
      <Motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: 32 }}>
        {defaultProjects.map((project, index) => (
          <Motion.div key={index} variants={itemVariants} whileHover={{ y: -8, scale: 1.02, transition: { duration: 0.3 } }} style={{ minHeight: 320, borderRadius: "20px", border: "1px solid var(--border)", background: "var(--card-surface)", backdropFilter: "blur(10px)", boxShadow: "var(--shadow-md)", padding: "24px 24px 28px", display: "flex", flexDirection: "column", justifyContent: "space-between", cursor: "pointer", position: "relative", overflow: "hidden" }}>
            <div>
              {project.thumbnailUrl ? (
                <div className="project-card-media" style={{ marginBottom: 20, borderRadius: 14, overflow: "hidden", border: "1px solid var(--border)", background: "var(--overlay-1)", height: 180, position: "relative" }}>
                  <img src={project.thumbnailUrl} alt={project.title} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
                  {project.demoUrl && (
                    <div className="project-card-media-overlay">
                      <button type="button" onClick={(e) => { e.stopPropagation(); window.open(project.demoUrl, "_blank", "noopener,noreferrer"); }} style={{ padding: "10px 26px", fontSize: "14px", borderRadius: 999, background: "linear-gradient(135deg, var(--accent) 0%, var(--accent-2) 100%)", color: "#fff", border: "none", boxShadow: "0 10px 25px rgba(0,0,0,0.45)", cursor: "pointer", letterSpacing: "0.08em", textTransform: "uppercase" }}>Watch demo</button>
                    </div>
                  )}
                </div>
              ) : null}
              <h3 style={{ marginBottom: 12, fontSize: "22px", fontWeight: 700, color: "var(--text-primary)" }}>{project.title}</h3>
              <p style={{ color: "var(--text-secondary)", lineHeight: 1.6, fontSize: "15px" }}>{project.desc}</p>
            </div>
            <div style={{ alignSelf: "flex-start", display: "flex", gap: 12, marginTop: 24, flexWrap: "wrap" }}>
              {project.githubUrl && (
                <a href={project.githubUrl} target="_blank" rel="noreferrer" style={{ textDecoration: "none" }}>
                  <button type="button" style={{ padding: "10px 24px", fontSize: "14px", background: "transparent", border: "1px solid var(--border-strong)", color: "var(--accent)" }}>View Code</button>
                </a>
              )}
            </div>
          </Motion.div>
        ))}
      </Motion.div>
    </Section>
  );
}
