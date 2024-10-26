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

const ClosedPage = () => {
  return (
    <main style={pageStyles}>
      <div style={containerStyle}>
        <h1 style={headingAccentStyles}>with love club</h1>
        <p style={paragraphStyles}>
          thank you for your interest in the with love club! we are currently at
          capacity and closed for new members. we will reach out soon when
          capacity opens up :)
        </p>
      </div>
    </main>
  );
};

export default ClosedPage;

export const Head = () => <title>with love club - currently at capacity</title>;
