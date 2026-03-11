import React, { useState, useEffect } from "react";
import heroImage from "../../images/banner1.png";

const Section1 = () => {

  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section style={styles.section}>
      <div
        style={{
          ...styles.container,
          flexDirection: isMobile ? "column" : "row",
          textAlign: isMobile ? "center" : "left",
        }}
      >
        
        {/* Left Content */}
        <div style={styles.left}>
          <h2
            style={{
              ...styles.title,
              fontSize: isMobile ? "28px" : "40px",
            }}
          >
            IMPECCABLE <br /> CRAFTSMANSHIP AND <br /> FINESSE
          </h2>

          <p style={styles.text}>
            An example of intricate workmanship and detail, elegant necklaces
            and long and short chains form a part of our desirable collection.
          </p>

          <button style={styles.button}>Explore Now</button>
        </div>

        {/* Right Image */}
        <div style={styles.right}>
          <img src={heroImage} alt="Jewellery" style={styles.image} />
        </div>

      </div>
    </section>
  );
};

const styles = {
  section: {
    backgroundColor: "#f5f3ee",
    padding: "40px 20px",
  },
  container: {
    maxWidth: "1200px",
    margin: "0 auto",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "40px",
  },
  left: {
    flex: 1,
  },
  title: {
    lineHeight: "1.3",
    marginBottom: "20px",
    color: "#000",
    letterSpacing: "1px",
  },
  text: {
    fontSize: "16px",
    color: "#555",
    marginBottom: "25px",
    maxWidth: "450px",
  },
  button: {
    backgroundColor: "#A29875",
    border: "none",
    padding: "12px 24px",
    color: "#fff",
    cursor: "pointer",
    borderRadius: "4px",
  },
  right: {
    flex: 1,
    display: "flex",
    justifyContent: "center",
  },
  image: {
    width: "100%",
    maxWidth: "300px",
    borderRadius: "0 10px 180px 0",
    objectFit: "cover",
  },
};

export default Section1;
