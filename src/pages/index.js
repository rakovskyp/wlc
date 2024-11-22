import React, { useState, useEffect } from "react";
import { StaticImage } from "gatsby-plugin-image";

const images = [
  "https://i.pinimg.com/736x/51/80/48/518048194929c8adeef9e38581202f02.jpg",
  "https://i.pinimg.com/736x/cc/77/44/cc774492deed5540a5f47fa70f77f575.jpg",
  "https://i.pinimg.com/474x/4a/1f/a6/4a1fa65e455ef2e642af3de0c51def37.jpg",
  "https://i.pinimg.com/474x/e7/c5/46/e7c5467b7124590669b4fb4bf353e1aa.jpg",
  "https://i.pinimg.com/474x/f8/a7/1c/f8a71ce3585b8ca6100e6af346eb0c57.jpg",
  "https://i.pinimg.com/736x/51/80/48/518048194929c8adeef9e38581202f02.jpg",
  "https://i.pinimg.com/474x/d7/1b/b0/d71bb0463c6a646bb414d45d8df125b6.jpg",
  "https://i.pinimg.com/474x/a2/ff/32/a2ff3245a356ac6737a7fa34327270c3.jpg",
  "https://i.pinimg.com/enabled_lo_mid/474x/b1/6b/d0/b16bd071326ec5026bf59fcd6b1c95e8.jpg",
  "https://i.pinimg.com/enabled_lo_mid/474x/58/c5/a0/58c5a0936f46ab7d4d813054328aa108.jpg",
  "https://i.pinimg.com/enabled_lo_mid/474x/85/69/ad/8569ad8a38fe6a8dc92d30de4250f516.jpg",
  "https://i.pinimg.com/474x/d6/1d/7e/d61d7e7c9af16ea2f4aeea2b33c2757e.jpg",
  "https://i.pinimg.com/474x/49/75/48/497548dd526b59f5a1da1b6c55d3733d.jpg",
  "https://i.pinimg.com/736x/51/80/48/518048194929c8adeef9e38581202f02.jpg",
  "https://i.pinimg.com/474x/20/3b/af/203baf28766105e57a920704c9b8f5f9.jpg",
  "https://i.pinimg.com/enabled_lo_mid/474x/b3/69/08/b3690892d4de6d41985fea4b337cc329.jpg",
  "https://i.pinimg.com/enabled_lo_mid/474x/17/8b/dd/178bdd79f6d05c4abed92045d074cc90.jpg",
  "https://i.pinimg.com/474x/bd/7c/e0/bd7ce0417319efc91a62417b428c9514.jpg",
  "https://i.pinimg.com/474x/50/af/43/50af43135c0a37a657c6061c4f2c5a1d.jpg",
  "https://i.pinimg.com/736x/51/80/48/518048194929c8adeef9e38581202f02.jpg"
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
  fontFamily: "'Poppins', sans-serif"
};

const containerStyle = {
  margin: "0 auto",
  maxWidth: "600px",
  display: "flex",
  flexDirection: "column", 
  alignItems: "center",
  padding: "40px"
};

const titleStyle = {
  fontSize: "48px",
  fontWeight: "600",
  marginBottom: "8px",
  fontFamily: "'Playfair Display', serif",
  letterSpacing: "0.05em"
};

const subtitleStyle = {
  fontSize: "24px",
  color: "#eee",
  marginBottom: "48px",
  fontFamily: "'Poppins', sans-serif",
  fontWeight: "300",
  letterSpacing: "0.03em",
  whiteSpace: "nowrap"
};

const featureListStyle = {
  listStyle: "none",
  padding: 0,
  marginBottom: "48px",
  textAlign: "left"
};

const featureItemStyle = {
  fontSize: "20px",
  marginBottom: "16px",
  display: "flex",
  alignItems: "center",
  fontFamily: "'Poppins', sans-serif",
  fontWeight: "300",
  letterSpacing: "0.02em"
};

const bulletPointStyle = {
  color: "transparent",
  marginRight: "12px",
  fontSize: "24px",
  fontFamily: "'Playfair Display', serif"
};

