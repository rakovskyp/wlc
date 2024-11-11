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

const ThankYouPage = () => {
  return (
    <main style={pageStyles}>
      <div style={containerStyle}>
        <h1 style={headingAccentStyles}>thank you!</h1>
        <p style={paragraphStyles}>
          i will 100% read this when i get the chance :)
          <br />
          <br />
          if you have any other questions, comments or just want to chat, dm me on instagram <strong>@prestonrack</strong>
        </p>
      </div>
    </main>
  );
};

export default ThankYouPage;

export const Head = () => <title>thank you</title>;
