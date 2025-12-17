import Hero3D from "../components/Hero3D";
import { motion as Motion } from "framer-motion";

export default function Home() {
  return (
    <section
      style={{
        display: "flex",
        height: "100vh",
        paddingTop: "80px"
      }}
    >
      {/* LEFT CONTENT */}
      <div style={{
        flex: 1,
        padding: "80px"
      }}>
        <Motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          We build futuristic web experiences
        </Motion.h1>

        <p style={{ marginTop: "20px", opacity: 0.8 }}>
          High-performance, modern websites with immersive 3D visuals.
        </p>

        <button style={{ marginTop: "30px" }}>
          View Projects
        </button>
      </div>

      {/* RIGHT 3D */}
      <div style={{ flex: 1 }}>
        <Hero3D />
      </div>
    </section>
  );
}
