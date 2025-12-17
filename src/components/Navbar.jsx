import { motion as Motion } from "framer-motion";

export default function Navbar() {
  const linkStyle = {
    color: "#fff",
    textDecoration: "none",
    opacity: 0.85,
    fontSize: "14px",
    fontWeight: 500,
    letterSpacing: "0.5px",
    padding: "8px 16px",
    borderRadius: "8px",
    transition: "all 0.3s ease",
    position: "relative"
  };

  const links = [
    { href: "#about", label: "About" },
    { href: "#services", label: "Services" },
    { href: "#projects", label: "Projects" },
    { href: "#reviews", label: "Reviews" },
    { href: "#contact", label: "Contact" }
  ];

  return (
    <Motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      style={{
        padding: "20px 48px",
        position: "fixed",
        width: "100%",
        top: 0,
        zIndex: 1000,
        background: "rgba(10, 10, 15, 0.7)",
        backdropFilter: "blur(20px) saturate(180%)",
        WebkitBackdropFilter: "blur(20px) saturate(180%)",
        borderBottom: "1px solid rgba(0, 240, 255, 0.2)",
        boxShadow: "0 8px 32px rgba(0, 0, 0, 0.3)"
      }}
    >
      <div style={{ 
        display: "flex", 
        alignItems: "center", 
        gap: 32,
        maxWidth: "1400px",
        margin: "0 auto"
      }}>
        <Motion.h3 
          style={{ 
            marginRight: "auto",
            fontSize: "24px",
            fontWeight: 800,
            fontFamily: "'Orbitron', sans-serif",
            background: "linear-gradient(135deg, #00f0ff 0%, #b026ff 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text"
          }}
          whileHover={{ scale: 1.05 }}
        >
          RoboStudio
        </Motion.h3>
        {links.map((l, index) => (
          <Motion.a
            key={l.href}
            href={l.href}
            style={linkStyle}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 + 0.3 }}
            whileHover={{
              opacity: 1,
              background: "rgba(0, 240, 255, 0.1)",
              boxShadow: "0 0 15px rgba(0, 240, 255, 0.3)"
            }}
            whileTap={{ scale: 0.95 }}
          >
            {l.label}
          </Motion.a>
        ))}
      </div>
    </Motion.nav>
  );
}
