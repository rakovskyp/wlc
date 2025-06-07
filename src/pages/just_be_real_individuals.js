import * as React from "react";

const pageStyles = {
  color: "#1a1a1a",
  minHeight: "100vh",
  fontFamily:
    "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
  fontWeight: 400,
  fontSize: 16,
  lineHeight: 1.6,
  background: "#ffffff",
  overflowX: "hidden",
};

const sectionStyle = {
  padding: "60px 20px",
  maxWidth: "1200px",
  margin: "0 auto",
};

const heroSectionStyle = {
  ...sectionStyle,
  textAlign: "center",
  paddingTop: "40px",
  paddingBottom: "80px",
};

const slideshowContainerStyle = {
  position: "relative",
  width: "100%",
  maxWidth: "350px",
  margin: "0 auto 40px",
  borderRadius: "20px",
  overflow: "hidden",
  boxShadow: "0 12px 40px rgba(0, 0, 0, 0.1)",
  border: "1px solid rgba(0, 0, 0, 0.1)",
};

const slideContainerStyle = {
  position: "relative",
  width: "100%",
  height: "400px",
  overflow: "hidden",
};

const slideStyle = {
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  opacity: 0,
  transition: "opacity 0.5s ease-in-out",
};

const activeSlideStyle = {
  ...slideStyle,
  opacity: 1,
};

const productImageStyle = {
  width: "100%",
  height: "100%",
  objectFit: "cover",
};

const dotsContainerStyle = {
  display: "flex",
  justifyContent: "center",
  gap: "8px",
  marginTop: "16px",
  marginBottom: "24px",
};

const dotStyle = {
  width: "12px",
  height: "12px",
  borderRadius: "50%",
  backgroundColor: "rgba(0, 0, 0, 0.3)",
  cursor: "pointer",
  transition: "all 0.3s ease",
};

const activeDotStyle = {
  ...dotStyle,
  backgroundColor: "#dc2626",
  transform: "scale(1.2)",
};

const mainHeadingStyle = {
  color: "#000000",
  fontSize: "clamp(2.5rem, 6vw, 4rem)",
  fontWeight: "700",
  letterSpacing: "-0.02em",
  lineHeight: 1.1,
  marginBottom: "16px",
  fontFamily:
    "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
};

const subheadingStyle = {
  color: "#666666",
  fontSize: "clamp(1.1rem, 3vw, 1.4rem)",
  fontWeight: "500",
  marginBottom: "24px",
  letterSpacing: "0.5px",
};

const heroDescriptionStyle = {
  color: "#333333",
  fontSize: "clamp(1rem, 2.5vw, 1.2rem)",
  lineHeight: 1.7,
  maxWidth: "600px",
  margin: "0 auto 40px",
};

const statsContainerStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
  gap: "24px",
  marginBottom: "40px",
  maxWidth: "800px",
  margin: "0 auto 40px",
};

const statCardStyle = {
  padding: "24px",
  backgroundColor: "#f8f9fa",
  borderRadius: "16px",
  border: "2px solid #000000",
  textAlign: "center",
};

const statNumberStyle = {
  color: "#000000",
  fontSize: "2.5rem",
  fontWeight: "700",
  lineHeight: 1,
  marginBottom: "8px",
};

const statLabelStyle = {
  color: "#666666",
  fontSize: "0.9rem",
  fontWeight: "600",
  letterSpacing: "0.5px",
};

const buttonStyle = {
  backgroundColor: "#dc2626",
  color: "#ffffff",
  padding: "18px 40px",
  fontSize: "1.1rem",
  fontWeight: "700",
  border: "none",
  borderRadius: "12px",
  cursor: "pointer",
  textDecoration: "none",
  boxShadow: "0 6px 20px rgba(220, 38, 38, 0.3)",
  transition: "all 0.3s ease",
  letterSpacing: "1px",
  display: "inline-block",
};

const ProductSlideshow = () => {
  const images = [
    {
      src: "/jbr1_solo.png",
      alt: "Just Be Real conversation cards with categories visible",
    },
    {
      src: "/jbr2_solo.png",
      alt: "Just Be Real card game box with floral design",
    },
  ];

  const [currentSlide, setCurrentSlide] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }, 4000); // Change slide every 4 seconds

    return () => clearInterval(timer);
  }, [images.length]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div style={slideshowContainerStyle}>
      <div style={slideContainerStyle}>
        {images.map((image, index) => (
          <div
            key={index}
            style={index === currentSlide ? activeSlideStyle : slideStyle}
          >
            <img src={image.src} alt={image.alt} style={productImageStyle} />
          </div>
        ))}
      </div>

      <div style={dotsContainerStyle}>
        {images.map((_, index) => (
          <div
            key={index}
            style={index === currentSlide ? activeDotStyle : dotStyle}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>
    </div>
  );
};

const JustBeRealPage = () => {
  const [hoveredButton, setHoveredButton] = React.useState(null);

  const handleBuyNowClick = () => {
    // Navigate to waitlist page with product type parameter
    if (typeof window !== "undefined") {
      window.location.href = "/waitlist?product=individuals";
    }
  };

  return (
    <main style={pageStyles}>
      {/* Hero Section */}
      <section style={heroSectionStyle}>
        <ProductSlideshow />

        <h1 style={mainHeadingStyle}>JUST BE REAL</h1>
        <p style={subheadingStyle}>A Purpose-Driven Card Game</p>

        <p style={heroDescriptionStyle}>
          Empowering authentic connections through three thoughtfully designed
          levels of conversation starters plus surprise wildcards. Whether
          you're strengthening bonds with loved ones or forging new
          relationships, these cards create space for the conversations that
          truly matter.
        </p>

        <div style={statsContainerStyle}>
          <div style={statCardStyle}>
            <div style={statNumberStyle}>3</div>
            <div style={statLabelStyle}>Levels</div>
          </div>
          <div style={statCardStyle}>
            <div style={statNumberStyle}>170</div>
            <div style={statLabelStyle}>Questions</div>
          </div>
        </div>

        <button
          style={{
            ...buttonStyle,
            transform:
              hoveredButton === "primary"
                ? "translateY(-2px)"
                : "translateY(0)",
            boxShadow:
              hoveredButton === "primary"
                ? "0 8px 25px rgba(220, 38, 38, 0.4)"
                : "0 6px 20px rgba(220, 38, 38, 0.3)",
          }}
          onClick={handleBuyNowClick}
          onMouseEnter={() => setHoveredButton("primary")}
          onMouseLeave={() => setHoveredButton(null)}
        >
          BUY NOW - $24.99
        </button>
      </section>
    </main>
  );
};

export default JustBeRealPage;

export const Head = () => (
  <>
    <title>
      Just Be Real - Purpose-Driven Card Game | Meaningful Connections
    </title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta
      name="description"
      content="A purpose-driven card game and movement empowering authentic connections. Three levels of thoughtful questions plus wildcards to deepen existing relationships and create new ones."
    />
    <meta
      name="keywords"
      content="meaningful connections, conversation cards, relationship building, authentic conversations, purpose-driven game, connection cards, social game, friendship building"
    />
    <meta name="theme-color" content="#dc2626" />
    <meta
      property="og:title"
      content="Just Be Real - Purpose-Driven Card Game & Movement"
    />
    <meta
      property="og:description"
      content="Empowering authentic connections through three levels of thoughtful conversation starters and wildcards."
    />
    <meta property="og:type" content="product" />
  </>
);
