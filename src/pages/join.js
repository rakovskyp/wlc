import * as React from "react";

const pageStyles = {
  color: "#232129",
  padding: 96,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
  fontWeight: 300,
  fontSize: 20,
};

const containerStyle = {
  margin: "0 auto",
  maxWidth: "400px",
  textAlign: "center",
};

const headingAccentStyles = {
  color: "#4F92D5",
  fontSize: "1.5rem",
  marginBottom: "1rem",
};

const paragraphStyles = {
  marginBottom: 24,
  fontSize: "1rem",
};

const inputStyle = {
  padding: "12px",
  fontSize: "1rem",
  width: "100%",
  maxWidth: "100%",
  borderRadius: "8px",
  border: "1px solid #ccc",
  marginBottom: "16px",
};

const buttonStyle = {
  backgroundColor: "#4F92D5",
  color: "#fff",
  padding: "20px 40px",
  fontSize: "1.2rem",
  fontWeight: "bold",
  border: "none",
  borderRadius: "12px",
  cursor: "pointer",
  display: "inline-block",
  textAlign: "center",
  textDecoration: "none",
  boxShadow: "0px 6px 12px rgba(0, 0, 0, 0.1)",
  transition: "transform 0.2s ease, box-shadow 0.2s ease",
};

// Additional styling for :hover
const buttonHoverStyle = {
  transform: "scale(1.05)",
  boxShadow: "0px 6px 12px rgba(0, 0, 0, 0.15)",
};

const JoinPage = () => {
  const [phone, setPhone] = React.useState("");
  const [name, setName] = React.useState("");
  const [age, setAge] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    // Send POST request to serverless function
    fetch("/api/subscribe", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, phone, age }),
    })
      .then(async (response) => {
        if (response.ok) {
          localStorage.setItem("userData", JSON.stringify({ name, phone, age }));
          window.location.href = "/capacity";
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
    padding: "20px 40px",
    fontSize: "1.2rem",
    fontWeight: "bold",
    border: "none",
    borderRadius: "12px",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    width: "200px",
    height: "64px",
    cursor: "default",
    opacity: 0.8,
  };

  return (
    <main style={pageStyles}>
      <div style={containerStyle}>
        <h1 style={headingAccentStyles}>request access</h1>
        <p style={paragraphStyles}>enter your name and phone number below</p>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="your name"
            style={inputStyle}
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            disabled={isLoading}
          />
          <input
            type="tel"
            placeholder="phone number"
            style={inputStyle}
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
            inputMode="tel"
            pattern="(\+?\d{1,4}[\s-]?)?(\(?\d{1,3}\)?[\s-]?)?[\d\s\-]{5,15}"
            disabled={isLoading}
          />
          <input
            type="number"
            placeholder="your age"
            style={inputStyle}
            value={age}
            onChange={(e) => setAge(e.target.value)}
            required
            min="7"
            max="99"
            inputMode="numeric"
            disabled={isLoading}
          />
          <br />
          <br />
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
              style={buttonStyle}
              type="submit"
              onMouseEnter={(e) => (e.target.style.transform = "scale(1.05)")}
              onMouseLeave={(e) => (e.target.style.transform = "scale(1)")}
            >
              sign up
            </button>
          )}
        </form>
      </div>
    </main>
  );
};

export default JoinPage;

export const Head = () => <title>join soul</title>;
