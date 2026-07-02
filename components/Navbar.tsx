export default function Navbar() {
  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        width: "100%",
        padding: "30px 25px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "#021024",
        color: "white",
        zIndex: 1000,
      }}
    >
      <div
        style={{
          fontWeight: "bold",
          fontSize: "1.2rem",
          lineHeight: "1.3",
        }}
      >
        MAYAN XPERIENCE
      </div>

      <div
        style={{
          display: "flex",
          gap: "30px",
        }}
      >
        <a href="#experiences">Experiences</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
      </div>
    </nav>
  );
}