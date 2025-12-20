import React, { useState } from "react";
import Hero3D from "../components/Hero3D";
import { motion as Motion } from "framer-motion";

const Section = ({ id, title, children, className = "" }) => (
  <section 
    id={id} 
    className={className}
    style={{ 
      padding: "80px 36px", 
      maxWidth: 1400, 
      margin: "0 auto",
      position: "relative"
    }}
  >
    {title && (
      <Motion.h2 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        style={{ 
          fontSize: "clamp(32px, 5vw, 48px)", 
          marginBottom: 60, 
          letterSpacing: "-0.02em",
          textAlign: "center"
        }}
      >
        {title}
      </Motion.h2>
    )}
    <div>{children}</div>
  </section>
);

function SocialIcon({ type }) {
  const commonProps = {
    width: 18,
    height: 18,
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  };

  switch (type) {
    case "linkedin":
      return (
        <svg {...commonProps}>
          <rect x="3" y="3" width="18" height="18" rx="3" fill="#0A66C2" />
          <path
            d="M8 17H6V10H8V17ZM7 9C6.3 9 5.75 8.45 5.75 7.75C5.75 7.04 6.3 6.5 7 6.5C7.7 6.5 8.25 7.04 8.25 7.75C8.25 8.45 7.7 9 7 9ZM18 17H16V13.4C16 12.45 15.55 11.9 14.8 11.9C13.98 11.9 13.5 12.46 13.5 13.4V17H11.5V10H13.5V10.9C13.92 10.25 14.7 9.7 15.85 9.7C17.47 9.7 18 10.76 18 12.26V17Z"
            fill="white"
          />
        </svg>
      );
    case "github":
      return (
        <svg {...commonProps}>
          <path
            d="M12 2C6.48 2 2 6.58 2 12.18C2 16.56 4.87 20.26 8.84 21.54C9.34 21.64 9.53 21.34 9.53 21.08C9.53 20.86 9.52 20.26 9.52 19.5C7 20.02 6.35 18.55 6.35 18.55C5.9 17.42 5.23 17.12 5.23 17.12C4.31 16.5 5.3 16.52 5.3 16.52C6.31 16.6 6.84 17.66 6.84 17.66C7.74 19.31 9.29 18.84 9.9 18.58C9.99 17.9 10.26 17.43 10.55 17.19C8.53 16.95 6.4 16.12 6.4 12.73C6.4 11.75 6.74 10.95 7.31 10.33C7.22 10.09 6.92 9.15 7.39 7.86C7.39 7.86 8.15 7.61 9.52 8.63C10.24 8.42 11.01 8.32 11.78 8.32C12.55 8.32 13.32 8.42 14.04 8.63C15.41 7.61 16.17 7.86 16.17 7.86C16.64 9.15 16.34 10.09 16.25 10.33C16.83 10.95 17.16 11.75 17.16 12.73C17.16 16.13 15.02 16.94 12.99 17.18C13.36 17.49 13.69 18.11 13.69 19.06C13.69 20.36 13.68 21.46 13.68 21.74C13.68 22 13.87 22.31 14.38 22.2C18.34 20.93 21.21 17.23 21.21 12.18C21.21 6.58 16.73 2 12 2Z"
            fill="#000000"
          />
        </svg>
      );
    case "facebook":
      return (
        <svg {...commonProps}>
          <rect x="3" y="3" width="18" height="18" rx="4" fill="#1877F2" />
          <path
            d="M14 8H15.5V6H14C11.79 6 11 7.34 11 8.9V10H9.5V12H11V18H13V12H14.7L15.5 10H13V8.9C13 8.4 13.24 8 14 8Z"
            fill="white"
          />
        </svg>
      );
    case "portfolio":
      return (
        <svg {...commonProps}>
          <circle cx="12" cy="12" r="8" stroke="#4A90E2" strokeWidth="1.6" />
          <path
            d="M4 12H20M12 4C9.5 6.5 8.25 9.25 8.25 12C8.25 14.75 9.5 17.5 12 20C14.5 17.5 15.75 14.75 15.75 12C15.75 9.25 14.5 6.5 12 4Z"
            stroke="#4A90E2"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "cv":
      return (
        <svg {...commonProps}>
          <rect x="7" y="3" width="10" height="18" rx="2" fill="#111827" stroke="#4A90E2" strokeWidth="1.5" />
          <path
            d="M9.5 8.5H14.5M9.5 11H14.5M9.5 13.5H12.5"
            stroke="#4A90E2"
            strokeWidth="1.4"
            strokeLinecap="round"
          />
        </svg>
      );
    default:
      return null;
  }
}
const defaultTeamMembers = [
  {
    name: "Tharani Jayathura",
    role: "Co‑Founder & Creative Lead",
    bio: "Driving the visual direction, brand story, and overall experience of every project we ship.",
    gradient: "linear-gradient(135deg, var(--overlay-1), transparent)",
    borderColor: "rgba(74, 144, 226, 0.3)",
    initials: "TJ",
    imageUrl: "public/models/tharani.png",
    facebookUrl: "https://www.facebook.com/profile.php?id=100078636897099",
    linkedinUrl: "www.linkedin.com/in/tharani-jayathura-96235226b",
    githubUrl: "https://github.com/",
    portfolioUrl: "https://tharani-jayathura.vercel.app/",
    cvUrl: "/models/CV-Tharani.pdf"
  },
  {
    name: "Pawan Sankalpa",
    role: "Co‑Founder & Lead Developer",
    bio: "Leads the engineering, performance, and 3D implementation to keep everything fast and polished.",
    gradient: "linear-gradient(135deg, var(--overlay-1), transparent)",
    borderColor: "rgba(74, 144, 226, 0.3)",
    initials: "PS",
    imageUrl: "public/models/pawan.jpeg",
    facebookUrl: "https://www.facebook.com/",
    linkedinUrl: "https://www.linkedin.com/",
    githubUrl: "https://github.com/",
    portfolioUrl: "https://your-portfolio-link.com/",
    cvUrl: "https://your-cv-link.com/"
  }
];

const defaultProjects = [
  {
    title: "E-commerce Platform",
    desc: "High-performance online store with 3D product visualization",
    gradient:
      "linear-gradient(135deg, rgba(0, 240, 255, 0.2), rgba(176, 38, 255, 0.15))",
    githubUrl: "",
    demoUrl: "https://www.youtube.com/",
    thumbnailUrl: "/assets/projects/ecommerce.jpg"
  },
  {
    title: "Interactive Dashboard",
    desc: "Real-time data visualization with immersive 3D charts",
    gradient:
      "linear-gradient(135deg, rgba(176, 38, 255, 0.2), rgba(255, 0, 110, 0.15))",
    githubUrl: "",
    demoUrl: "https://www.youtube.com/",
    thumbnailUrl: "/assets/projects/dashboard.jpg"
  },
  {
    title: "Virtual Showroom",
    desc: "Immersive 3D environment for product exploration",
    gradient:
      "linear-gradient(135deg, rgba(255, 0, 110, 0.2), rgba(0, 240, 255, 0.15))",
    githubUrl: "",
    demoUrl: "https://www.youtube.com/",
    thumbnailUrl: "/assets/projects/showroom.jpg"
  },
  {
    title: "AI-Powered Analytics",
    desc: "Advanced analytics platform with predictive insights",
    gradient:
      "linear-gradient(135deg, rgba(67, 97, 238, 0.2), rgba(176, 38, 255, 0.15))",
    githubUrl: "",
    demoUrl: "https://www.youtube.com/",
    thumbnailUrl: "/assets/projects/analytics.jpg"
  },
  {
    title: "Cloud Infrastructure",
    desc: "Scalable cloud solutions for enterprise clients",
    gradient:
      "linear-gradient(135deg, rgba(0, 240, 255, 0.2), rgba(67, 97, 238, 0.15))",
    githubUrl: "",
    demoUrl: "https://www.youtube.com/",
    thumbnailUrl: "/assets/projects/cloud.jpg"
  },
  {
    title: "Mobile Experience",
    desc: "Cross-platform mobile apps with native performance",
    gradient:
      "linear-gradient(135deg, rgba(255, 0, 110, 0.2), rgba(0, 240, 255, 0.15))",
    githubUrl: "",
    demoUrl: "https://www.youtube.com/",
    thumbnailUrl: "/assets/projects/mobile.jpg"
  }
];

const defaultReviews = [
  {
    name: "Ava K.",
    role: "CEO, TechCorp",
    text:
      "Their attention to performance and detail made a huge difference for our conversion rates. The 3D elements are stunning and load instantly."
  },
  {
    name: "Liam N.",
    role: "Founder, StartupXYZ",
    text:
      "The 3D elements are tasteful and fast. Our site finally feels alive. The team delivered exactly what we envisioned and more."
  },
  {
    name: "Noah P.",
    role: "Director, DesignStudio",
    text:
      "Smooth delivery, great communication, and a beautiful result. Highly recommended. They transformed our vision into reality."
  }
];

export default function Home() {
  const currentYear = new Date().getFullYear();
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };
  const projects = defaultProjects;
  const teamMembers = defaultTeamMembers;

  const [reviews, setReviews] = useState(defaultReviews);
  const [newReviewName, setNewReviewName] = useState("");
  const [newReviewRole, setNewReviewRole] = useState("");
  const [newReviewText, setNewReviewText] = useState("");

  const handleAddReview = (e) => {
    e.preventDefault();
    if (!newReviewName.trim() || !newReviewRole.trim() || !newReviewText.trim()) return;
    setReviews([
      ...reviews,
      {
        name: newReviewName.trim(),
        role: newReviewRole.trim(),
        text: newReviewText.trim()
      }
    ]);
    setNewReviewName("");
    setNewReviewRole("");
    setNewReviewText("");
  };

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
      <Section id="about" title="About Us">
        <Motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          style={{
            maxWidth: "900px",
            margin: "0 auto",
            textAlign: "center"
          }}
        >
          <p style={{ 
            fontSize: "18px", 
            lineHeight: 1.8, 
            color: "var(--text-secondary)",
            marginBottom: 40
          }}>
            GALE GRID is a digital studio focused on high-impact web and mobile
            experiences. We combine modern engineering, thoughtful design, and smooth
            motion to build products that feel fast, intuitive, and truly memorable.
          </p>
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: 32,
            marginTop: 60,
            marginBottom: 80
          }}>
            {[
              { number: "50+", label: "Projects Delivered" },
              { number: "30+", label: "Happy Clients" },
              { number: "100%", label: "Satisfaction Rate" }
            ].map((stat, i) => (
              <Motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                style={{
                  padding: "32px",
                  borderRadius: "16px",
                  background: "var(--card-surface)",
                  backdropFilter: "blur(20px)",
                  border: "1px solid var(--border)",
                  boxShadow: "var(--shadow-md)",
                  textAlign: "center"
                }}
              >
                <h3 style={{ 
                  fontSize: "36px", 
                  marginBottom: 8,
                  background: "linear-gradient(135deg, var(--accent) 0%, var(--accent-2) 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text"
                }}>
                  {stat.number}
                </h3>
                <p style={{ color: "var(--text-secondary)", fontSize: "14px" }}>{stat.label}</p>
              </Motion.div>
            ))}
          </div>

          {/* TEAM MEMBERS SECTION */}
          <Motion.div
            id="team"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{ marginTop: 100 }}
          >
            <h2 style={{
              fontSize: "clamp(32px, 5vw, 48px)",
              marginBottom: 20,
              letterSpacing: "-0.02em",
              textAlign: "center"
            }}>
              Our Team
            </h2>
            <p style={{
              textAlign: "center",
              color: "var(--text-secondary)",
              marginBottom: 60,
              fontSize: "16px"
            }}>
              Meet the talented individuals behind our innovative solutions
            </p>

            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: 32,
              maxWidth: "1200px",
              margin: "0 auto"
            }}>
              {teamMembers.map((member, index) => (
                <Motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ 
                    y: -8,
                    transition: { duration: 0.3 }
                  }}
                  style={{
                    padding: "32px",
                    borderRadius: "20px",
                  background: "var(--card-surface)",
                    backdropFilter: "blur(20px) saturate(180%)",
                  border: `1px solid ${member.borderColor}`,
                  boxShadow: "var(--shadow-md)",
                    textAlign: "center",
                    cursor: "pointer",
                    transition: "all 0.3s ease",
                    position: "relative",
                    overflow: "hidden"
                  }}
                >
                  {/* Avatar: show image if available, otherwise initials */}
                  <div
                    style={{
                      width: "100px",
                      height: "100px",
                      borderRadius: "50%",
                      margin: "0 auto 24px",
                      background: `linear-gradient(135deg, ${member.borderColor.replace('0.3', '0.4')}, ${member.borderColor.replace('0.3', '0.2')})`,
                      boxShadow: `0 8px 32px ${member.borderColor}`,
                      position: "relative",
                      overflow: "hidden",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center"
                    }}
                  >
                    {member.imageUrl ? (
                      <img
                        src={member.imageUrl}
                        alt={member.name}
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                          borderRadius: "50%"
                        }}
                      />
                    ) : (
                      <span
                        style={{
                          fontSize: "32px",
                          fontWeight: 700,
                          color: "var(--accent)"
                        }}
                      >
                        {member.initials}
                      </span>
                    )}
                    <div
                      style={{
                        position: "absolute",
                        inset: "-2px",
                        borderRadius: "50%",
                        padding: "2px",
                        background: `linear-gradient(135deg, ${member.borderColor.replace('0.3', '0.6')}, transparent)`,
                        WebkitMask:
                          "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                        WebkitMaskComposite: "xor",
                        maskComposite: "exclude"
                      }}
                    />
                  </div>

                  <h3 style={{
                    fontSize: "22px",
                    fontWeight: 700,
                    marginBottom: 8,
                    color: "var(--text-primary)"
                  }}>
                    {member.name}
                  </h3>

                  <p style={{
                    fontSize: "14px",
                    fontWeight: 600,
                    marginBottom: 16,
                    opacity: 0.9,
                    background: `linear-gradient(135deg, ${member.borderColor.replace('0.3', '1')}, ${member.borderColor.replace('0.3', '0.7')})`,
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text"
                  }}>
                    {member.role}
                  </p>

                  <p style={{
                    fontSize: "14px",
                    lineHeight: 1.6,
                    color: "var(--text-secondary)",
                    marginTop: 12
                  }}>
                    {member.bio}
                  </p>

                  {/* Social Links */}
                  <div style={{
                    display: "flex",
                    justifyContent: "center",
                    gap: 16,
                    marginTop: 24,
                    paddingTop: 24,
                    borderTop: `1px solid ${member.borderColor.replace('0.3', '0.2')}`
                  }}>
                    {[
                      {
                        key: "linkedin",
                        url: member.linkedinUrl
                      },
                      {
                        key: "github",
                        url: member.githubUrl
                       },
                       {
                         key: "facebook",
                         url: member.facebookUrl
                       },
                       {
                         key: "portfolio",
                         url: member.portfolioUrl
                       },
                       {
                         key: "cv",
                         url: member.cvUrl
                      }
                    ]
                      .filter((s) => s.url)
                      .map((social, i) => (
                        <a
                          key={social.key + i}
                          href={social.url}
                          target="_blank"
                          rel="noreferrer"
                          style={{ textDecoration: "none" }}
                        >
                          <Motion.div
                            whileHover={{ scale: 1.2, rotate: 5 }}
                            whileTap={{ scale: 0.9 }}
                            style={{
                              width: "36px",
                              height: "36px",
                              borderRadius: "8px",
                              background: "var(--link-hover-bg)",
                              border: `1px solid ${member.borderColor.replace('0.3', '0.2')}`,
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              cursor: "pointer",
                              transition: "all 0.3s ease"
                            }}
                            onMouseEnter={(e) => {
                              e.currentTarget.style.background = member.borderColor.replace('0.3', '0.15');
                              e.currentTarget.style.borderColor = member.borderColor;
                              e.currentTarget.style.boxShadow = `0 0 15px ${member.borderColor}`;
                            }}
                            onMouseLeave={(e) => {
                              e.currentTarget.style.background = "rgba(74, 144, 226, 0.05)";
                              e.currentTarget.style.borderColor = member.borderColor.replace('0.3', '0.2');
                              e.currentTarget.style.boxShadow = "none";
                            }}
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
        </Motion.div>
      </Section>

      {/* SERVICES SECTION */}
      <Section 
        id="services" 
        title="Our Services"
        style={{
          background: "radial-gradient(circle at center, var(--overlay-1) 0%, transparent 70%)"
        }}
      >
        <Motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: 24
          }}
        >
          {[
            { 
              icon: "🎨", 
              title: "Web Apps", 
              desc: "End-to-end delivery with modern tooling and best practices.",
              gradient: "linear-gradient(135deg, rgba(74, 144, 226, 0.1), rgba(74, 144, 226, 0.05))"
            },
            { 
              icon: "⚡", 
              title: "3D/Interactive", 
              desc: "Immersive 3D experiences that engage and captivate users.",
              gradient: "linear-gradient(135deg, rgba(135, 206, 235, 0.15), rgba(135, 206, 235, 0.05))"
            },
            { 
              icon: "🚀", 
              title: "Brand Sites", 
              desc: "Stunning brand experiences that tell your unique story.",
              gradient: "linear-gradient(135deg, rgba(255, 107, 107, 0.1), rgba(255, 107, 107, 0.05))"
            },
            { 
              icon: "⚙️", 
              title: "Performance/SEO", 
              desc: "Lightning-fast sites optimized for search and conversion.",
              gradient: "linear-gradient(135deg, rgba(46, 92, 138, 0.1), rgba(46, 92, 138, 0.05))"
            }
          ].map((service, index) => (
            <Motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ 
                y: -8,
                transition: { duration: 0.3 }
              }}
              style={{
                padding: "40px",
                borderRadius: "20px",
                background: "var(--card-surface)",
                backdropFilter: "blur(20px) saturate(180%)",
                border: "1px solid var(--border)",
                boxShadow: "var(--shadow-md)",
                cursor: "pointer",
                transition: "all 0.3s ease",
                position: "relative",
                overflow: "hidden"
              }}
            >
              <div style={{ 
                fontSize: "48px", 
                marginBottom: 20,
                filter: "drop-shadow(0 2px 4px rgba(74, 144, 226, 0.2))"
              }}>
                {service.icon}
              </div>
              <h3 style={{ 
                marginBottom: 12, 
                fontSize: "22px",
                fontWeight: 700,
                color: "var(--text-primary)"
              }}>
                {service.title}
              </h3>
              <p style={{ 
                color: "var(--text-secondary)", 
                lineHeight: 1.6,
                fontSize: "15px"
              }}>
                {service.desc}
              </p>
            </Motion.div>
          ))}
        </Motion.div>
      </Section>

      {/* PROJECTS SECTION */}
      <Section id="projects" title="Featured Projects">
        <Motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: 32
          }}
        >
          {projects.map((project, index) => (
            <Motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ 
                y: -8,
                scale: 1.02,
                transition: { duration: 0.3 }
              }}
              style={{
                minHeight: 320,
                borderRadius: "20px",
                border: "1px solid var(--border)",
                background: "var(--card-surface)",
                backdropFilter: "blur(10px)",
                boxShadow: "var(--shadow-md)",
                padding: "24px 24px 28px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                cursor: "pointer",
                position: "relative",
                overflow: "hidden"
              }}
            >
              <div>
                {project.thumbnailUrl ? (
                  <div
                    className="project-card-media"
                    style={{
                      marginBottom: 20,
                      borderRadius: 14,
                      overflow: "hidden",
                      border: "1px solid var(--border)",
                      background: "var(--overlay-1)",
                      height: 180,
                      position: "relative"
                    }}
                  >
                    <img
                      src={project.thumbnailUrl}
                      alt={project.title}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        display: "block"
                      }}
                    />
                    {project.demoUrl && (
                      <div className="project-card-media-overlay">
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            window.open(
                              project.demoUrl,
                              "_blank",
                              "noopener,noreferrer"
                            );
                          }}
                          style={{
                            padding: "10px 26px",
                            fontSize: "14px",
                            borderRadius: 999,
                            background:
                              "linear-gradient(135deg, var(--accent) 0%, var(--accent-2) 100%)",
                            color: "#fff",
                            border: "none",
                            boxShadow: "0 10px 25px rgba(0,0,0,0.45)",
                            cursor: "pointer",
                            letterSpacing: "0.08em",
                            textTransform: "uppercase"
                          }}
                        >
                          Watch demo
                        </button>
                      </div>
                    )}
                  </div>
                ) : null}
                <h3 style={{ 
                  marginBottom: 12, 
                  fontSize: "22px",
                  fontWeight: 700,
                color: "var(--text-primary)"
                }}>
                  {project.title}
                </h3>
                <p style={{ 
                color: "var(--text-secondary)", 
                  lineHeight: 1.6,
                  fontSize: "15px"
                }}>
                  {project.desc}
                </p>
              </div>
              <div
                style={{
                  alignSelf: "flex-start",
                  display: "flex",
                  gap: 12,
                  marginTop: 24,
                  flexWrap: "wrap"
                }}
              >
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    style={{ textDecoration: "none" }}
                  >
                    <button
                      type="button"
                      style={{
                        padding: "10px 24px",
                        fontSize: "14px",
                        background: "transparent",
                        border: "1px solid var(--border-strong)",
                        color: "var(--accent)"
                      }}
                    >
                      View Code
                    </button>
                  </a>
                )}
              </div>
            </Motion.div>
          ))}
        </Motion.div>
      </Section>

      {/* REVIEWS SECTION */}
      <Section id="reviews" title="Client Reviews">
        <Motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          style={{ 
            display: "grid", 
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: 32
          }}
        >
          {reviews.map((review, index) => (
            <Motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              style={{
                padding: "40px",
                borderRadius: "20px",
                background: "var(--card-surface)",
                backdropFilter: "blur(20px)",
                border: "1px solid var(--border)",
                boxShadow: "var(--shadow-md)",
                position: "relative"
              }}
            >
              <div style={{ 
                fontSize: "32px", 
                marginBottom: 20,
                opacity: 0.6
              }}>
                "
              </div>
              <p style={{ 
                marginBottom: 24, 
                color: "var(--text-secondary)",
                lineHeight: 1.7,
                fontSize: "16px"
              }}>
                {review.text}
              </p>
              <div>
                <p style={{ 
                  fontWeight: 600, 
                  marginBottom: 4,
                  fontSize: "16px",
                  color: "var(--text-primary)"
                }}>
                  {review.name}
                </p>
                <p style={{ 
                  color: "var(--text-secondary)",
                  fontSize: "14px"
                }}>
                  {review.role}
                </p>
              </div>
            </Motion.div>
          ))}
        </Motion.div>

        <div
          style={{
            marginTop: 40,
            maxWidth: 600,
            marginInline: "auto",
            padding: 24,
            borderRadius: 16,
            background: "var(--card-surface)",
            border: "1px solid var(--border)",
            boxShadow: "var(--shadow-md)"
          }}
        >
          <h3
            style={{
              marginBottom: 16,
              fontSize: 18,
              fontWeight: 600,
              color: "var(--text-primary)"
            }}
          >
            Share Your Experience
          </h3>
          <form
            onSubmit={handleAddReview}
            style={{ display: "grid", gap: 12 }}
          >
            <input
              placeholder="Your name"
              value={newReviewName}
              onChange={(e) => setNewReviewName(e.target.value)}
              style={{
                padding: "12px 16px",
                borderRadius: 12,
                border: "1px solid var(--border)",
                background: "var(--card-surface)",
                color: "var(--text-primary)",
                fontSize: 14
              }}
            />
            <input
              placeholder="Role / Company"
              value={newReviewRole}
              onChange={(e) => setNewReviewRole(e.target.value)}
              style={{
                padding: "12px 16px",
                borderRadius: 12,
                border: "1px solid var(--border)",
                background: "var(--card-surface)",
                color: "var(--text-primary)",
                fontSize: 14
              }}
            />
            <textarea
              placeholder="Your review"
              rows={4}
              value={newReviewText}
              onChange={(e) => setNewReviewText(e.target.value)}
              style={{
                padding: "12px 16px",
                borderRadius: 12,
                border: "1px solid var(--border)",
                background: "var(--card-surface)",
                color: "var(--text-primary)",
                fontSize: 14,
                resize: "vertical"
              }}
            />
            <button type="submit" style={{ alignSelf: "flex-end" }}>
              Add Review
            </button>
          </form>
        </div>
      </Section>
      {/* CONTACT SECTION */}
      <Section id="contact" title="Get In Touch">
        <Motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          style={{
            maxWidth: 600,
            margin: "0 auto"
          }}
        >
          <form
            onSubmit={(e) => e.preventDefault()}
            style={{ display: "grid", gap: 20 }}
          >
            <Motion.input
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              placeholder="Your name"
              style={{
                padding: "16px 20px",
                borderRadius: "12px",
                border: "1px solid var(--border)",
                background: "var(--card-surface)",
                backdropFilter: "blur(10px)",
                color: "var(--text-primary)",
                fontSize: "15px",
                transition: "all 0.3s ease"
              }}
              onFocus={(e) => {
                e.target.style.borderColor = "var(--border-strong)";
                e.target.style.boxShadow = "0 0 20px var(--link-hover-shadow)";
              }}
              onBlur={(e) => {
                e.target.style.borderColor = "var(--border)";
                e.target.style.boxShadow = "none";
              }}
            />
            <Motion.input
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              placeholder="Email address"
              type="email"
              style={{
                padding: "16px 20px",
                borderRadius: "12px",
                border: "1px solid var(--border)",
                background: "var(--card-surface)",
                backdropFilter: "blur(10px)",
                color: "var(--text-primary)",
                fontSize: "15px",
                transition: "all 0.3s ease"
              }}
              onFocus={(e) => {
                e.target.style.borderColor = "var(--border-strong)";
                e.target.style.boxShadow = "0 0 20px var(--link-hover-shadow)";
              }}
              onBlur={(e) => {
                e.target.style.borderColor = "var(--border)";
                e.target.style.boxShadow = "none";
              }}
            />
            <Motion.textarea
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              placeholder="Tell us about your project"
              rows={6}
              style={{
                padding: "16px 20px",
                borderRadius: "12px",
                border: "1px solid var(--border)",
                background: "var(--card-surface)",
                backdropFilter: "blur(10px)",
                color: "var(--text-primary)",
                fontSize: "15px",
                fontFamily: "inherit",
                resize: "vertical",
                transition: "all 0.3s ease"
              }}
              onFocus={(e) => {
                e.target.style.borderColor = "var(--border-strong)";
                e.target.style.boxShadow = "0 0 20px var(--link-hover-shadow)";
              }}
              onBlur={(e) => {
                e.target.style.borderColor = "var(--border)";
                e.target.style.boxShadow = "none";
              }}
            />
            <Motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <button type="submit" style={{ width: "100%" }}>
                Send Message
              </button>
            </Motion.div>
          </form>
        </Motion.div>
      </Section>
    </main>
  );
}
