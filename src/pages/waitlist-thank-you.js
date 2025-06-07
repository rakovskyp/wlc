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

const containerStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  minHeight: "100vh",
  padding: "40px 20px",
  textAlign: "center",
};

const headingStyle = {
  color: "#000000",
  fontSize: "clamp(2.5rem, 6vw, 4rem)",
  fontWeight: "700",
  letterSpacing: "-0.02em",
  lineHeight: 1.1,
  marginBottom: "24px",
  fontFamily:
    "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
};

const subheadingStyle = {
  color: "#dc2626",
  fontSize: "clamp(1.2rem, 3vw, 1.5rem)",
  fontWeight: "600",
  marginBottom: "32px",
};

const messageStyle = {
  color: "#333333",
  fontSize: "clamp(1rem, 2.5vw, 1.2rem)",
  lineHeight: 1.7,
  maxWidth: "600px",
  marginBottom: "40px",
};

const WaitlistThankYouPage = () => {
  const [productType, setProductType] = React.useState("individuals");

  React.useEffect(() => {
    // Get product type from URL search params
    const urlParams = new URLSearchParams(window.location.search);
    const type = urlParams.get("product") || "individuals";
    setProductType(type);
  }, []);

  const productDisplayName =
    productType === "couples"
      ? "Just Be Real - Couples"
      : "Just Be Real - Individuals";

  return (
    <main style={pageStyles}>
      <div style={containerStyle}>
        <h1 style={headingStyle}>Thank You! 🎉</h1>
        <p style={subheadingStyle}>You're on the waitlist!</p>

        <p style={messageStyle}>
          You've successfully joined the waitlist for{" "}
          <strong>{productDisplayName}</strong>. We'll send you an email as soon
          as it's back in stock!
        </p>
      </div>
    </main>
  );
};

export default WaitlistThankYouPage;

export const Head = () => (
  <>
    <title>Thank You - Waitlist Confirmation | Just Be Real</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta
      name="description"
      content="Thank you for joining the Just Be Real waitlist! We'll notify you as soon as the cards are back in stock."
    />
    <meta name="robots" content="noindex, nofollow" />
    <meta name="theme-color" content="#dc2626" />
  </>
);
