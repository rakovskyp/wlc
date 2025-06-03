import * as React from "react";

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
  color: "#232129",
  minHeight: "100vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: "24px 16px",
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
  fontWeight: 300,
  fontSize: 18,
  lineHeight: 1.6,
  position: "relative",
  overflow: "hidden",
};

const containerStyle = {
  width: "100%",
  maxWidth: "400px",
  textAlign: "center",
  padding: "32px 24px",
  backgroundColor: "white",
  borderRadius: "20px",
  boxShadow: "0 20px 40px rgba(0, 0, 0, 0.1)",
  zIndex: 1,
  position: "relative",
};

const headingStyles = {
  color: "#4F92D5",
  fontSize: "2.5rem",
  marginBottom: "1rem",
  fontWeight: "700",
  letterSpacing: "-0.03em",
  lineHeight: 1.2,
};

const subheadingStyles = {
  color: "#666",
  fontSize: "1.1rem",
  marginBottom: "2rem",
  lineHeight: 1.6,
  fontWeight: "400",
  zIndex: 1,
  position: "relative",
};

const buttonContainerStyle = {
  display: "flex",
  flexDirection: "column",
  gap: "16px",
  marginTop: "2rem",
  zIndex: 1,
  position: "relative",
};

const appStoreButtonStyle = {
  backgroundColor: "#000",
  color: "#fff",
  padding: "16px 24px",
  fontSize: "1.1rem",
  fontWeight: "600",
  border: "none",
  borderRadius: "12px",
  cursor: "pointer",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "12px",
  textDecoration: "none",
  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
  transition: "all 0.2s ease",
  minHeight: "56px",
  zIndex: 1,
  position: "relative",
};

const playStoreButtonStyle = {
  backgroundColor: "#01875f",
  color: "#fff",
  padding: "16px 24px",
  fontSize: "1.1rem",
  fontWeight: "600",
  border: "none",
  borderRadius: "12px",
  cursor: "pointer",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "12px",
  textDecoration: "none",
  boxShadow: "0 4px 12px rgba(1, 135, 95, 0.3)",
  transition: "all 0.2s ease",
  minHeight: "56px",
  zIndex: 1,
  position: "relative",
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
  overflow: "hidden",
};

const BackgroundImages = () => {
  const [currentImageIndex, setCurrentImageIndex] = React.useState(0);
  const [isMobile, setIsMobile] = React.useState(false);
  const [startTime, setStartTime] = React.useState(null);
  const [gridSize, setGridSize] = React.useState(0);

  React.useEffect(() => {
    const checkMobile = () => {
      const mobileCheck = window.innerWidth <= 1024;
      setIsMobile(mobileCheck);
      if (!mobileCheck) {
        const columns = Math.ceil(window.innerWidth / 200);
        const rows = Math.ceil(window.innerHeight / 200);
        setGridSize(columns * rows);
      }
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  React.useEffect(() => {
    if (isMobile) {
      setStartTime(Date.now());
      let intervalId;

      const updateImage = () => {
        const elapsed = Date.now() - (startTime || Date.now());
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

  if (gridSize <= 0 && !isMobile) return null;

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

const AppPage = () => {
  React.useEffect(() => {
    const userAgent = navigator.userAgent || navigator.vendor || window.opera;

    // Detect iOS devices
    if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
      window.location.href =
        "https://apps.apple.com/us/app/soul-feel-heal-connect/id6741874801";
      return;
    }

    // Detect Android devices
    if (/android/i.test(userAgent)) {
      window.location.href =
        "https://play.google.com/store/apps/details?id=com.getsoulapp.soul";
      return;
    }

    // If neither iOS nor Android (desktop), do nothing - let them choose
  }, []);

  const handleiOSClick = () => {
    window.open(
      "https://apps.apple.com/us/app/soul-feel-heal-connect/id6741874801",
      "_blank",
    );
  };

  const handleAndroidClick = () => {
    window.open(
      "https://play.google.com/store/apps/details?id=com.getsoulapp.soul",
      "_blank",
    );
  };

  return (
    <main style={pageStyles}>
      <BackgroundImages />
      <div style={containerStyle}>
        <h1 style={headingStyles}>soul</h1>
        <p style={subheadingStyles}>Download the app to get started</p>

        <div style={buttonContainerStyle}>
          <button
            style={appStoreButtonStyle}
            onClick={handleiOSClick}
            onMouseEnter={(e) => {
              e.target.style.transform = "translateY(-2px)";
              e.target.style.boxShadow = "0 6px 16px rgba(0, 0, 0, 0.2)";
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = "translateY(0)";
              e.target.style.boxShadow = "0 4px 12px rgba(0, 0, 0, 0.15)";
            }}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
            </svg>
            Download for iOS
          </button>

          <button
            style={playStoreButtonStyle}
            onClick={handleAndroidClick}
            onMouseEnter={(e) => {
              e.target.style.transform = "translateY(-2px)";
              e.target.style.boxShadow = "0 6px 16px rgba(1, 135, 95, 0.4)";
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = "translateY(0)";
              e.target.style.boxShadow = "0 4px 12px rgba(1, 135, 95, 0.3)";
            }}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
            </svg>
            Download for Android
          </button>
        </div>

        <p
          style={{
            marginTop: "2rem",
            fontSize: "0.9rem",
            color: "#888",
            lineHeight: 1.5,
            zIndex: 1,
            position: "relative",
          }}
        >
          Available on iOS and Android
        </p>
      </div>
    </main>
  );
};

export default AppPage;

export const Head = () => <title>soul - download the app</title>;
