import React, { useState, useEffect } from "react";
import { StaticImage } from "gatsby-plugin-image";

const images = [
  "https://i.pinimg.com/enabled_lo_mid/736x/df/a1/35/dfa135eabacbf113a86090ae6a611bfc.jpg",
  "https://i.pinimg.com/enabled_lo_mid/736x/8e/45/d4/8e45d4cac760b570511889e2dfa789d3.jpg",
  "https://i.pinimg.com/736x/2b/6f/82/2b6f82e56dea23235b6e1a77e68a5039.jpg",
  "https://i.pinimg.com/736x/23/ae/f2/23aef28abc2f0919f22c6ecb3f772a69.jpg",
  "https://i.pinimg.com/736x/0e/37/f0/0e37f056a752371301df34383ae085b8.jpg",
  "https://i.pinimg.com/enabled_lo_mid/736x/ed/2f/04/ed2f04ef9d75978e40b1a122670bc7ba.jpg",
  "https://i.pinimg.com/736x/3d/df/fd/3ddffd55f9c911f3eabfa18c29ca81d7.jpg",
  "https://i.pinimg.com/enabled_lo_mid/736x/08/6f/7b/086f7b80bbe2791937f737efe28ab139.jpg",
  "https://i.pinimg.com/736x/a9/92/c4/a992c424822856a8c403215bf44ff8fa.jpg",
  "https://i.pinimg.com/736x/64/14/b8/6414b8136fa6f7aabb6e8bd7ba98e230.jpg",
  "https://i.pinimg.com/736x/a3/a0/c7/a3a0c7bb529a0cff3a2e27a52a0860b1.jpg",
  "https://i.pinimg.com/enabled_lo_mid/736x/ce/ae/90/ceae9015b7936b54d93b8e87dc5e22eb.jpg",
  "https://i.pinimg.com/736x/95/52/aa/9552aa21a168c30726f40453b4a61e75.jpg",
  "https://i.pinimg.com/736x/14/5b/b4/145bb44f3b04338fd851cffccfdf758f.jpg",
  "https://i.pinimg.com/736x/2b/70/78/2b7078b5381073c51051a0a444132ddf.jpg",
  "https://i.pinimg.com/736x/3d/a0/38/3da038fa6d5f07b6fc4d5415f4c79211.jpg",
];

const pageStyles = {
  color: "#fff",
  padding: 50,
  fontWeight: 300,
  fontSize: 20,
  transition: "opacity 1.5s ease, filter 2s ease",
  textAlign: "center",
  minHeight: "100vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  position: "relative",
  fontFamily: "'Neue Montreal', sans-serif",
  overflow: "hidden", // Prevent scrolling
};

const containerStyle = {
  margin: "0 auto",
  maxWidth: "600px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: "40px",
};

const titleStyle = {
  fontSize: "48px",
  fontWeight: "600",
  marginBottom: "8px",
  fontFamily: "'Playfair Display', serif",
  letterSpacing: "0.03em",
  color: "#fff",
};

const subtitleStyle = {
  fontSize: "24px",
  color: "#fff",
  marginBottom: "48px",
  fontFamily: "'Neue Montreal', sans-serif",
  fontWeight: "300",
  letterSpacing: "0.03em",
  whiteSpace: "nowrap",
};

const featureListStyle = {
  listStyle: "none",
  padding: 0,
  marginBottom: "48px",
  textAlign: "left",
};

const featureItemStyle = {
  fontSize: "20px",
  marginBottom: "16px",
  display: "flex",
  alignItems: "center",
  fontFamily: "'Neue Montreal', sans-serif",
  fontWeight: "300",
  letterSpacing: "0.02em",
  color: "#fff",
};

const bulletPointStyle = {
  color: "transparent",
  marginRight: "12px",
  fontSize: "24px",
  fontFamily: "'Times New Roman Condensed', 'Times New Roman', serif",
};

const buttonStyle = {
  background: "linear-gradient(45deg, #4F92D5, #6BA5E7)",
  color: "#fff",
  padding: "16px 36px",
  fontSize: "1.25rem",
  fontWeight: "500",
  borderRadius: "40px",
  cursor: "pointer",
  display: "inline-block",
  textAlign: "center",
  textDecoration: "none",
  transition: "all 0.3s ease",
  fontFamily: "'Neue Montreal', sans-serif",
  letterSpacing: "0.1em",
  animation: "pulse 2s infinite",
};

const mobileBackgroundStyle = {
  position: "fixed",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  zIndex: -1,
  objectFit: "cover",
  transition: "opacity 0.5s ease-in-out",
};

const desktopBackgroundStyle = {
  position: "fixed",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  zIndex: -1,
  display: "grid",
  gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
  gap: "4px",
  overflow: "hidden", // Prevent scrolling
};

const BackgroundImages = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [startTime, setStartTime] = useState(null);
  const [gridSize, setGridSize] = useState(0);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 1024);
      const columns = Math.ceil(window.innerWidth / 200);
      const rows = Math.ceil(window.innerHeight / 200);
      setGridSize(columns * rows);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    if (isMobile) {
      setStartTime(Date.now());
      let intervalId;

      const updateImage = () => {
        const elapsed = Date.now() - startTime;
        const seconds = Math.floor(elapsed / 1000);

        let interval;
        if (seconds < 1) interval = 50;
        else if (seconds < 2) interval = 100;
        else if (seconds < 3) interval = 200;
        else if (seconds < 4) interval = 500;
        else if (seconds < 6) interval = 1500;
        else interval = 1750;

        setCurrentImageIndex((prev) => {
          if (window.navigator && window.navigator.vibrate) {
            window.navigator.vibrate(10);
          }
          return (prev + 1) % images.length;
        });

        intervalId = setTimeout(updateImage, interval);
      };

      intervalId = setTimeout(updateImage, 50);

      return () => clearTimeout(intervalId);
    }
  }, [isMobile, startTime]);

  if (isMobile) {
    return (
      <div style={mobileBackgroundStyle}>
        <img
          src={images[currentImageIndex]}
          alt="Background"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
      </div>
    );
  }

  return (
    <div style={desktopBackgroundStyle}>
      {[...Array(gridSize)].map((_, index) => (
        <img
          key={index}
          src={images[index % images.length]}
          alt={`Background ${(index % images.length) + 1}`}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
      ))}
    </div>
  );
};

const IndexPage = () => {
  return (
    <main style={pageStyles}>
      <BackgroundImages />
      <div style={containerStyle}>
        <h1 style={titleStyle}>soul</h1>
        <h2 style={subtitleStyle}>an anonymous journaling app</h2>

        <ul style={featureListStyle}>
          <li style={featureItemStyle}>
            <span style={bulletPointStyle}>•</span>
            write your thoughts.
          </li>
          <li style={featureItemStyle}>
            <span style={bulletPointStyle}>•</span>
            share your reflections.
          </li>
          <li style={featureItemStyle}>
            <span style={bulletPointStyle}>•</span>
            read others' stories.
          </li>
        </ul>

        <a
          href="/join"
          style={buttonStyle}
          onMouseEnter={(e) => (e.target.style.transform = "scale(1.05)")}
          onMouseLeave={(e) => (e.target.style.transform = "scale(1)")}
        >
          get access
        </a>
      </div>
    </main>
  );
};

export default IndexPage;

export const Head = () => <title>nuance</title>;
