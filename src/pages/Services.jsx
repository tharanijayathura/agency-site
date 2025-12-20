import React from "react";
import Section from "../components/Section";
import { motion as Motion } from "framer-motion";

export default function Services() {
  function ServiceIcon({ type }) {
    const common = { width: 40, height: 40, viewBox: "0 0 24 24", fill: "none" };
    switch (type) {
      case "web":
        // Browser window icon
        return (
          <svg {...common}>
            <rect x="3" y="4" width="18" height="14" rx="2" stroke="var(--accent)" strokeWidth="1.6" />
            <circle cx="7" cy="8" r="1" fill="var(--accent)" />
            <circle cx="10" cy="8" r="1" fill="var(--accent)" />
            <circle cx="13" cy="8" r="1" fill="var(--accent)" />
            <rect x="6" y="11" width="12" height="5" rx="1" stroke="var(--accent)" strokeWidth="1.2" />
          </svg>
        );
      case "interactive":
        // 3D cube icon
        return (
          <svg {...common}>
            <path d="M12 3L20 7.5V16.5L12 21L4 16.5V7.5L12 3Z" stroke="var(--accent)" strokeWidth="1.6" />
            <path d="M12 3V12L20 7.5" stroke="var(--accent)" strokeWidth="1.2" />
            <path d="M12 12L4 7.5" stroke="var(--accent)" strokeWidth="1.2" />
          </svg>
        );
      case "brand":
        // Spark/star icon
        return (
          <svg {...common}>
            <path d="M12 3L13.8 8.2L19 10L13.8 11.8L12 17L10.2 11.8L5 10L10.2 8.2L12 3Z" fill="var(--accent)" opacity="0.8" />
          </svg>
        );
      case "performance":
        // Gauge/speedometer icon
        return (
          <svg {...common}>
            <path d="M12 5C7.58 5 4 8.58 4 13C4 17.42 7.58 21 12 21C16.42 21 20 17.42 20 13" stroke="var(--accent)" strokeWidth="1.6" />
            <path d="M12 13L17 9" stroke="var(--accent)" strokeWidth="1.6" strokeLinecap="round" />
            <circle cx="12" cy="13" r="1.5" fill="var(--accent)" />
          </svg>
        );
      default:
        return null;
    }
  }
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  const services = [
    { type: "web", title: "Web Apps", desc: "End-to-end delivery with modern tooling and best practices.", gradient: "linear-gradient(135deg, rgba(74, 144, 226, 0.1), rgba(74, 144, 226, 0.05))" },
    { type: "interactive", title: "3D/Interactive", desc: "Immersive 3D experiences that engage and captivate users.", gradient: "linear-gradient(135deg, rgba(135, 206, 235, 0.15), rgba(135, 206, 235, 0.05))" },
    { type: "brand", title: "Brand Sites", desc: "Stunning brand experiences that tell your unique story.", gradient: "linear-gradient(135deg, rgba(255, 107, 107, 0.1), rgba(255, 107, 107, 0.05))" },
    { type: "performance", title: "Performance/SEO", desc: "Lightning-fast sites optimized for search and conversion.", gradient: "linear-gradient(135deg, rgba(46, 92, 138, 0.1), rgba(46, 92, 138, 0.05))" }
  ];

  return (
    <Section id="services" title="Our Services">
      <Motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 24 }}>
        {services.map((service, index) => (
          <Motion.div key={index} variants={itemVariants} whileHover={{ y: -8, transition: { duration: 0.3 } }} style={{ padding: "40px", borderRadius: "20px", background: "var(--card-surface)", backdropFilter: "blur(20px) saturate(180%)", border: "1px solid var(--border)", boxShadow: "var(--shadow-md)", cursor: "pointer", transition: "all 0.3s ease", position: "relative", overflow: "hidden" }}>
            <div style={{ marginBottom: 20, filter: "drop-shadow(0 2px 4px rgba(74, 144, 226, 0.2))" }}>
              <ServiceIcon type={service.type} />
            </div>
            <h3 style={{ marginBottom: 12, fontSize: "22px", fontWeight: 700, color: "var(--text-primary)" }}>{service.title}</h3>
            <p style={{ color: "var(--text-secondary)", lineHeight: 1.6, fontSize: "15px" }}>{service.desc}</p>
          </Motion.div>
        ))}
      </Motion.div>
    </Section>
  );
}
