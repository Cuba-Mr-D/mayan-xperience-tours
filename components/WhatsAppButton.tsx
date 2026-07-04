"use client";

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/529842467762?text=Hello!%20I%20would%20like%20to%20get%20some%20information%20about%20your%20tours%20and%20activities."
      target="_blank"
      rel="noopener noreferrer"
      style={{
        position: "fixed",
        bottom: "20px",
        right: "20px",
        backgroundColor: "#25D366",
        color: "white",
        width: "60px",
        height: "60px",
        borderRadius: "50%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "30px",
        textDecoration: "none",
        zIndex: 9999,
        boxShadow: "0 4px 10px rgba(0,0,0,0.3)",
      }}
    >
      💬
    </a>
  );
}