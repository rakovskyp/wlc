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
  fontSize: "clamp(2rem, 5vw, 3rem)",
  fontWeight: "700",
  marginBottom: "16px",
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
  color: "#666666",
  fontSize: "clamp(1rem, 2.5vw, 1.1rem)",
  lineHeight: 1.6,
  maxWidth: "500px",
  marginBottom: "40px",
};

const formContainerStyle = {
  backgroundColor: "#f8f9fa",
  padding: "32px",
  borderRadius: "16px",
  border: "2px solid #000000",
  maxWidth: "400px",
  width: "100%",
};

const formTitleStyle = {
  color: "#000000",
  fontSize: "1.2rem",
  fontWeight: "600",
  marginBottom: "16px",
};

const inputStyle = {
  width: "100%",
  padding: "12px 16px",
  fontSize: "1rem",
  border: "2px solid #e5e7eb",
  borderRadius: "8px",
  marginBottom: "16px",
  fontFamily:
    "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
  transition: "border-color 0.3s ease",
};

const inputFocusStyle = {
  ...inputStyle,
  borderColor: "#dc2626",
  outline: "none",
};

const buttonStyle = {
  backgroundColor: "#dc2626",
  color: "#ffffff",
  padding: "12px 24px",
  fontSize: "1rem",
  fontWeight: "600",
  border: "none",
  borderRadius: "8px",
  cursor: "pointer",
  width: "100%",
  transition: "all 0.3s ease",
  letterSpacing: "0.5px",
};

const WaitlistPage = () => {
  const [email, setEmail] = React.useState("");
  const [isHovered, setIsHovered] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);
  const [error, setError] = React.useState("");
  const [productType, setProductType] = React.useState("individuals");

  React.useEffect(() => {
    // Get product type from URL search params
    const urlParams = new URLSearchParams(window.location.search);
    const type = urlParams.get("product") || "individuals";
    setProductType(type);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email.trim()) return;

    setIsLoading(true);
    setError("");

    try {
      const response = await fetch("/api/waitlist", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email.trim(),
          type: productType,
        }),
      });

      if (response.ok) {
        // Redirect to thank you page with product type parameter
        if (typeof window !== "undefined") {
          window.location.href = `/waitlist-thank-you?product=${productType}`;
        }
      } else {
        const data = await response.json();
        setError(data.error || "Something went wrong. Please try again.");
      }
    } catch (err) {
      setError("Network error. Please check your connection and try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const productDisplayName =
    productType === "couples"
      ? "Just Be Real - Couples"
      : "Just Be Real - Individuals";

  return (
    <main style={pageStyles}>
      <div style={containerStyle}>
        <h1 style={headingStyle}>JUST BE REAL</h1>
        <h2 style={subheadingStyle}>Currently Out of Stock</h2>

        <p style={messageStyle}>
          Sorry, <strong>{productDisplayName}</strong> is currently out of
          stock. Join our waitlist to be the first to know when it's available
          again!
        </p>

        <div style={formContainerStyle}>
          <h3 style={formTitleStyle}>Join the Waitlist</h3>
          <form onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={inputStyle}
              required
              disabled={isLoading}
            />
            {error && (
              <div
                style={{
                  color: "#dc2626",
                  fontSize: "0.9rem",
                  marginBottom: "16px",
                  textAlign: "left",
                }}
              >
                {error}
              </div>
            )}
            <button
              type="submit"
              disabled={isLoading}
              style={{
                ...buttonStyle,
                backgroundColor: isLoading
                  ? "#9ca3af"
                  : isHovered
                    ? "#b91c1c"
                    : "#dc2626",
                transform:
                  isHovered && !isLoading
                    ? "translateY(-1px)"
                    : "translateY(0)",
                cursor: isLoading ? "not-allowed" : "pointer",
              }}
              onMouseEnter={() => !isLoading && setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              {isLoading ? "Adding to Waitlist..." : "Notify Me When Available"}
            </button>
          </form>
        </div>
      </div>
    </main>
  );
};

export default WaitlistPage;

export const Head = () => (
  <>
    <title>Just Be Real - Waitlist | Out of Stock</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta
      name="description"
      content="Join the waitlist for Just Be Real conversation cards. We'll notify you as soon as they're back in stock."
    />
    <meta name="robots" content="noindex, nofollow" />
    <meta name="theme-color" content="#dc2626" />
  </>
);