const buttonStyle = {
  background: "linear-gradient(45deg, #4F92D5, #6BA5E7)",
  color: "#fff",
  padding: "16px 36px",
  fontSize: "1.25rem",
  fontWeight: "600",
  borderRadius: "40px",
  cursor: "pointer",
  display: "inline-block",
  textAlign: "center",
  textDecoration: "none",
  transition: "all 0.3s ease",
  fontFamily: "'Poppins', sans-serif",
  letterSpacing: "0.1em",
  animation: "pulse 2s infinite"
};

const mobileBackgroundStyle = {
  position: "fixed",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  zIndex: -1,
  objectFit: "cover",
  transition: "opacity 0.5s ease-in-out"
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
  gap: "4px"
};

const BackgroundImages = ({ isLoaded }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [startTime, setStartTime] = useState(null);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 1024);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    if (isMobile && isLoaded) {
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

        setCurrentImageIndex(prev => (prev + 1) % images.length);
        intervalId = setTimeout(updateImage, interval);
      };

      intervalId = setTimeout(updateImage, 50);
      
      return () => clearTimeout(intervalId);
    }
  }, [isMobile, startTime, isLoaded]);

  if (isMobile) {
    return (
      <div style={mobileBackgroundStyle}>
        <img 
          src={images[currentImageIndex]}
          alt="Background"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover"
          }}
        />
      </div>
    );
  }

  return (
    <div style={desktopBackgroundStyle}>
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`Background ${index + 1}`}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover"
          }}
        />
      ))}
    </div>
  );
};

const IndexPage = () => {
  return (
    <LoadingPage>
      {({ isLoaded }) => (
        <main style={{
          ...pageStyles,
          opacity: isLoaded ? 1 : 0,
          filter: isLoaded ? 'blur(0px)' : 'blur(10px)'
        }}>
          <BackgroundImages isLoaded={isLoaded} />
          <div style={containerStyle}>
            <h1 style={titleStyle}>SOUL</h1>
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
      )}
    </LoadingPage>
  );
};

const LoadingPage = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [percentage, setPercentage] = useState(0);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    // Preload images
    Promise.all(
      images.map(src => {
        return new Promise((resolve, reject) => {
          const img = new Image();
          img.src = src;
          img.onload = resolve;
          img.onerror = reject;
        });
      })
    ).then(() => {
      // Start percentage counter after images are loaded
      const percentageInterval = setInterval(() => {
        setPercentage((prev) => {
          if (prev >= 100) {
            clearInterval(percentageInterval);
            setLoading(false);
            return 100;
          }
          return prev + 1;
        });
      }, 15);
    });
  }, []);

  useEffect(() => {
    if (!loading) {
      const timeout = setTimeout(() => {
        setShowContent(true);
      }, 100); 
      return () => clearTimeout(timeout);
    }
  }, [loading]);

  return (
    <>
      {/* Loading Screen */}
      <div
        className={`fixed inset-0 bg-white flex items-center justify-center transition-opacity duration-500 ${
          loading ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex items-center gap-8">
          <svg
            viewBox="0 0 24 24"
            width="32"
            height="32"
            className="overflow-visible"
          >
            {/* Heart outline */}
            <path
              d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
              fill="none"
              stroke="#4F92D5"
              strokeWidth="2"
            />
            {/* Filling heart with clip path */}
            <path
              d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
              fill="#4F92D5"
              style={{
                clipPath: `inset(${100 - percentage}% 0 0 0)`,
              }}
            />
          </svg>
          <span className="text-[#4F92D5] text-4xl font-bold">
            {percentage}%
          </span>
        </div>
      </div>

      {/* Main Content */}
      <div
        className={`transition-opacity duration-[1500ms] ${
          showContent ? "opacity-100" : "opacity-0"
        }`}
      >
        {typeof children === 'function' ? children({ isLoaded: showContent }) : children}
      </div>
    </>
  );
};

export default IndexPage;

export const Head = () => <title>soul</title>;
