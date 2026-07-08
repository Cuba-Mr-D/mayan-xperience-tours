"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function PopularTours() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreen = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkScreen();

    window.addEventListener("resize", checkScreen);

    return () => window.removeEventListener("resize", checkScreen);
  }, []);
  return (
    <section
      id="popular-tours"
      style={{
        scrollMarginTop: "80px",
        padding: "100px 40px",
        textAlign: "center",
        backgroundColor: "#ffffff",
      }}
    >
      <h2
        style={{
          fontSize: "2.5rem",
          marginBottom: "20px",
        }}
      >
        Most Popular Tours
      </h2>

      <p
        style={{
          color: "#6b7280",
          marginBottom: "50px",
        }}
      >
        Discover our most requested experiences in the Riviera Maya.
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: isMobile
            ? "1fr"
            : "repeat(2, 1fr)",
          gap: "30px",
          maxWidth: isMobile ? "600px" : "1000px",
          margin: "0 auto",
        }}
      >
        {/* Isla Mujeres */}
        <Link
          href="/isla-mujeres"
          style={{
            textDecoration: "none",
            color: "inherit",
          }}
        >
          <div
            style={{
              border: "1px solid #ddd",
              borderRadius: "12px",
              overflow: "hidden",
              cursor: "pointer",
            }}
          >
            <img
              src="/tours/isla-mujeres.png"
              alt="Isla Mujeres"
              style={{
                width: "100%",
                height: "250px",
                objectFit: "cover",
              }}
            />

            <div style={{ padding: "20px" }}>
              <h3>🏝️ Isla Mujeres</h3>
              <p>Catamaran sailing, snorkeling and turquoise waters.</p>

              <p
                style={{
                  marginTop: "15px",
                  color: "#0284c7",
                  fontWeight: "bold",
                }}
              >
                View Experience →
              </p>
            </div>
          </div>
        </Link>

        {/* Chichen Itza */}
        <Link
          href="/chichen-itza"
          style={{
            textDecoration: "none",
            color: "inherit",
          }}
        >
          <div
            style={{
              border: "1px solid #ddd",
              borderRadius: "12px",
              overflow: "hidden",
              cursor: "pointer",
            }}
          >
            <img
              src="/tours/chichen.jpg"
              alt="Chichén Itzá"
              style={{
                width: "100%",
                height: "250px",
                objectFit: "cover",
              }}
            />

            <div style={{ padding: "20px" }}>
              <h3>🏛️ Chichén Itzá</h3>
              <p>One of the New Seven Wonders and a symbol of Mayan heritage.</p>

              <p
                style={{
                  marginTop: "15px",
                  color: "#0284c7",
                  fontWeight: "bold",
                }}
              >
                View Experience →
              </p>
            </div>
          </div>
        </Link>

        {/* Tulum */}
        <Link
          href="/tulum"
          style={{
            textDecoration: "none",
            color: "inherit",
          }}
        >
          <div
            style={{
              border: "1px solid #ddd",
              borderRadius: "12px",
              overflow: "hidden",
              cursor: "pointer",
            }}
          >
            <img
              src="/tours/tulum.jpg"
              alt="Tulum"
              style={{
                width: "100%",
                height: "250px",
                objectFit: "cover",
              }}
            />

            <div style={{ padding: "20px" }}>
              <h3>🌴 Tulum</h3>
              <p>Clifftop ruins overlooking the Caribbean Sea.</p>

              <p
                style={{
                  marginTop: "15px",
                  color: "#0284c7",
                  fontWeight: "bold",
                }}
              >
                View Experience →
              </p>
            </div>
          </div>
        </Link>

        {/* Cenotes */}
        <Link
          href="/cenotes"
          style={{
            textDecoration: "none",
            color: "inherit",
          }}
        >
          <div
            style={{
              border: "1px solid #ddd",
              borderRadius: "12px",
              overflow: "hidden",
              cursor: "pointer",
            }}
          >
            <img
              src="/tours/cenotes.jpg"
              alt="Cenotes"
              style={{
                width: "100%",
                height: "250px",
                objectFit: "cover",
              }}
            />

            <div style={{ padding: "20px" }}>

              <h3>💦 Cenotes Experience</h3>
              <p>Swim in crystal-clear waters surrounded by nature.</p>

              <p
                style={{
                  marginTop: "15px",
                  color: "#0284c7",
                  fontWeight: "bold",
                }}
              >
                View Experience →
              </p>
            </div>
          </div>
        </Link>
      </div>
    </section>
  );
}