import React, { useEffect } from "react";
import { navigate } from "gatsby";

// This page handles client-side redirection to the App Store
const IosRedirectPage = () => {
  useEffect(() => {
    // App Store URL
    const appStoreUrl = "https://apps.apple.com/us/app/soul-feel-heal-connect/id6741874801";
    
    // Redirect to App Store immediately
    window.location.href = appStoreUrl;
  }, []);

  return (
    <div style={{ 
      display: "flex", 
      flexDirection: "column", 
      alignItems: "center", 
      justifyContent: "center", 
      height: "100vh",
      padding: "20px",
      textAlign: "center" 
    }}>
      <h1>Redirecting to the App Store...</h1>
      <p>If you are not redirected automatically, please click <a href="https://apps.apple.com/us/app/soul-feel-heal-connect/id6741874801">here</a>.</p>
    </div>
  );
};

export default IosRedirectPage;

// Add head metadata
export const Head = () => (
  <>
    <title>Redirecting to Soul App in App Store</title>
    <meta name="description" content="Download Soul - Feel, Heal, Connect from the App Store" />
    <meta http-equiv="refresh" content="0;url=https://apps.apple.com/us/app/soul-feel-heal-connect/id6741874801" />
  </>
); 