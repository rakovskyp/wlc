import React, { useState, useEffect } from "react";
import { StaticImage } from "gatsby-plugin-image";

const pageStyles = {
  color: "#232129",
  padding: 50,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
  fontWeight: 300,
  fontSize: 20,
  transition: "opacity 1.5s ease", // Add transition for opacity
};

const containerStyle = {
  margin: "0 auto",
  maxWidth: "600px",
  textAlign: "left",
};

const iconStyle = {
  width: "1.5em",
  height: "1.5em",
  marginLeft: "0em",
  marginBottom: "0.2em",
  verticalAlign: "middle",
};

const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320,
};
const headingAccentStyles = {
  color: "#4F92D5",
};

const paragraphStyles = {
  marginBottom: 48,
};

const headerStyle = {
  marginTop: 48,
  marginBottom: 48,
  fontSize: 30,
};

const buttonWrapperStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  marginBottom: 48,
};

const buttonStyle = {
  backgroundColor: "#4F92D5", // Changed from #FF867C
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

const buttonHoverStyle = {
  transform: "scale(1.05)",
  boxShadow: "0px 6px 12px rgba(0, 0, 0, 0.15)",
};

const listStyles = {
  paddingLeft: 50, // Adjust padding to indent the list
  listStyleType: "decimal", // Sets numbered list style
};

const listItemStyles = {
  fontWeight: 300,
  fontSize: 20,
  maxWidth: 560,
  marginBottom: 30,
  paddingLeft: 10, // Add padding to indent the text from the number
};

const linkStyle = {
  color: "#8954A8",
  fontWeight: "bold",
  fontSize: 16,
  verticalAlign: "5%",
};

const docLinkStyle = {
  ...linkStyle,
  listStyleType: "none",
  marginBottom: 24,
};

const descriptionStyle = {
  color: "#232129",
  fontSize: 14,
  marginTop: 10,
  marginBottom: 0,
  lineHeight: 1.25,
};

const docLink = {
  text: "Documentation",
  url: "https://www.gatsbyjs.com/docs/",
  color: "#8954A8",
};

const badgeStyle = {
  color: "#fff",
  backgroundColor: "#088413",
  border: "1px solid #088413",
  fontSize: 11,
  fontWeight: "bold",
  letterSpacing: 1,
  borderRadius: 4,
  padding: "4px 6px",
  display: "inline-block",
  position: "relative",
  top: -2,
  marginLeft: 10,
  lineHeight: 1,
};

const imageWrapperStyle = {
  marginBottom: 24, // Adjust this value to control spacing
};

const letterContainerStyle = {
  display: "flex",
  alignItems: "flex-start",
  marginTop: 48,
  marginBottom: 48,
};

const letterLineStyle = {
  width: 4,
  backgroundColor: "#D35843",
  marginRight: 16,
};

const letterTextStyle = {
  fontStyle: "italic",
  fontSize: "1rem",
  lineHeight: 1.6,
  color: "#232129",
  marginBottom: 16, // Adding margin to separate paragraphs
};

const IndexPage = () => {
  // const [opacity, setOpacity] = React.useState(0);

  // React.useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setOpacity(1); // Set opacity to 1 after 0ms to start the fade-in
  //   }, 0);
  //   return () => clearTimeout(timer); // Cleanup timer on unmount
  // }, []);

  return (
    <LoadingPage>
      <main style={{ ...pageStyles }}>
        <div style={containerStyle}>
          <p style={headerStyle}>
            <strong>soul</strong> is an{" "}
            <span style={headingAccentStyles}>anonymous journaling app</span>{" "}
            where you can share your thoughts and read others' reflections.
          </p>

          <div style={buttonWrapperStyle}>
            <a
              href="/join"
              style={buttonStyle}
              onMouseEnter={(e) => (e.target.style.transform = "scale(1.05)")}
              onMouseLeave={(e) => (e.target.style.transform = "scale(1)")}
            >
              request access
            </a>
          </div>

          <p style={paragraphStyles}>
            designed to foster authentic connection, empathy, and personal
            reflection in a supportive space by letting you:
          </p>
          <ol style={listStyles}>
            <li style={listItemStyles}>
              <span style={headingAccentStyles}>write anonymously:</span> create
              journal entries on any topic, with optional prompts to spark
              reflection. these entries are shared anonymously within the app’s
              community.
            </li>
            <li style={listItemStyles}>
              <span style={headingAccentStyles}>receive responses:</span> other
              users respond to entries with advice, shared experiences, or words
              of encouragement, creating a space where real connections can
              form.
            </li>
            <li style={listItemStyles}>
              <span style={headingAccentStyles}>read others' thoughts:</span>{" "}
              scroll through letters from other people sharing their own
              stories, question's and reflections.
            </li>
          </ol>

          <p>
            see into the lives of real people, offering perspective, empathy,
            and a reminder that you’re not alone in what you’re feeling.
          </p>
        </div>
      </main>
    </LoadingPage>
  );
};

const LoadingPage = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [percentage, setPercentage] = useState(0);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    // Handle percentage counter
    const percentageInterval = setInterval(() => {
      setPercentage((prev) => {
        if (prev >= 100) {
          clearInterval(percentageInterval);
          setLoading(false);
          return 100;
        }
        return prev + 1;
      });
    }, 15); // 1500ms / 100 = 15ms per increment

    return () => clearInterval(percentageInterval);
  }, []);

  useEffect(() => {
    // Handle content fade-in after loading completes
    if (!loading) {
      const timeout = setTimeout(() => {
        setShowContent(true);
      }, 50);
      return () => clearTimeout(timeout);
    }
  }, [loading]);

  return (
    <>
      {/* Loading Screen */}
      <div
        className={`fixed inset-0 bg-white flex items-center justify-center transition-opacity duration-500 ${
          loading ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex items-center gap-8">
          <svg
            viewBox="0 0 24 24"
            width="32"
            height="32"
            className="overflow-visible"
          >
            {/* Heart outline */}
            <path
              d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
              fill="none"
              stroke="#4F92D5"
              strokeWidth="2"
            />
            {/* Filling heart with clip path */}
            <path
              d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
              fill="#4F92D5"
              style={{
                clipPath: `inset(${100 - percentage}% 0 0 0)`,
              }}
            />
          </svg>
          <span className="text-[#4F92D5] text-4xl font-bold">
            {percentage}%
          </span>
        </div>
      </div>

      {/* Main Content */}
      <div
        className={`transition-opacity duration-[1500ms] ${
          showContent ? "opacity-100" : "opacity-0"
        }`}
      >
        {children}
      </div>
    </>
  );
};

export default IndexPage;

export const Head = () => <title>soul</title>;
