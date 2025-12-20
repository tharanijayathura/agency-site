import React, { useEffect, useState } from "react";
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

const ADMIN_PASSWORD = "icew";

const defaultTeamMembers = [
  {
    name: "Alex Chen",
    role: "Creative Director",
    bio: "Visionary designer with 10+ years crafting digital experiences",
    gradient: "linear-gradient(135deg, var(--overlay-1), transparent)",
    borderColor: "rgba(74, 144, 226, 0.3)",
    initials: "AC",
    linkedinUrl: "https://www.linkedin.com/",
    githubUrl: "https://github.com/"
  },
  {
    name: "Sarah Martinez",
    role: "Lead Developer",
    bio: "Full-stack wizard specializing in 3D web technologies",
    gradient: "linear-gradient(135deg, var(--overlay-2), transparent)",
    borderColor: "rgba(135, 206, 235, 0.3)",
    initials: "SM",
    linkedinUrl: "https://www.linkedin.com/",
    githubUrl: "https://github.com/"
  },
  {
    name: "Jordan Kim",
    role: "3D Artist",
    bio: "Bringing virtual worlds to life with stunning 3D models",
    gradient: "linear-gradient(135deg, rgba(255, 107, 107, 0.12), transparent)",
    borderColor: "rgba(255, 107, 107, 0.3)",
    initials: "JK",
    linkedinUrl: "https://www.linkedin.com/",
    githubUrl: "https://github.com/"
  },
  {
    name: "Taylor Reed",
    role: "UX Strategist",
    bio: "Transforming complex ideas into intuitive user journeys",
    gradient: "linear-gradient(135deg, rgba(46, 92, 138, 0.12), transparent)",
    borderColor: "rgba(46, 92, 138, 0.3)",
    initials: "TR",
    linkedinUrl: "https://www.linkedin.com/",
    githubUrl: "https://github.com/"
  }
];

