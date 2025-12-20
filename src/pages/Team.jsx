import React from "react";
import { motion as Motion } from "framer-motion";
import Section from "../components/Section";
import SocialIcon from "../components/SocialIcon";
import { defaultTeamMembers } from "../data/siteData";

export default function Team() {
  return (
    <Section id="team" title="Our Team">
      <Motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <p style={{ textAlign: "center", color: "var(--text-secondary)", marginBottom: 60, fontSize: 16 }}>
          Meet the talented individuals behind our innovative solutions
        </p>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 32, maxWidth: 1200, margin: "0 auto" }}>
          {defaultTeamMembers.map((member, index) => (
            <Motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              style={{ padding: 32, borderRadius: 20, background: "var(--card-surface)", backdropFilter: "blur(20px) saturate(180%)", border: `1px solid ${member.borderColor}`, boxShadow: "var(--shadow-md)", textAlign: "center", cursor: "pointer", transition: "all 0.3s ease", position: "relative", overflow: "hidden" }}
            >
              <div style={{ width: 100, height: 100, borderRadius: "50%", margin: "0 auto 24px", background: `linear-gradient(135deg, ${member.borderColor.replace('0.3', '0.4')}, ${member.borderColor.replace('0.3', '0.2')})`, boxShadow: `0 8px 32px ${member.borderColor}`, position: "relative", overflow: "hidden", display: "flex", alignItems: "center", justifyContent: "center" }}>
                {member.imageUrl ? (
                  <img src={member.imageUrl} alt={member.name} style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "50%" }} />
                ) : (
                  <span style={{ fontSize: 32, fontWeight: 700, color: "var(--accent)" }}>{member.initials}</span>
                )}
              </div>

              <h3 style={{ fontSize: 22, fontWeight: 700, marginBottom: 8, color: "var(--text-primary)" }}>{member.name}</h3>
              <p style={{ fontSize: 14, fontWeight: 600, marginBottom: 16, opacity: 0.9, background: `linear-gradient(135deg, ${member.borderColor.replace('0.3', '1')}, ${member.borderColor.replace('0.3', '0.7')})`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>{member.role}</p>
              <p style={{ fontSize: 14, lineHeight: 1.6, color: "var(--text-secondary)", marginTop: 12 }}>{member.bio}</p>

              <div style={{ display: "flex", justifyContent: "center", gap: 16, marginTop: 24, paddingTop: 24, borderTop: `1px solid ${member.borderColor.replace('0.3', '0.2')}` }}>
                {[{ key: "linkedin", url: member.linkedinUrl }, { key: "github", url: member.githubUrl }, { key: "facebook", url: member.facebookUrl }, { key: "portfolio", url: member.portfolioUrl }, { key: "cv", url: member.cvUrl }]
                  .filter((s) => s.url)
                  .map((social, i) => (
                    <a key={social.key + i} href={social.url} target="_blank" rel="noreferrer" style={{ textDecoration: "none" }}>
                      <Motion.div
                        whileHover={{ scale: 1.2, rotate: 5 }}
                        whileTap={{ scale: 0.9 }}
                        style={{ width: 36, height: 36, borderRadius: 8, background: "var(--link-hover-bg)", border: `1px solid ${member.borderColor.replace('0.3', '0.2')}`, display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", transition: "all 0.3s ease" }}
                        onMouseEnter={(e) => { e.currentTarget.style.background = member.borderColor.replace('0.3', '0.15'); e.currentTarget.style.borderColor = member.borderColor; e.currentTarget.style.boxShadow = `0 0 15px ${member.borderColor}`; }}
                        onMouseLeave={(e) => { e.currentTarget.style.background = "rgba(74, 144, 226, 0.05)"; e.currentTarget.style.borderColor = member.borderColor.replace('0.3', '0.2'); e.currentTarget.style.boxShadow = "none"; }}
                      >
                        <SocialIcon type={social.key} />
                      </Motion.div>
                    </a>
                  ))}
              </div>
            </Motion.div>
          ))}
        </div>
      </Motion.div>
    </Section>
  );
}
