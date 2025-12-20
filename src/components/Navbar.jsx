import React, { useEffect, useState } from "react";
import { motion as Motion } from "framer-motion";

export default function Navbar({ theme = "light", onToggleTheme }) {
  const [active, setActive] = useState("#home");
  const [menuOpen, setMenuOpen] = useState(false);

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
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#services", label: "Services" },
    { href: "#projects", label: "Projects" },
    { href: "#team", label: "Team" },
    { href: "#reviews", label: "Reviews" },
    { href: "#contact", label: "Contact" }
  ];

  const scrollToSection = (hash) => {
    if (!hash || !hash.startsWith("#")) return;
    const id = hash.slice(1);
    const element = document.getElementById(id);
    if (!element) return;

    const yOffset = 90; // navbar height offset
    const y = element.getBoundingClientRect().top + window.scrollY - yOffset;

    window.scrollTo({ top: y, behavior: "smooth" });
  };

  useEffect(() => {
    const sectionIds = ["home", "about", "services", "projects", "team", "reviews", "contact"];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(`#${entry.target.id}`);
          }
        });
      },
      {
        root: null,
        rootMargin: "-40% 0px -50% 0px",
        threshold: 0.3
      }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

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
      <div className="navbar-inner">
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
        <div
          className={
            "navbar-links" + (menuOpen ? " mobile-open" : "")
          }
        >
          {links.map((l, index) => (
            <Motion.a
              key={l.href}
              href={l.href}
              style={{
                ...linkStyle,
                ...(active === l.href
                  ? {
                      background: "var(--link-hover-bg)",
                      color: "var(--accent)",
                      boxShadow: "0 4px 12px var(--link-hover-shadow)"
                    }
                  : null)
              }}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 + 0.3 }}
              whileHover={{
                background: "var(--link-hover-bg)",
                boxShadow: "0 4px 12px var(--link-hover-shadow)",
                color: "var(--accent)"
              }}
              whileTap={{ scale: 0.95 }}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(l.href);
                setActive(l.href);
                setMenuOpen(false);
              }}
            >
              {l.label}
            </Motion.a>
          ))}
        </div>

        <button
          className="navbar-menu-toggle"
          aria-label="Toggle navigation menu"
          onClick={() => setMenuOpen((prev) => !prev)}
          style={{
            marginLeft: "auto",
            borderRadius: "999px",
            border: "1px solid var(--border-strong)",
            background: "var(--surface-1)",
            color: "var(--text-primary)",
            padding: "6px 10px",
            boxShadow: "0 4px 12px rgba(0,0,0,0.08)"
          }}
        >
          <span style={{ fontSize: 18 }}>
            {menuOpen ? "✕" : "☰"}
          </span>
        </button>

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
            {theme === "light" ? "Dark Mode" : "Light Mode"}
          </span>
        </button>
      </div>
    </Motion.nav>
  );
}
