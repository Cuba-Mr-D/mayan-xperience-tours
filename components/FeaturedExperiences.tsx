export default function FeaturedExperiences() {
  return (
    <section
      id="experiences"
      style={{
        padding: "100px 40px",
        backgroundColor: "#ffffff",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        <h2
          style={{
            textAlign: "center",
            fontSize: "2.2rem",
            marginBottom: "20px",
            color: "#111827",
          }}
        >
          Travel Recommendations
        </h2>

        <p
          style={{
            textAlign: "center",
            color: "#6b7280",
            marginBottom: "60px",
          }}
        >
          Not sure where to start? Here are our favorite experiences based on your travel style.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "30px",
          }}
        >
          {/* Couples */}
          <div
            style={{
              backgroundColor: "#f8fafc",
              padding: "40px",
              borderRadius: "24px",
              boxShadow: "0 10px 25px rgba(0,0,0,0.08)",
            }}
          >
            <h3
              style={{
                fontSize: "1.5rem",
                fontWeight: "bold",
                marginBottom: "15px",
                color: "#111827",
              }}
            >
              💑 Traveling as a Couple?
            </h3>

            <p
              style={{
                color: "#6b7280",
                lineHeight: "1.8",
              }}
            >
              Perfect for romantic getaways, breathtaking views and unforgettable moments together.
            </p>

            <ul
              style={{
                color: "#6b7280",
                lineHeight: "2",
                listStyle: "none",
                padding: 0,
                marginTop: "20px",
                textAlign: "center",
              }}
            >
              <li>Isla Mujeres Experience</li>
              <li>Tulum</li>
              <li>Sunset Catamaran</li>
            </ul>
          </div>

          {/* Family */}
          <div
            style={{
              backgroundColor: "#f8fafc",
              padding: "40px",
              borderRadius: "24px",
              boxShadow: "0 10px 25px rgba(0,0,0,0.08)",
            }}
          >
            <h3
              style={{
                fontSize: "1.5rem",
                fontWeight: "bold",
                marginBottom: "15px",
                color: "#111827",
              }}
            >
              👨‍👩‍👧‍👦 Family Vacation
            </h3>

            <p
              style={{
                color: "#6b7280",
                lineHeight: "1.8",
              }}
            >
              Fun, culture and adventure for travelers of all ages.
            </p>

            <ul
              style={{
                color: "#6b7280",
                lineHeight: "2",
                listStyle: "none",
                padding: 0,
                marginTop: "20px",
                textAlign: "center",
              }}
            >
              <li>Chichen Itza</li>
              <li>Cenotes Experience</li>
              <li>Xel-Há</li>
            </ul>
          </div>

          {/* Friends */}
          <div
            style={{
              backgroundColor: "#f8fafc",
              padding: "40px",
              borderRadius: "24px",
              boxShadow: "0 10px 25px rgba(0,0,0,0.08)",
            }}
          >
            <h3
              style={{
                fontSize: "1.5rem",
                fontWeight: "bold",
                marginBottom: "15px",
                color: "#111827",
              }}
            >
              🎉 Traveling with Friends
            </h3>

            <p
              style={{
                color: "#6b7280",
                lineHeight: "1.8",
              }}
            >
              Great for groups looking for fun, adventure and memorable experiences in the Riviera Maya.
            </p>

            <ul
              style={{
                color: "#6b7280",
                lineHeight: "2",
                listStyle: "none",
                padding: 0,
                marginTop: "20px",
                textAlign: "center",
              }}
            >
              <li>Isla Mujeres Experience</li>
              <li>Cenotes Experience</li>
              <li>ATV Adventure</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}