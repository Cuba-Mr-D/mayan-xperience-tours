"use client";

import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <nav
        style={{
          position: "fixed",
          top: 0,
          width: "100%",
          padding: "20px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          backgroundColor: "#021024",
          color: "white",
          zIndex: 1000,
          boxSizing: "border-box",
        }}
      >
        <div
          style={{
            fontWeight: "bold",
            fontSize: "1.4rem",
            letterSpacing: "1px",
          }}
        >
          MAYAN XPERIENCE
        </div>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          style={{
            background: "none",
            border: "none",
            color: "white",
            fontSize: "2rem",
            cursor: "pointer",
          }}
        >
          ☰
        </button>
      </nav>

      {menuOpen && (
        <div
          style={{
            position: "fixed",
            top: "70px",
            right: "15px",
            backgroundColor: "#021024",
            color: "white",
            padding: "30px",
            borderRadius: "20px",
            display: "flex",
            flexDirection: "column",
            gap: "15px",
            zIndex: 999,
            minWidth: "220px",
            boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
          }}
        >
          <a
            href="#experiences"
            style={{
              color: "white",
              textDecoration: "none",
              fontSize: "1.1rem",
              fontWeight: "500",
            }}
            onClick={() => setMenuOpen(false)}
          >
            Experiences
          </a>

          <a
            href="#about"
            style={{
              color: "white",
              textDecoration: "none",
            }}
            onClick={() => setMenuOpen(false)}
          >
            About
          </a>

          <a
            href="#contact"
            style={{
              color: "white",
              textDecoration: "none",
            }}
            onClick={() => setMenuOpen(false)}
          >
            Contact
          </a>

          <hr
            style={{
              width: "100%",
              borderColor: "#ffffff33",
            }}
          />

          <div
            style={{
              display: "flex",
              gap: "10px",
              justifyContent: "center",
            }}
          >
            <button
              style={{
                background: "none",
                border: "none",
                color: "white",
                cursor: "pointer",
                fontSize: "1rem",
              }}
            >
              🇺🇸 EN
            </button>

            <button
              style={{
                background: "none",
                border: "none",
                color: "white",
                cursor: "pointer",
                fontSize: "1rem",
              }}
            >
              🇲🇽 ES
            </button>

            <button
              style={{
                background: "none",
                border: "none",
                color: "white",
                cursor: "pointer",
                fontSize: "1rem",
              }}
            >
              🇫🇷 FR
            </button>
          </div>
        </div>
      )}
    </>
  );
}