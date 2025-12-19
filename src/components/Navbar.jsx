import { motion as Motion } from "framer-motion";

export default function Navbar({ theme = "light", onToggleTheme }) {
  const linkStyle = {
    color: "var(--text-secondary)",
    textDecoration: "none",
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
        background: "var(--nav-bg)",
        backdropFilter: "blur(20px) saturate(180%)",
        WebkitBackdropFilter: "blur(20px) saturate(180%)",
        borderBottom: "1px solid var(--border-strong)",
        boxShadow: "0 4px 16px rgba(0, 0, 0, 0.08)"
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
            background: "linear-gradient(135deg, var(--accent) 0%, var(--accent-2) 100%)",
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
              background: "var(--link-hover-bg)",
              boxShadow: "0 4px 12px var(--link-hover-shadow)",
              color: "var(--accent)"
            }}
            whileTap={{ scale: 0.95 }}
          >
            {l.label}
          </Motion.a>
        ))}
        <button
          aria-label="Toggle theme"
          onClick={onToggleTheme}
          style={{
            marginLeft: 12,
            borderRadius: "12px",
            border: "1px solid var(--border-strong)",
            background: "var(--surface-1)",
            color: "var(--text-primary)",
            padding: "8px 12px",
            display: "flex",
            alignItems: "center",
            gap: 8,
            cursor: "pointer",
            boxShadow: "0 4px 12px rgba(0,0,0,0.08)"
          }}
        >
          <span style={{ fontSize: 14, fontWeight: 600 }}>
            {theme === "light" ? "Dark" : "Light"}
          </span>
          <span>{theme === "light" ? "🌙" : "☀️"}</span>
        </button>
      </div>
    </Motion.nav>
  );
}
