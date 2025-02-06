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
  maxWidth: "800px",
  textAlign: "left",
};

const headingStyle = {
  color: "#4F92D5",
  fontSize: "2.5rem",
  marginBottom: "2rem",
  fontFamily: "'Playfair Display', serif",
};

const sectionStyle = {
  marginBottom: "2.5rem",
};

const subHeadingStyle = {
  color: "#4F92D5",
  fontSize: "1.5rem",
  marginBottom: "1rem",
  fontFamily: "'Neue Montreal', sans-serif",
};

const paragraphStyle = {
  marginBottom: "1rem",
  lineHeight: "1.6",
  color: "#555",
};

const contactButtonStyle = {
  backgroundColor: "#4F92D5",
  color: "#fff",
  padding: "16px 32px",
  fontSize: "1.1rem",
  fontWeight: "500",
  border: "none",
  borderRadius: "8px",
  cursor: "pointer",
  display: "inline-block",
  textDecoration: "none",
  marginTop: "1rem",
  transition: "transform 0.2s ease, box-shadow 0.2s ease",
};

const SupportPage = () => {
  return (
    <main style={pageStyles}>
      <div style={containerStyle}>
        <h1 style={headingStyle}>Support Center</h1>
        
        <div style={sectionStyle}>
          <h2 style={subHeadingStyle}>Frequently Asked Questions</h2>
          <div style={paragraphStyle}>
            <strong>Q: What is soul?</strong>
            <p>A: soul is a safe and anonymous space to express your thoughts, share your story, and connect with others. Whether you have secrets, questions, struggles, or untold stories, you can write them down knowing you're in a supportive community. Every night, you'll receive thoughtful responses from others who relate to your journey.</p>
          </div>
          <div style={paragraphStyle}>
            <strong>Q: How do I get started with soul?</strong>
            <p>A: Simply click the "get access" button on our homepage and follow the registration process.</p>
          </div>
          <div style={paragraphStyle}>
            <strong>Q: Is my privacy protected?</strong>
            <p>A: Absolutely. Your personal journal entries are shared by default with the community under your anonymous name, and you can choose to share your entries with the community or keep them private.</p>
          </div>
          <div style={paragraphStyle}>
            <strong>Q: What kind of content can I share?</strong>
            <p>A: You can share your personal experiences, thoughts, feelings, questions, or stories. While we encourage openness, we maintain community guidelines to ensure a respectful and supportive environment for everyone.</p>
          </div>
        </div>

        <div style={sectionStyle}>
          <h2 style={subHeadingStyle}>Contact Us</h2>
          <p style={paragraphStyle}>
            Need additional help? Our support team is here for you. Send us an email and we'll get back to you.
          </p>
          <a
            href="mailto:hello@getsoulapp.com"
            style={contactButtonStyle}
            onMouseEnter={(e) => {
              e.target.style.transform = "scale(1.05)";
              e.target.style.boxShadow = "0px 6px 12px rgba(0, 0, 0, 0.15)";
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = "scale(1)";
              e.target.style.boxShadow = "none";
            }}
          >
            Email Support
          </a>
        </div>
      </div>
    </main>
  );
};

export default SupportPage;

export const Head = () => <title>Support - soul</title>; 