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
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

const loadingStyle = {
  textAlign: "center",
  color: "#666666",
  fontSize: "1.1rem",
};

const JustBeRealABTest = () => {
  React.useEffect(() => {
    // Perform A/B test redirect on client side only
    if (typeof window !== "undefined") {
      // Generate random number between 0 and 1
      const randomValue = Math.random();

      // 50/50 split: redirect to couples or individuals
      const targetPage =
        randomValue < 0.5
          ? "/just_be_real_couples"
          : "/just_be_real_individuals";

      // Small delay to prevent flash, then redirect
      setTimeout(() => {
        window.location.href = targetPage;
      }, 100);
    }
  }, []);

  return (
    <main style={pageStyles}>
      <div style={loadingStyle}>
        <p>Loading...</p>
      </div>
    </main>
  );
};

export default JustBeRealABTest;

export const Head = () => (
  <>
    <title>Just Be Real - Meaningful Connections</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta
      name="description"
      content="Discover Just Be Real - thoughtfully designed conversation cards to deepen connections and create meaningful moments."
    />
    <meta name="theme-color" content="#dc2626" />
  </>
);
