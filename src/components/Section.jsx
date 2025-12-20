import { motion as Motion } from "framer-motion";
import React from "react";

export default function Section({ id, title, children, className = "" }) {
  return (
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
}
