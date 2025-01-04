import * as React from "react";

const pageStyles = {
  color: "#232129",
  minHeight: "100vh",
  display: "flex",
  alignItems: "flex-start",
  justifyContent: "center",
  padding: "32px 24px", // Reduced top padding from 64px to 32px
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
  fontWeight: 300,
  fontSize: 20,
  lineHeight: 1.6,
  background: "white",
};

const containerStyle = {
  width: "100%",
  maxWidth: "600px",
  textAlign: "center",
  padding: "32px", // Reduced padding from 48px to 32px
};

const headingAccentStyles = {
  color: "#4F92D5",
  fontSize: "2rem",
  marginBottom: "1.5rem", // Reduced margin from 2rem to 1.5rem
  fontWeight: "700",
  letterSpacing: "-0.03em",
  lineHeight: 1.2,
};

const paragraphStyles = {
  marginBottom: 24, // Reduced from 32 to 24
  fontSize: "1.15rem",
  lineHeight: 1.8,
  color: "#454545",
  maxWidth: "480px",
  margin: "0 auto 24px", // Reduced bottom margin from 32px to 24px
};

const ClosedPage = () => {
  const [userData, setUserData] = React.useState({
    name: "n/a",
    phone: "n/a",
  });
  const [feedback, setFeedback] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(false);

  React.useEffect(() => {
    const storedData = localStorage.getItem("userData");
    if (storedData) {
      setUserData(JSON.parse(storedData));
      localStorage.removeItem("userData");
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    fetch("/api/feedback", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        phone: userData.phone,
        name: userData.name,
        feedback: feedback,
      }),
    })
      .then(async (response) => {
        if (response.ok) {
          window.location.href = "/thankyou";
        } else {
          const errorData = await response.json();
          alert(`Error: ${errorData.error}`);
          setIsLoading(false);
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        setIsLoading(false);
      });
  };

  const loadingButtonStyle = {
    backgroundColor: "#4F92D5",
    color: "#fff",
    padding: "18px 36px",
    fontSize: "1.15rem",
    fontWeight: "600",
    border: "none",
    borderRadius: "12px",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    width: "180px",
    height: "64px",
    cursor: "default",
    opacity: 0.8,
    boxShadow: "0 8px 20px rgba(79, 146, 213, 0.25)",
  };

  return (
    <main style={pageStyles}>
      <div style={containerStyle}>
        <h1 style={headingAccentStyles}>Status: Pending</h1>
        <p style={paragraphStyles}>
        thank you for your interest! we’re currently at capacity but will notify you asap
        </p>
        <p
          style={{
            ...paragraphStyles,
            fontWeight: "500",
            color: "#333",
            fontSize: "1.1rem",
          }}
        >
          P.S. want early access? answer these questions!
        </p>
        <p
          style={{
            ...paragraphStyles,
            fontWeight: "500",
            color: "#333", 
            fontSize: "1.1rem",
          }}
        >
          your input really helps a lot and i promise i will read this — i love learning about you guys and the more details the better!
        </p>
        <p>
          questions:
        </p>
        <ol
          style={{
            ...paragraphStyles,
            fontWeight: "500", 
            color: "#333",
            fontSize: "1.1rem",
            textAlign: "left",
            paddingLeft: "2rem",
            margin: "1rem 0",
            listStyleType: "decimal",
            counterReset: "item",
          }}
        >
          <li style={{ marginBottom: "0.5rem" }}>what stage of life are you in?</li>
          <li style={{ marginBottom: "0.5rem" }}>how do you plan on using this app?</li>
          <li style={{ marginBottom: "0.5rem" }}>who are you, really?</li>
        </ol>
        <form
          onSubmit={handleSubmit}
          style={{ maxWidth: "480px", margin: "0 auto" }}
        >
          <textarea
            placeholder="i am..."
            style={inputStyle}
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
            required
            rows={4}
            disabled={isLoading}
          />
          {isLoading ? (
            <div style={loadingButtonStyle}>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                style={{
                  animation: "spin 1s linear infinite",
                }}
              >
                <style>
                  {`
                    @keyframes spin {
                      0% { transform: rotate(0deg); }
                      100% { transform: rotate(360deg); }
                    }
                  `}
                </style>
                <path
                  d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"
                  fill="currentColor"
                  opacity="0.3"
                />
                <path
                  d="M12 4V2C6.48 2 2 6.48 2 12h2c0-4.42 3.58-8 8-8z"
                  fill="currentColor"
                />
              </svg>
            </div>
          ) : (
            <button
              style={{
                ...buttonStyle,
                opacity: feedback.trim() ? 1 : 0.7,
                cursor: feedback.trim() ? "pointer" : "not-allowed",
                transform: feedback.trim() ? "translateY(0)" : "none",
              }}
              type="submit"
              disabled={!feedback.trim()}
              onMouseEnter={(e) =>
                feedback.trim() && (e.target.style.transform = "translateY(-2px)")
              }
              onMouseLeave={(e) =>
                feedback.trim() && (e.target.style.transform = "translateY(0)")
              }
            >
              submit
            </button>
          )}
        </form>
      </div>
    </main>
  );
};

const inputStyle = {
  padding: "16px 20px",
  fontSize: "1.1rem",
  width: "100%",
  maxWidth: "100%",
  borderRadius: "12px",
  border: "2px solid #eee",
  marginBottom: "24px",
  transition: "all 0.2s ease",
  resize: "vertical",
  minHeight: "140px",
  fontFamily: "inherit",
  backgroundColor: "#fafafa",
  "&:focus": {
    borderColor: "#4F92D5",
    outline: "none",
    backgroundColor: "#fff",
    boxShadow: "0 4px 12px rgba(79, 146, 213, 0.1)",
  },
};

const buttonStyle = {
  backgroundColor: "#4F92D5",
  color: "#fff",
  padding: "18px 36px",
  fontSize: "1.15rem",
  fontWeight: "600",
  border: "none",
  borderRadius: "12px",
  cursor: "pointer",
  display: "inline-block",
  textAlign: "center",
  textDecoration: "none",
  boxShadow: "0 8px 20px rgba(79, 146, 213, 0.25)",
  transition: "all 0.2s ease",
  letterSpacing: "0.02em",
  width: "auto",
  minWidth: "180px",
};

export default ClosedPage;

export const Head = () => <title>nuance - currently at capacity</title>;
