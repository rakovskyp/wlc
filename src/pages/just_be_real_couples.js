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
  boxShadow: "0 12px 40px rgba(0, 0, 0, 0.15)",
  border: "1px solid rgba(254, 109, 115, 0.1)",
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
  backgroundColor: "rgba(254, 109, 115, 0.3)",
  cursor: "pointer",
  transition: "all 0.3s ease",
};

const activeDotStyle = {
  ...dotStyle,
  backgroundColor: "#fe6d73",
  transform: "scale(1.2)",
};

const mainHeadingStyle = {
  color: "#fe6d73",
  fontSize: "clamp(2.5rem, 6vw, 4rem)",
  fontWeight: "700",
  textTransform: "lowercase",
  letterSpacing: "-0.02em",
  lineHeight: 1.1,
  marginBottom: "16px",
  fontFamily: "Georgia, serif",
};

const subheadingStyle = {
  color: "#666666",
  fontSize: "clamp(1.1rem, 3vw, 1.4rem)",
  fontWeight: "500",
  marginBottom: "24px",
};

const heroDescriptionStyle = {
  color: "#444444",
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
  backgroundColor: "#fef7f7",
  borderRadius: "16px",
  border: "1px solid rgba(254, 109, 115, 0.1)",
  textAlign: "center",
};

const statNumberStyle = {
  color: "#fe6d73",
  fontSize: "2.5rem",
  fontWeight: "700",
  lineHeight: 1,
  marginBottom: "8px",
};

const statLabelStyle = {
  color: "#666666",
  fontSize: "0.9rem",
  fontWeight: "500",
  textTransform: "uppercase",
  letterSpacing: "0.5px",
};

const buttonStyle = {
  backgroundColor: "#fe6d73",
  color: "#ffffff",
  padding: "18px 40px",
  fontSize: "1.1rem",
  fontWeight: "600",
  border: "none",
  borderRadius: "12px",
  cursor: "pointer",
  textDecoration: "none",
  boxShadow: "0 6px 20px rgba(254, 109, 115, 0.3)",
  transition: "all 0.3s ease",
  textTransform: "uppercase",
  letterSpacing: "0.5px",
  display: "inline-block",
};

const ProductSlideshow = () => {
  const images = [
    {
      src: "/jbr1_couples.png",
      alt: "Just Be Real conversation cards with categories visible",
    },
    {
      src: "/jbr2_couples.png",
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
      window.location.href = "/waitlist?product=couples";
    }
  };

  return (
    <main style={pageStyles}>
      {/* Hero Section */}
      <section style={heroSectionStyle}>
        <ProductSlideshow />

        <h1 style={mainHeadingStyle}>just be real</h1>
        <p style={subheadingStyle}>conversation cards for couples</p>

        <p style={heroDescriptionStyle}>
          deepen your connection with 170 thoughtfully designed conversation
          starters. transform date nights into unforgettable moments and
          strengthen your relationship through meaningful, vulnerable
          discussions.
        </p>

        <div style={statsContainerStyle}>
          <div style={statCardStyle}>
            <div style={statNumberStyle}>170</div>
            <div style={statLabelStyle}>questions</div>
          </div>
          <div style={statCardStyle}>
            <div style={statNumberStyle}>10</div>
            <div style={statLabelStyle}>categories</div>
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
                ? "0 8px 25px rgba(254, 109, 115, 0.4)"
                : "0 6px 20px rgba(254, 109, 115, 0.3)",
          }}
          onClick={handleBuyNowClick}
          onMouseEnter={() => setHoveredButton("primary")}
          onMouseLeave={() => setHoveredButton(null)}
        >
          buy now - $24.99
        </button>
      </section>
    </main>
  );
};

export default JustBeRealPage;

export const Head = () => (
  <>
    <title>
      Just Be Real - Conversation Cards for Couples | Deepen Your Connection
    </title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta
      name="description"
      content="Transform your relationship with 170 thoughtfully designed conversation starters. Join 200,000+ couples who have deepened their connection with Just Be Real cards."
    />
    <meta
      name="keywords"
      content="couples card game, conversation starters, relationship building, date night ideas, intimacy cards, couples therapy, anniversary gift"
    />
    <meta name="theme-color" content="#fe6d73" />
    <meta
      property="og:title"
      content="Just Be Real - Conversation Cards for Couples"
    />
    <meta
      property="og:description"
      content="Deepen your connection with 170 thoughtful conversation starters designed for couples."
    />
    <meta property="og:type" content="product" />
  </>
);
