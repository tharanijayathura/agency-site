export default function Navbar() {
  return (
    <nav style={{
      padding: "20px 60px",
      position: "fixed",
      width: "100%",
      top: 0,
      zIndex: 10,
      background: "rgba(0,0,0,0.4)",
      backdropFilter: "blur(10px)"
    }}>
      <h3>RoboStudio</h3>
    </nav>
  );
}
