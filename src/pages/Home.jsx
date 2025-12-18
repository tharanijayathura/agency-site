import React from "react";
import Hero3D from "../components/Hero3D";
import { motion as Motion } from "framer-motion";

const Section = ({ id, title, children, className = "" }) => (
  <section 
    id={id} 
    className={className}
    style={{ 
      padding: "120px 48px", 
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
    <div style={{ opacity: 0.95 }}>{children}</div>
  </section>
);

export default function Home() {
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







  return (
    <main style={{ position: "relative", zIndex: 1 }}>
      {/* HERO SECTION */}
      <section
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
              background: "rgba(0, 240, 255, 0.1)",
              border: "1px solid rgba(0, 240, 255, 0.3)",
              marginBottom: "24px",
              fontSize: "14px",
              fontWeight: 600,
              color: "#00f0ff",
              textTransform: "uppercase",
              letterSpacing: "1px"
            }}
          >
            Next-Gen Web Experiences
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
              background: "linear-gradient(135deg, #00f0ff 0%, #b026ff 100%)",
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
              opacity: 0.85,
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
                border: "2px solid rgba(0, 240, 255, 0.5)",
                color: "#00f0ff",
                boxShadow: "none"
              }}
              onMouseEnter={(e) => {
                e.target.style.background = "rgba(0, 240, 255, 0.1)";
                e.target.style.boxShadow = "0 0 20px rgba(0, 240, 255, 0.4)";
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
              background: "radial-gradient(circle, rgba(0, 240, 255, 0.2) 0%, transparent 70%)",
              filter: "blur(60px)",
              zIndex: 0,
              animation: "pulse 4s ease-in-out infinite"
            }}
          />
          <div style={{ position: "relative", zIndex: 1, width: "100%", height: "106%" }}>
            <Hero3D 
              cameraPosition={[0, 2.4, 3.6]}
              robotScale={3.5}
              robotPosition={[0, -10.4, 0]}
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
            opacity: 0.9,
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
                  background: "rgba(255, 255, 255, 0.03)",
                  backdropFilter: "blur(20px)",
                  border: "1px solid rgba(0, 240, 255, 0.2)",
                  textAlign: "center"
                }}
              >
                <h3 style={{ 
                  fontSize: "36px", 
                  marginBottom: 8,
                  background: "linear-gradient(135deg, #00f0ff 0%, #b026ff 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text"
                }}>
                  {stat.number}
                </h3>
                <p style={{ opacity: 0.7, fontSize: "14px" }}>{stat.label}</p>
              </Motion.div>
            ))}
          </div>

          {/* TEAM MEMBERS SECTION */}
          <Motion.div
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
              opacity: 0.8,
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
              {[
                {
                  name: "Alex Chen",
                  role: "Creative Director",
                  bio: "Visionary designer with 10+ years crafting digital experiences",
                  gradient: "linear-gradient(135deg, rgba(0, 240, 255, 0.15), rgba(0, 240, 255, 0.05))",
                  borderColor: "rgba(0, 240, 255, 0.3)",
                  initials: "AC"
                },
                {
                  name: "Sarah Martinez",
                  role: "Lead Developer",
                  bio: "Full-stack wizard specializing in 3D web technologies",
                  gradient: "linear-gradient(135deg, rgba(176, 38, 255, 0.15), rgba(176, 38, 255, 0.05))",
                  borderColor: "rgba(176, 38, 255, 0.3)",
                  initials: "SM"
                },
                {
                  name: "Jordan Kim",
                  role: "3D Artist",
                  bio: "Bringing virtual worlds to life with stunning 3D models",
                  gradient: "linear-gradient(135deg, rgba(255, 0, 110, 0.15), rgba(255, 0, 110, 0.05))",
                  borderColor: "rgba(255, 0, 110, 0.3)",
                  initials: "JK"
                },
                {
                  name: "Taylor Reed",
                  role: "UX Strategist",
                  bio: "Transforming complex ideas into intuitive user journeys",
                  gradient: "linear-gradient(135deg, rgba(67, 97, 238, 0.15), rgba(67, 97, 238, 0.05))",
                  borderColor: "rgba(67, 97, 238, 0.3)",
                  initials: "TR"
                }
              ].map((member, index) => (
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
                    background: member.gradient,
                    backdropFilter: "blur(20px) saturate(180%)",
                    border: `1px solid ${member.borderColor}`,
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
                    color: "#fff",
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
                    color: "#fff"
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
                    opacity: 0.8,
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
                    {["linkedin", "twitter", "github"].map((social, i) => (
                      <Motion.div
                        key={i}
                        whileHover={{ scale: 1.2, rotate: 5 }}
                        whileTap={{ scale: 0.9 }}
                        style={{
                          width: "36px",
                          height: "36px",
                          borderRadius: "8px",
                          background: "rgba(255, 255, 255, 0.05)",
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
                          e.currentTarget.style.background = "rgba(255, 255, 255, 0.05)";
                          e.currentTarget.style.borderColor = member.borderColor.replace('0.3', '0.2');
                          e.currentTarget.style.boxShadow = "none";
                        }}
                      >
                        <span style={{ fontSize: "18px" }}>
                          {social === "linkedin" && "💼"}
                          {social === "twitter" && "🐦"}
                          {social === "github" && "⚡"}
                        </span>
                      </Motion.div>
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
          background: "radial-gradient(circle at center, rgba(176, 38, 255, 0.05) 0%, transparent 70%)"
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
              gradient: "linear-gradient(135deg, rgba(0, 240, 255, 0.1), rgba(0, 240, 255, 0.05))"
            },
            { 
              icon: "⚡", 
              title: "3D/Interactive", 
              desc: "Immersive 3D experiences that engage and captivate users.",
              gradient: "linear-gradient(135deg, rgba(176, 38, 255, 0.1), rgba(176, 38, 255, 0.05))"
            },
            { 
              icon: "🚀", 
              title: "Brand Sites", 
              desc: "Stunning brand experiences that tell your unique story.",
              gradient: "linear-gradient(135deg, rgba(255, 0, 110, 0.1), rgba(255, 0, 110, 0.05))"
            },
            { 
              icon: "⚙️", 
              title: "Performance/SEO", 
              desc: "Lightning-fast sites optimized for search and conversion.",
              gradient: "linear-gradient(135deg, rgba(67, 97, 238, 0.1), rgba(67, 97, 238, 0.05))"
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
                background: service.gradient,
                backdropFilter: "blur(20px) saturate(180%)",
                border: "1px solid rgba(255, 255, 255, 0.1)",
                cursor: "pointer",
                transition: "all 0.3s ease",
                position: "relative",
                overflow: "hidden"
              }}
            >
              <div style={{ 
                fontSize: "48px", 
                marginBottom: 20,
                filter: "drop-shadow(0 0 10px rgba(0, 240, 255, 0.3))"
              }}>
                {service.icon}
              </div>
              <h3 style={{ 
                marginBottom: 12, 
                fontSize: "22px",
                fontWeight: 700
              }}>
                {service.title}
              </h3>
              <p style={{ 
                opacity: 0.8, 
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
          {[
            { title: "E-commerce Platform", desc: "High-performance online store with 3D product visualization", gradient: "linear-gradient(135deg, rgba(0, 240, 255, 0.2), rgba(176, 38, 255, 0.15))" },
            { title: "Interactive Dashboard", desc: "Real-time data visualization with immersive 3D charts", gradient: "linear-gradient(135deg, rgba(176, 38, 255, 0.2), rgba(255, 0, 110, 0.15))" },
            { title: "Virtual Showroom", desc: "Immersive 3D environment for product exploration", gradient: "linear-gradient(135deg, rgba(255, 0, 110, 0.2), rgba(0, 240, 255, 0.15))" },
            { title: "AI-Powered Analytics", desc: "Advanced analytics platform with predictive insights", gradient: "linear-gradient(135deg, rgba(67, 97, 238, 0.2), rgba(176, 38, 255, 0.15))" },
            { title: "Cloud Infrastructure", desc: "Scalable cloud solutions for enterprise clients", gradient: "linear-gradient(135deg, rgba(0, 240, 255, 0.2), rgba(67, 97, 238, 0.15))" },
            { title: "Mobile Experience", desc: "Cross-platform mobile apps with native performance", gradient: "linear-gradient(135deg, rgba(255, 0, 110, 0.2), rgba(0, 240, 255, 0.15))" }
          ].map((project, index) => (
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
                border: "1px solid rgba(255, 255, 255, 0.1)",
                background: project.gradient,
                backdropFilter: "blur(10px)",
                padding: "32px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                cursor: "pointer",
                position: "relative",
                overflow: "hidden"
              }}
            >
              <div>
                <h3 style={{ 
                  marginBottom: 12, 
                  fontSize: "22px",
                  fontWeight: 700
                }}>
                  {project.title}
                </h3>
                <p style={{ 
                  opacity: 0.85, 
                  lineHeight: 1.6,
                  fontSize: "15px"
                }}>
                  {project.desc}
                </p>
              </div>
              <button
                style={{
                  alignSelf: "flex-start",
                  padding: "10px 24px",
                  fontSize: "14px",
                  background: "rgba(255, 255, 255, 0.1)",
                  border: "1px solid rgba(255, 255, 255, 0.2)",
                  color: "white"
                }}
              >
                View Project →
              </button>
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
          {[
            {
              name: "Ava K.",
              role: "CEO, TechCorp",
              text: "Their attention to performance and detail made a huge difference for our conversion rates. The 3D elements are stunning and load instantly."
            },
            {
              name: "Liam N.",
              role: "Founder, StartupXYZ",
              text: "The 3D elements are tasteful and fast. Our site finally feels alive. The team delivered exactly what we envisioned and more."
            },
            {
              name: "Noah P.",
              role: "Director, DesignStudio",
              text: "Smooth delivery, great communication, and a beautiful result. Highly recommended. They transformed our vision into reality."
            }
          ].map((review, index) => (
            <Motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              style={{
                padding: "40px",
                borderRadius: "20px",
                background: "rgba(255, 255, 255, 0.03)",
                backdropFilter: "blur(20px)",
                border: "1px solid rgba(255, 255, 255, 0.1)",
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
                opacity: 0.9,
                lineHeight: 1.7,
                fontSize: "16px"
              }}>
                {review.text}
              </p>
              <div>
                <p style={{ 
                  fontWeight: 600, 
                  marginBottom: 4,
                  fontSize: "16px"
                }}>
                  {review.name}
                </p>
                <p style={{ 
                  opacity: 0.6,
                  fontSize: "14px"
                }}>
                  {review.role}
                </p>
              </div>
            </Motion.div>
          ))}
        </Motion.div>
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
                border: "1px solid rgba(255, 255, 255, 0.1)",
                background: "rgba(255, 255, 255, 0.05)",
                backdropFilter: "blur(10px)",
                color: "#fff",
                fontSize: "15px",
                transition: "all 0.3s ease"
              }}
              onFocus={(e) => {
                e.target.style.borderColor = "rgba(0, 240, 255, 0.5)";
                e.target.style.boxShadow = "0 0 20px rgba(0, 240, 255, 0.2)";
              }}
              onBlur={(e) => {
                e.target.style.borderColor = "rgba(255, 255, 255, 0.1)";
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
                border: "1px solid rgba(255, 255, 255, 0.1)",
                background: "rgba(255, 255, 255, 0.05)",
                backdropFilter: "blur(10px)",
                color: "#fff",
                fontSize: "15px",
                transition: "all 0.3s ease"
              }}
              onFocus={(e) => {
                e.target.style.borderColor = "rgba(0, 240, 255, 0.5)";
                e.target.style.boxShadow = "0 0 20px rgba(0, 240, 255, 0.2)";
              }}
              onBlur={(e) => {
                e.target.style.borderColor = "rgba(255, 255, 255, 0.1)";
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
                border: "1px solid rgba(255, 255, 255, 0.1)",
                background: "rgba(255, 255, 255, 0.05)",
                backdropFilter: "blur(10px)",
                color: "#fff",
                fontSize: "15px",
                fontFamily: "inherit",
                resize: "vertical",
                transition: "all 0.3s ease"
              }}
              onFocus={(e) => {
                e.target.style.borderColor = "rgba(0, 240, 255, 0.5)";
                e.target.style.boxShadow = "0 0 20px rgba(0, 240, 255, 0.2)";
              }}
              onBlur={(e) => {
                e.target.style.borderColor = "rgba(255, 255, 255, 0.1)";
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
