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
  color: "#D35843",
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
  backgroundColor: "#FF867C", // Softer coral color
  color: "#fff",
  padding: "20px 40px", // Increase padding to make it bigger
  fontSize: "1.2rem", // Increase font size for better readability
  fontWeight: "bold",
  border: "none",
  borderRadius: "12px", // Optional: increase the border-radius for a rounder button
  cursor: "pointer",
  display: "inline-block",
  textAlign: "center",
  textDecoration: "none",
  boxShadow: "0px 6px 12px rgba(0, 0, 0, 0.1)", // Slightly increase shadow for emphasis
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

  const handleSubmit = (e) => {
    e.preventDefault();

    // Send POST request to serverless function
    fetch("/api/subscribe", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, phone }),
    })
      .then(async (response) => {
        if (response.ok) {
          localStorage.setItem('userData', JSON.stringify({ name, phone }));
          window.location.href = "/capacity";
        } else {
          const errorData = await response.json();
          alert(`Error: ${errorData.error}`);
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
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
          />
          <input
            type="tel"
            placeholder="phone number"
            style={inputStyle}
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
            inputMode="tel" // This will trigger a mobile phone keyboard with the '+' symbol
            pattern="(\+?\d{1,4}[\s-]?)?(\(?\d{1,3}\)?[\s-]?)?[\d\s\-]{5,15}" // Optional: This allows for international formats
          />
          <br />
          <br />
          <button
            style={buttonStyle}
            type="submit"
            onMouseEnter={(e) => (e.target.style.transform = "scale(1.05)")}
            onMouseLeave={(e) => (e.target.style.transform = "scale(1)")}
          >
            sign up
          </button>
        </form>
      </div>
    </main>
  );
};

export default JoinPage;

export const Head = () => <title>join with love club</title>;
