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

const privacyContent = `
# Soul Privacy Policy
v02.12.2025

Last modified: Feb 12, 2025

## Introduction  
Heart and Soul LLC, (“Company” or “We”) respect your privacy and are committed to protecting it through our compliance with this policy.  

This policy describes the types of information we may collect from you or that you may provide when you visit the website www.getsoulapp.com (our “Website”), use our mobile application "Soul" (our "Application") and any of our other products and services (collectively the “Services”) and our practices for collecting, using, maintaining, protecting, and disclosing that information.  

This privacy policy applies to information we collect:  
1. On or through your use of the Services;  
2. In email and other electronic messages between you and us;  
3. Through any mobile and desktop applications you use in connection with the Services.  

This privacy policy does not apply to information you provide to or is collected by any third party whether through or in connection with your use of the Services or otherwise. You agree and acknowledge that Heart and Soul LLC, has no duty or responsibility to maintain and safeguard any information you may provide to, or is collected by, any third party.  

---

## Information We Collect About You and How We Collect It  
We collect several types of information from and about users of our Services, including:  
1. **Personal Information**: Name, postal address, email address, telephone number, payment information, etc.  
2. **Technical/Usage Data**: Internet connection details, equipment used, IP addresses, and information collected via cookies.  

We collect this information:  
1. Directly from you.  
2. Automatically via tracking technologies (e.g., cookies).  
3. From third parties (e.g., Google’s YouTube API Services).  

---

## Information You Provide to Us  
This includes:  
1. Registration/subscription details.  
2. Correspondence records (e.g., emails).  
3. Survey responses.  
4. Transaction details and financial information.  
5. Search queries and user activities.  
6. Mobile device data (e.g., camera roll, microphone access).  

**User Contributions** (e.g., public posts) are shared at your own risk. We cannot guarantee their security.  

---

## Information Collected Using Cookies and Other Web Technologies  
We use cookies, Flash cookies, and web beacons to:  
1. Estimate audience size and usage patterns.  
2. Customize the Website based on preferences.  
3. Speed up searches and recognize returning users.  

You can adjust browser settings to refuse cookies, but this may limit functionality.  

---

## Third-Party Use of Cookies  
Third parties (e.g., advertisers) may use tracking technologies to collect information about you. We do not control these practices. Opt-out options are provided below.  

---

## How We Use Your Information  
We use your information to:  
1. Provide and improve Services.  
2. Fulfill orders and send notices.  
3. Enforce contracts and notify changes.  
4. Contact you about promotions (opt-out available).  

---

## Disclosure of Your Information  
We may disclose personal information:  
1. To subsidiaries, contractors, and third-party partners.  
2. During business transfers (e.g., mergers).  
3. For legal compliance or safety purposes.  
4. With your consent.  

Aggregated/non-identifiable data may be shared freely.  

---

## Choices About How We Use and Disclose Your Information  
1. **Cookies**: Adjust browser settings.  
2. **Promotional Emails**: Email hello@getsoulapp.com to opt out.  

---

## Accessing and Correcting Your Information  
Review or update your data via your account profile or email hello@getsoulapp.com. Note: Deleting User Contributions may not remove cached copies.  

---

## Data Security  
We use firewalls, encryption, and secure servers. However, internet transmissions are not 100% secure. Protect your password and avoid sharing sensitive data publicly.  

---

## Children Under the Age of 13  
Our Services are not for children under 13. We delete unauthorized child data upon discovery. Contact hello@getsoulapp.com with concerns.  

---

## Changes to Our Privacy Policy  
Updates will be posted on this page. Material changes will be notified via email or Website notice.  

---

##Contact Information

To ask questions or comment on our privacy policy and our privacy practices, please contact us at:

Email: hello@getsoulapp.com

Address: 8 The Green Street, Suite B, Dover, DE 19901
`;

const PrivacyPage = () => {
  // Convert markdown-style content to React elements
  const renderContent = () => {
    return privacyContent.split('\n').map((line, index) => {
      if (line.startsWith('# ')) {
        // Main title
        return <h1 key={index} style={headingStyle}>{line.substring(2)}</h1>;
      } else if (line.startsWith('## ')) {
        // Section headers
        return (
          <div key={index} style={sectionStyle}>
            <h2 style={subHeadingStyle}>{line.substring(3)}</h2>
          </div>
        );
      } else if (line.startsWith('* ')) {
        // Bullet points
        return <li key={index} style={paragraphStyle}>{line.substring(2)}</li>;
      } else if (line.trim() !== '') {
        // Regular paragraphs
        return <p key={index} style={paragraphStyle}>{line}</p>;
      }
      return null;
    }).filter(element => element !== null);
  };

  return (
    <main style={pageStyles}>
      <div style={containerStyle}>
        {renderContent()}
      </div>
    </main>
  );
};

export default PrivacyPage;

export const Head = () => <title>Privacy Policy - soul</title>; 