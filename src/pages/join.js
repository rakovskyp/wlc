import React, { useState, useEffect } from "react";
import { LoadingPage } from "./index";

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
  backgroundColor: "#FF867C",
  color: "#fff",
  padding: "14px 28px",
  fontSize: "1rem",
  fontWeight: "bold",
  border: "none",
  borderRadius: "8px",
  cursor: "pointer",
  display: "inline-block",
  textAlign: "center",
  textDecoration: "none",
  boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
  transition: "transform 0.2s ease, box-shadow 0.2s ease",
};

const JoinPage = () => {
  const [phone, setPhone] = useState("");
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);
  const [redirectUrl, setRedirectUrl] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Start the loading screen

    try {
      const response = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, phone }),
      });

      if (response.ok) {
        // Set the URL to redirect to
        setRedirectUrl("https://buy.stripe.com/7sI9Ejh2t3OJ1a07su");
      } else {
        const errorData = await response.json();
        alert(`Error: ${errorData.error}`);
        setLoading(false); // Stop loading if there is an error
      }
    } catch (error) {
      console.error("Error:", error);
      alert("There was an error. Please try again.");
      setLoading(false); // Stop loading on error
    }
  };

  useEffect(() => {
    if (redirectUrl) {
      window.location.href = redirectUrl;
    }
  }, [redirectUrl]);

  return (
    <main style={pageStyles}>
      {loading ? (
        <LoadingPage />
      ) : (
        <div style={containerStyle}>
          <h1 style={headingAccentStyles}>with love club</h1>
          <p style={paragraphStyles}>
            enter your name and phone number below to join the with love club
            for $8 per month.
          </p>
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
              pattern="[0-9]*"
              inputMode="numeric"
            />
            <br />
            <button style={buttonStyle} type="submit">
              join with love club
            </button>
          </form>
        </div>
      )}
    </main>
  );
};

export default JoinPage;

export const Head = () => <title>join with love club</title>;