const defaultProjects = [
  {
    title: "E-commerce Platform",
    desc: "High-performance online store with 3D product visualization",
    gradient:
      "linear-gradient(135deg, rgba(0, 240, 255, 0.2), rgba(176, 38, 255, 0.15))",
    githubUrl: "",
    demoUrl: "",
    thumbnailUrl: ""
  },
  {
    title: "Interactive Dashboard",
    desc: "Real-time data visualization with immersive 3D charts",
    gradient:
      "linear-gradient(135deg, rgba(176, 38, 255, 0.2), rgba(255, 0, 110, 0.15))",
    githubUrl: "",
    demoUrl: "",
    thumbnailUrl: ""
  },
  {
    title: "Virtual Showroom",
    desc: "Immersive 3D environment for product exploration",
    gradient:
      "linear-gradient(135deg, rgba(255, 0, 110, 0.2), rgba(0, 240, 255, 0.15))",
    githubUrl: "",
    demoUrl: "",
    thumbnailUrl: ""
  },
  {
    title: "AI-Powered Analytics",
    desc: "Advanced analytics platform with predictive insights",
    gradient:
      "linear-gradient(135deg, rgba(67, 97, 238, 0.2), rgba(176, 38, 255, 0.15))",
    githubUrl: "",
    demoUrl: "",
    thumbnailUrl: ""
  },
  {
    title: "Cloud Infrastructure",
    desc: "Scalable cloud solutions for enterprise clients",
    gradient:
      "linear-gradient(135deg, rgba(0, 240, 255, 0.2), rgba(67, 97, 238, 0.15))",
    githubUrl: "",
    demoUrl: "",
    thumbnailUrl: ""
  },
  {
    title: "Mobile Experience",
    desc: "Cross-platform mobile apps with native performance",
    gradient:
      "linear-gradient(135deg, rgba(255, 0, 110, 0.2), rgba(0, 240, 255, 0.15))",
    githubUrl: "",
    demoUrl: "",
    thumbnailUrl: ""
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
  const [isAdmin, setIsAdmin] = useState(() => {
    if (typeof window === "undefined") return false;
    return window.localStorage.getItem("isAdmin") === "true";
  });

  const [projects, setProjects] = useState(() => {
    if (typeof window === "undefined") return defaultProjects;
    try {
      const stored = window.localStorage.getItem("projects");
      return stored ? JSON.parse(stored) : defaultProjects;
    } catch {
      return defaultProjects;
    }
  });

  const [teamMembers, setTeamMembers] = useState(() => {
    if (typeof window === "undefined") return defaultTeamMembers;
    try {
      const stored = window.localStorage.getItem("teamMembers");
      return stored ? JSON.parse(stored) : defaultTeamMembers;
    } catch {
      return defaultTeamMembers;
    }
  });

  const [reviews, setReviews] = useState(() => {
    if (typeof window === "undefined") return defaultReviews;
    try {
      const stored = window.localStorage.getItem("reviews");
      return stored ? JSON.parse(stored) : defaultReviews;
    } catch {
      return defaultReviews;
    }
  });

  const [newProjectTitle, setNewProjectTitle] = useState("");
  const [newProjectDesc, setNewProjectDesc] = useState("");
  const [newProjectGithub, setNewProjectGithub] = useState("");
  const [newProjectDemo, setNewProjectDemo] = useState("");
  const [newProjectThumbnail, setNewProjectThumbnail] = useState("");

  const [newTeamName, setNewTeamName] = useState("");
  const [newTeamRole, setNewTeamRole] = useState("");
  const [newTeamBio, setNewTeamBio] = useState("");
  const [newTeamLinkedin, setNewTeamLinkedin] = useState("");
  const [newTeamGithub, setNewTeamGithub] = useState("");

  const [newReviewName, setNewReviewName] = useState("");
  const [newReviewRole, setNewReviewRole] = useState("");
  const [newReviewText, setNewReviewText] = useState("");

  const [editingProjectIndex, setEditingProjectIndex] = useState(null);
  const [editingTeamIndex, setEditingTeamIndex] = useState(null);

  const [showAdminLogin, setShowAdminLogin] = useState(false);
  const [adminPassword, setAdminPassword] = useState("");
  const [adminError, setAdminError] = useState("");

  useEffect(() => {
    if (typeof window === "undefined") return;
    window.localStorage.setItem("isAdmin", isAdmin ? "true" : "false");
  }, [isAdmin]);

  useEffect(() => {
    if (typeof window === "undefined") return;
    window.localStorage.setItem("projects", JSON.stringify(projects));
  }, [projects]);

  useEffect(() => {
    if (typeof window === "undefined") return;
    window.localStorage.setItem("teamMembers", JSON.stringify(teamMembers));
  }, [teamMembers]);

  useEffect(() => {
    if (typeof window === "undefined") return;
    window.localStorage.setItem("reviews", JSON.stringify(reviews));
  }, [reviews]);

  const handleAdminLogin = (e) => {
    e.preventDefault();
    if (adminPassword === ADMIN_PASSWORD) {
      setIsAdmin(true);
      setShowAdminLogin(false);
      setAdminPassword("");
      setAdminError("");
    } else {
      setAdminError("Incorrect password");
    }
  };

  const handleAdminLogout = () => {
    setIsAdmin(false);
  };

  const handleAddProject = (e) => {
    e.preventDefault();
    if (!newProjectTitle.trim() || !newProjectDesc.trim()) return;
    if (editingProjectIndex !== null && editingProjectIndex >= 0) {
      const updated = [...projects];
      const existing = updated[editingProjectIndex];
      updated[editingProjectIndex] = {
        ...existing,
        title: newProjectTitle.trim(),
        desc: newProjectDesc.trim(),
        githubUrl: newProjectGithub.trim(),
        demoUrl: newProjectDemo.trim(),
        thumbnailUrl: newProjectThumbnail.trim() || existing.thumbnailUrl || ""
      };
      setProjects(updated);
      setEditingProjectIndex(null);
    } else {
      setProjects([
        ...projects,
        {
          title: newProjectTitle.trim(),
          desc: newProjectDesc.trim(),
          gradient:
            "linear-gradient(135deg, rgba(67, 97, 238, 0.2), rgba(176, 38, 255, 0.15))",
          githubUrl: newProjectGithub.trim(),
          demoUrl: newProjectDemo.trim(),
          thumbnailUrl: newProjectThumbnail.trim()
        }
      ]);
    }
    setNewProjectTitle("");
    setNewProjectDesc("");
    setNewProjectGithub("");
    setNewProjectDemo("");
    setNewProjectThumbnail("");
  };

  const handleRemoveProject = (index) => {
    setProjects(projects.filter((_, i) => i !== index));
  };

  const handleAddTeamMember = (e) => {
    e.preventDefault();
    if (!newTeamName.trim() || !newTeamRole.trim() || !newTeamBio.trim()) return;
    const initials = newTeamName
      .split(" ")
      .filter(Boolean)
      .map((n) => n[0])
      .join("")
      .toUpperCase()
      .slice(0, 2);
    const borderColor = "rgba(74, 144, 226, 0.3)";
    if (editingTeamIndex !== null && editingTeamIndex >= 0) {
      const updated = [...teamMembers];
      const existing = updated[editingTeamIndex];
      updated[editingTeamIndex] = {
        ...existing,
        name: newTeamName.trim(),
        role: newTeamRole.trim(),
        bio: newTeamBio.trim(),
        linkedinUrl: newTeamLinkedin.trim(),
        githubUrl: newTeamGithub.trim()
      };
      setTeamMembers(updated);
      setEditingTeamIndex(null);
    } else {
      setTeamMembers([
        ...teamMembers,
        {
          name: newTeamName.trim(),
          role: newTeamRole.trim(),
          bio: newTeamBio.trim(),
          gradient: "linear-gradient(135deg, var(--overlay-1), transparent)",
          borderColor,
          initials,
          linkedinUrl: newTeamLinkedin.trim(),
          githubUrl: newTeamGithub.trim()
        }
      ]);
    }
    setNewTeamName("");
    setNewTeamRole("");
    setNewTeamBio("");
    setNewTeamLinkedin("");
    setNewTeamGithub("");
  };

  const handleRemoveTeamMember = (index) => {
    setTeamMembers(teamMembers.filter((_, i) => i !== index));
  };

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

  const handleRemoveReview = (index) => {
    if (!isAdmin) return;
    setReviews(reviews.filter((_, i) => i !== index));
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
            Meet the Flying Robot
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
            We Build Futuristic
            <br />
            <span style={{ 
              background: "linear-gradient(135deg, var(--accent) 0%, var(--accent-2) 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text"
            }}>
              Web Experiences
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
            High-performance, modern websites with immersive 3D visuals and cutting-edge technology that push the boundaries of digital innovation.
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
            RoboStudio is a boutique agency crafting fast, delightful web apps. We blend
            modern frontend stacks with subtle motion and accessible 3D to deliver
            standout digital products that captivate and convert.
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
                  {/* Avatar Circle */}
                  <div style={{
                    width: "100px",
                    height: "100px",
                    borderRadius: "50%",
                    margin: "0 auto 24px",
                    background: `linear-gradient(135deg, ${member.borderColor.replace('0.3', '0.4')}, ${member.borderColor.replace('0.3', '0.2')})`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "32px",
                    fontWeight: 700,
                    color: "var(--accent)",
                    boxShadow: `0 8px 32px ${member.borderColor}`,
                    position: "relative"
                  }}>
                    {member.initials}
                    <div style={{
                      position: "absolute",
                      inset: "-2px",
                      borderRadius: "50%",
                      padding: "2px",
                      background: `linear-gradient(135deg, ${member.borderColor.replace('0.3', '0.6')}, transparent)`,
                      WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                      WebkitMaskComposite: "xor",
                      maskComposite: "exclude"
                    }} />
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
                        icon: "💼",
                        url: member.linkedinUrl
                      },
                      {
                        key: "github",
                        icon: "⚡",
                        url: member.githubUrl
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
                            <span style={{ fontSize: "18px" }}>{social.icon}</span>
                          </Motion.div>
                        </a>
                      ))}
                  </div>

                  {isAdmin && (
                    <div
                      style={{
                        position: "absolute",
                        top: 16,
                        right: 16,
                        display: "flex",
                        gap: 8
                      }}
                    >
                      <button
                        type="button"
                        onClick={() => {
                          setEditingTeamIndex(index);
                          setNewTeamName(member.name || "");
                          setNewTeamRole(member.role || "");
                          setNewTeamBio(member.bio || "");
                          setNewTeamLinkedin(member.linkedinUrl || "");
                          setNewTeamGithub(member.githubUrl || "");
                          const section = document.getElementById("team");
                          if (section) {
                            const rect = section.getBoundingClientRect();
                            const offset = window.scrollY + rect.top - 100;
                            window.scrollTo({ top: offset, behavior: "smooth" });
                          }
                        }}
                        style={{
                          padding: "6px 10px",
                          fontSize: "11px",
                          borderRadius: "999px",
                          background: "rgba(0,0,0,0.4)",
                          border: "1px solid var(--border)",
                          color: "var(--text-primary)",
                          cursor: "pointer"
                        }}
                      >
                        Edit
                      </button>
                      <button
                        type="button"
                        onClick={() => handleRemoveTeamMember(index)}
                        style={{
                          padding: "6px 10px",
                          fontSize: "11px",
                          borderRadius: "999px",
                          background: "rgba(0,0,0,0.4)",
                          border: "1px solid var(--border)",
                          color: "var(--text-primary)",
                          cursor: "pointer"
                        }}
                      >
                        Remove
                      </button>
                    </div>
                  )}
                </Motion.div>
              ))}
            </div>

            {isAdmin && (
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
                  {editingTeamIndex !== null ? "Admin: Edit Team Member" : "Admin: Add Team Member"}
                </h3>
                <form
                  onSubmit={handleAddTeamMember}
                  style={{ display: "grid", gap: 12 }}
                >
                  <input
                    placeholder="Name"
                    value={newTeamName}
                    onChange={(e) => setNewTeamName(e.target.value)}
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
                    placeholder="Role"
                    value={newTeamRole}
                    onChange={(e) => setNewTeamRole(e.target.value)}
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
                    placeholder="Short bio"
                    rows={3}
                    value={newTeamBio}
                    onChange={(e) => setNewTeamBio(e.target.value)}
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
                  <input
                    placeholder="LinkedIn URL"
                    value={newTeamLinkedin}
                    onChange={(e) => setNewTeamLinkedin(e.target.value)}
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
                    placeholder="GitHub URL"
                    value={newTeamGithub}
                    onChange={(e) => setNewTeamGithub(e.target.value)}
                    style={{
                      padding: "12px 16px",
                      borderRadius: 12,
                      border: "1px solid var(--border)",
                      background: "var(--card-surface)",
                      color: "var(--text-primary)",
                      fontSize: 14
                    }}
                  />
                  <button type="submit" style={{ alignSelf: "flex-end" }}>
                    Add Member
                  </button>
                </form>
              </div>
            )}
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
                height: 280,
                borderRadius: "20px",
                border: "1px solid var(--border)",
                background: "var(--card-surface)",
                backdropFilter: "blur(10px)",
                boxShadow: "var(--shadow-md)",
                padding: "32px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                cursor: "pointer",
                position: "relative",
                overflow: "hidden"
              }}
              onClick={() => {
                if (project.demoUrl) {
                  window.open(project.demoUrl, "_blank", "noopener,noreferrer");
                }
              }}
            >
              <div>
                {project.thumbnailUrl ? (
                  <div
                    style={{
                      marginBottom: 20,
                      borderRadius: 14,
                      overflow: "hidden",
                      border: "1px solid var(--border)",
                      background: "var(--overlay-1)",
                      height: 160,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center"
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
                {project.demoUrl && (
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noreferrer"
                    style={{ textDecoration: "none" }}
                  >
                    <button
                      type="button"
                      style={{
                        padding: "10px 24px",
                        fontSize: "14px",
                        background: "var(--link-hover-bg)",
                        border: "1px solid var(--border-strong)",
                        color: "var(--accent)"
                      }}
                    >
                      Live Demo
                    </button>
                  </a>
                )}
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
              {isAdmin && (
                <div
                  style={{
                    position: "absolute",
                    top: 16,
                    right: 16,
                    display: "flex",
                    gap: 8
                  }}
                >
                  <button
                    type="button"
                    onClick={() => {
                      setEditingProjectIndex(index);
                      setNewProjectTitle(project.title || "");
                      setNewProjectDesc(project.desc || "");
                      setNewProjectGithub(project.githubUrl || "");
                      setNewProjectDemo(project.demoUrl || "");
                      setNewProjectThumbnail(project.thumbnailUrl || "");
                      const section = document.getElementById("projects");
                      if (section) {
                        const rect = section.getBoundingClientRect();
                        const offset = window.scrollY + rect.top - 100;
                        window.scrollTo({ top: offset, behavior: "smooth" });
                      }
                    }}
                    style={{
                      padding: "6px 10px",
                      fontSize: "11px",
                      borderRadius: "999px",
                      background: "rgba(0,0,0,0.4)",
                      border: "1px solid var(--border)",
                      color: "var(--text-primary)",
                      cursor: "pointer"
                    }}
                  >
                    Edit
                  </button>
                  <button
                    type="button"
                    onClick={() => handleRemoveProject(index)}
                    style={{
                      padding: "6px 10px",
                      fontSize: "11px",
                      borderRadius: "999px",
                      background: "rgba(0,0,0,0.4)",
                      border: "1px solid var(--border)",
                      color: "var(--text-primary)",
                      cursor: "pointer"
                    }}
                  >
                    Remove
                  </button>
                </div>
              )}
            </Motion.div>
          ))}
        </Motion.div>

        {isAdmin && (
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
              {editingProjectIndex !== null ? "Admin: Edit Project" : "Admin: Add Project"}
            </h3>
            <form
              onSubmit={handleAddProject}
              style={{ display: "grid", gap: 12 }}
            >
              <input
                placeholder="Project title"
                value={newProjectTitle}
                onChange={(e) => setNewProjectTitle(e.target.value)}
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
                placeholder="Short description"
                rows={3}
                value={newProjectDesc}
                onChange={(e) => setNewProjectDesc(e.target.value)}
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
              <input
                placeholder="Thumbnail image URL (optional)"
                value={newProjectThumbnail}
                onChange={(e) => setNewProjectThumbnail(e.target.value)}
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
                placeholder="GitHub URL"
                value={newProjectGithub}
                onChange={(e) => setNewProjectGithub(e.target.value)}
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
                placeholder="Demo URL"
                value={newProjectDemo}
                onChange={(e) => setNewProjectDemo(e.target.value)}
                style={{
                  padding: "12px 16px",
                  borderRadius: 12,
                  border: "1px solid var(--border)",
                  background: "var(--card-surface)",
                  color: "var(--text-primary)",
                  fontSize: 14
                }}
              />
              <button type="submit" style={{ alignSelf: "flex-end" }}>
                Add Project
              </button>
            </form>
          </div>
        )}
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
              {isAdmin && (
                <button
                  type="button"
                  onClick={() => handleRemoveReview(index)}
                  style={{
                    position: "absolute",
                    top: 16,
                    right: 16,
                    padding: "6px 10px",
                    fontSize: "11px",
                    borderRadius: "999px",
                    background: "rgba(0,0,0,0.4)",
                    border: "1px solid var(--border)",
                    color: "var(--text-primary)",
                    cursor: "pointer"
                  }}
                >
                  Remove
                </button>
              )}
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
      <div
        style={{
          position: "fixed",
          bottom: 24,
          right: 24,
          zIndex: 50
        }}
      >
        {!isAdmin ? (
          showAdminLogin ? (
            <div
              style={{
                padding: 16,
                borderRadius: 16,
                background: "var(--card-surface)",
                border: "1px solid var(--border)",
                boxShadow: "var(--shadow-md)",
                minWidth: 260
              }}
            >
              <h4
                style={{
                  marginBottom: 12,
                  fontSize: 14,
                  fontWeight: 600,
                  color: "var(--text-primary)"
                }}
              >
                Admin Login
              </h4>
              <form
                onSubmit={handleAdminLogin}
                style={{ display: "grid", gap: 10 }}
              >
                <input
                  type="password"
                  placeholder="Password"
                  value={adminPassword}
                  onChange={(e) => setAdminPassword(e.target.value)}
                  style={{
                    padding: "10px 14px",
                    borderRadius: 12,
                    border: "1px solid var(--border)",
                    background: "var(--card-surface)",
                    color: "var(--text-primary)",
                    fontSize: 13
                  }}
                />
                {adminError && (
                  <div
                    style={{
                      fontSize: 12,
                      color: "#ff6b6b"
                    }}
                  >
                    {adminError}
                  </div>
                )}
                <div
                  style={{
                    display: "flex",
                    justifyContent: "flex-end",
                    gap: 8,
                    marginTop: 4
                  }}
                >
                  <button
                    type="button"
                    onClick={() => {
                      setShowAdminLogin(false);
                      setAdminPassword("");
                      setAdminError("");
                    }}
                    style={{
                      padding: "6px 12px",
                      fontSize: 12,
                      background: "transparent",
                      border: "1px solid var(--border)",
                      color: "var(--text-secondary)"
                    }}
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    style={{ padding: "6px 12px", fontSize: 12 }}
                  >
                    Login
                  </button>
                </div>
              </form>
            </div>
          ) : (
            <button
              type="button"
              onClick={() => setShowAdminLogin(true)}
              style={{
                padding: "8px 14px",
                fontSize: 12,
                borderRadius: 999,
                background: "var(--card-surface)",
                border: "1px solid var(--border)",
                color: "var(--text-secondary)",
                boxShadow: "var(--shadow-md)",
                cursor: "pointer"
              }}
            >
              Admin Login
            </button>
          )
        ) : (
          <div
            style={{
              padding: 10,
              borderRadius: 999,
              background: "var(--card-surface)",
              border: "1px solid var(--border)",
              boxShadow: "var(--shadow-md)",
              display: "flex",
              alignItems: "center",
              gap: 8
            }}
          >
            <span
              style={{
                fontSize: 12,
                color: "var(--text-secondary)"
              }}
            >
              Admin mode
            </span>
            <button
              type="button"
              onClick={handleAdminLogout}
              style={{
                padding: "6px 10px",
                fontSize: 12,
                borderRadius: 999,
                background: "transparent",
                border: "1px solid var(--border)",
                color: "var(--text-secondary)",
                cursor: "pointer"
              }}
            >
              Logout
            </button>
          </div>
        )}
      </div>
    </main>
  );
}
