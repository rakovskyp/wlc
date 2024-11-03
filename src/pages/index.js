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
  color: "#D35843",
};
const paragraphStyles = {
  marginBottom: 48,
};

const buttonWrapperStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  marginBottom: 48,
};

const buttonStyle = {
  backgroundColor: "#FF867C", // Softer coral color
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
          <p style={paragraphStyles}>
            <span style={headingAccentStyles}>with love club</span>
            <StaticImage
              src="../images/icon.png"
              alt="Love icon"
              placeholder="blurred"
              layout="fixed"
              style={{ display: "inline-block", ...iconStyle }}
            />
            is an art project designed to foster vulnerability and connection
            through the stories of strangers.
          </p>
          <p style={paragraphStyles}>
            receive handwritten letters from strangers that explore
            relationships, feelings, betrayals, and revelations—offering
            insights that guide you through complex emotions and deepen your
            understanding of yourself.
          </p>
          <p style={{ ...paragraphStyles, marginBottom: 12 }}>
            each month active members will receive via snail mail:
          </p>
          <ol style={listStyles}>
            <li style={listItemStyles}>
              <span style={headingAccentStyles}>
                five copies of handwritten letters from strangers
              </span>
              , all sharing their heartfelt experiences.
            </li>
            <li style={listItemStyles}>
              <span style={headingAccentStyles}>
                a reflection prompt, paper, and a match
              </span>{" "}
              for you to reflect, write, & burn your own response.
            </li>
          </ol>

          <p style={paragraphStyles}>join for $8/month.</p>

          <div style={buttonWrapperStyle}>
            <a
              href="/join"
              style={buttonStyle}
              onMouseEnter={(e) => (e.target.style.transform = "scale(1.05)")}
              onMouseLeave={(e) => (e.target.style.transform = "scale(1)")}
            >
              join with love club
            </a>
          </div>

          <p style={paragraphStyles}>past letters:</p>

          <div style={imageWrapperStyle}>
            <StaticImage
              src="../images/PhysicalLetter1.jpg"
              alt="Description of the image"
              placeholder="blurred"
              layout="constrained"
              width={600}
            />
          </div>

          <div style={letterContainerStyle}>
            <div style={letterLineStyle}></div>
            <div>
              <p style={letterTextStyle}>Dear mon peche sucré,</p>
              <p style={letterTextStyle}>
                As I grow into myself, I allow myself to feel the intensity of
                all emotions. To feel them deeply, and in the painful moments to
                treat myself with love and compassion. With you, every moment
                was so vibrant, filled with color, life, and energy. What is
                life but a reflection of ourselves? In you, I found beauty and
                was reminded of the things I appreciate – Tenderness. Joy.
                Laughter. Investing 100% of myself into the people and things in
                my life. The pain of rejection, although sharp and strong, is
                another way for me to learn and grow into the truest form of
                myself. Thank you for reminding me that love, true love, is what
                makes the world go round. I hope to dedicate myself to love.
              </p>
              <p style={letterTextStyle}>
                Lastly, to sever the cord, I forgive you. In my dreams, you
                apologize. You say sorry for pursuing me, for taking my love
                without being able to return it. You apologize for falsely
                allowing me to hope, to dream. You apologize for building with
                me, for showing affection, knowing fully well you can’t
                reciprocate. I forgive you, and I thank you. My heart will
                always overflow at the thought of you. Je pense tu es tres
                mignon, et je t’aime. “Love is sufficient onto love.”
              </p>
              <p style={letterTextStyle}>From, Ellie</p>
            </div>
          </div>

          <div style={imageWrapperStyle}>
            <StaticImage
              src="../images/PhysicalLetter2.png"
              alt="Description of the image"
              placeholder="blurred"
              layout="constrained"
              width={600}
            />
          </div>

          <div style={letterContainerStyle}>
            <div style={letterLineStyle}></div>
            <div>
              <p style={letterTextStyle}>
                <s>Dear,</s> Hello my love,
              </p>
              <p style={letterTextStyle}>
                I'm now realizing how long it's been since I've written you one
                of these. Despite how many times I have the immense urge to roll
                over in the morning, kiss you on the head, and say "I love you,"
                we both know it's different to write it down.
              </p>
              <p style={letterTextStyle}>
                My handwriting has changed over the years as I've grown older—a
                swoop on the "y" and a curve on the "l" seem cool, artsy,
                mature. I tried to replicate a friend I looked up to. You've
                seen many different writing styles of mine through different
                pages of wrapped stationery, different perfumes and lipstick
                stains... but there was always one constant—my undeniable and
                unwavering love for you.
              </p>
              <p style={letterTextStyle}>
                I can't wait to love you through every season of our lives. I
                can't wait to make you laugh every day, and watch the years form
                around your eyes and know that I got to pass all my time with
                you.
              </p>
              <p style={letterTextStyle}>
                Alright, alright. I'll save it for our vows. Maggie's gonna make
                fun of me now. Thank her when you see her for sitting on the
                porch with me while I wrote this for you for the millionth time.
              </p>
              <p style={letterTextStyle}>Love you, Muffin.</p>
              <p style={letterTextStyle}>
                <s>From,</s> Love, Anonymous Park Lover
              </p>
            </div>
          </div>

          <div style={imageWrapperStyle}>
            <StaticImage
              src="../images/PhysicalLetter3.jpg"
              alt="Description of the image"
              placeholder="blurred"
              layout="constrained"
              width={600}
            />
          </div>

          <div style={letterContainerStyle}>
            <div style={letterLineStyle}></div>
            <div>
              <p style={letterTextStyle}>Dear Dad,</p>
              <p style={letterTextStyle}>
                I'll never forget the way you laugh, the way you guided, the way
                you hugged, and the way you brought magic into every room. Life
                is both less vibrant, and less interesting, without you here.
                When you taught me to ice skate, you told me to step, step,
                slide.
              </p>
              <p style={letterTextStyle}>
                So I won't forget to keep doing that.
              </p>
              <p style={letterTextStyle}>Step, step, slide.</p>
            </div>
          </div>
        </div>
      </main>
    </LoadingPage>
  );
};

export const LoadingPage = ({ children }) => {
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
              stroke="#D35843"
              strokeWidth="2"
            />
            {/* Filling heart with clip path */}
            <path
              d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
              fill="#D35843"
              style={{
                clipPath: `inset(${100 - percentage}% 0 0 0)`,
              }}
            />
          </svg>
          <span className="text-[#D35843] text-4xl font-bold">
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

export const Head = () => <title>with love club</title>;
