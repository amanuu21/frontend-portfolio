import { motion } from "framer-motion"

function Navbar() {
  const navStyle = {
    color: "white",
    textDecoration: "none",
    transition: "0.3s"
  }

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "24px 60px",
        position: "fixed",
        width: "100%",
        top: 0,
        zIndex: 1000,
        backdropFilter: "blur(12px)",
        background: "rgba(2, 6, 23, 0.7)",
        borderBottom: "1px solid rgba(255,255,255,0.08)",
        boxSizing: "border-box"
      }}
    >
      <h1
        style={{
          color: "white",
          fontSize: "32px",
          fontWeight: "bold",
          margin: 0
        }}
      >
        Aman<span style={{ color: "#38bdf8" }}>.</span>
      </h1>

      <div
        style={{
          display: "flex",
          gap: "30px",
          fontSize: "16px"
        }}
      >
        <a href="#home" style={navStyle}>
          Home
        </a>

        <a href="#projects" style={navStyle}>
          Projects
        </a>

        <a href="#skills" style={navStyle}>
          Skills
        </a>

        <a href="#contact" style={navStyle}>
          Contact
        </a>
      </div>
    </motion.nav>
  )
}

export default Navbar