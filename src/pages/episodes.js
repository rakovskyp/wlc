import * as React from "react";

const RSS_URL = "https://anchor.fm/s/106f5858c/podcast/rss";
const CORS_PROXY = "https://api.allorigins.win/get?url=";

const pageStyles = {
  color: "#1a1a1a",
  minHeight: "100vh",
  fontFamily:
    "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
  fontWeight: 400,
  fontSize: 16,
  lineHeight: 1.5,
  background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
  margin: 0,
  padding: 0,
  position: "relative",
};

const backgroundOverlay = {
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  background: "rgba(255, 255, 255, 0.95)",
  backdropFilter: "blur(10px)",
  zIndex: 0,
};

const coverArtStyle = {
  width: "160px",
  height: "160px",
  objectFit: "cover",
  borderRadius: "20px",
  boxShadow: "0 6px 20px rgba(0, 0, 0, 0.15), 0 2px 8px rgba(0, 0, 0, 0.1)",
  margin: "0 auto 20px auto",
  display: "block",
  transition: "transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
};

const coverArtContainerStyle = {
  textAlign: "center",
  marginBottom: "24px",
};

const containerStyle = {
  width: "100%",
  maxWidth: "100vw",
  textAlign: "center",
  padding: "16px 16px 40px 16px",
  backgroundColor: "transparent",
  borderRadius: 0,
  boxShadow: "none",
  zIndex: 1,
  position: "relative",
};

const headingStyles = {
  color: "#1a1a1a",
  fontSize: "2.2rem",
  margin: "20px 0 8px 0",
  fontWeight: "800",
  letterSpacing: "-0.02em",
  lineHeight: 1.1,
  textShadow: "0 2px 4px rgba(0,0,0,0.1)",
};

const subHeadingStyles = {
  color: "#666",
  fontSize: "1.1rem",
  margin: "0 0 32px 0",
  fontWeight: "400",
  letterSpacing: "0.01em",
};

const episodesGrid = {
  display: "grid",
  gridTemplateColumns: "repeat(2, 1fr)",
  gap: "20px",
  width: "100%",
  margin: "0 auto",
  padding: "0 4px",
  maxWidth: "500px",
};

const episodeBox = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "flex-start",
  width: "100%",
  minWidth: 0,
  padding: 0,
  background: "none",
};

const episodeCard = {
  width: "100%",
  aspectRatio: "1 / 1",
  overflow: "hidden",
  cursor: "pointer",
  borderRadius: "20px",
  background: "linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)",
  display: "block",
  margin: "0 0 12px 0",
  padding: 0,
  boxShadow: "0 8px 25px rgba(0, 0, 0, 0.15), 0 2px 10px rgba(0, 0, 0, 0.1)",
  transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
  position: "relative",
  transform: "translateY(0)",
};

const thumbnailStyle = {
  width: "100%",
  height: "100%",
  objectFit: "cover",
  display: "block",
  borderRadius: "20px",
  margin: 0,
  padding: 0,
  border: "none",
  transition: "transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
};

const titleStyle = {
  fontWeight: "600",
  fontSize: "0.95rem",
  color: "#1a1a1a",
  margin: "0",
  textAlign: "center",
  overflow: "hidden",
  textOverflow: "ellipsis",
  display: "-webkit-box",
  WebkitLineClamp: 3,
  WebkitBoxOrient: "vertical",
  whiteSpace: "normal",
  width: "100%",
  lineHeight: 1.3,
  minHeight: "3.9em",
  maxHeight: "3.9em",
  letterSpacing: "-0.01em",
};

const loadingStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  minHeight: "200px",
  color: "#666",
  fontSize: "1.1rem",
  gap: "20px",
};

const loadingSpinner = {
  width: "40px",
  height: "40px",
  border: "3px solid #e0e0e0",
  borderTop: "3px solid #667eea",
  borderRadius: "50%",
  animation: "spin 1s linear infinite",
};

function parseRSS(xmlString) {
  const parser = new window.DOMParser();
  const xml = parser.parseFromString(xmlString, "text/xml");
  const items = Array.from(xml.querySelectorAll("item"));
  return items.map((item) => {
    // Try to get episode-level image
    let epImage = null;
    const itunesImage = item.getElementsByTagName("itunes:image")[0];
    if (itunesImage && itunesImage.getAttribute("href")) {
      epImage = itunesImage.getAttribute("href");
    }

    // Always use the main podcast show URL
    const spotifyShowUrl =
      "https://open.spotify.com/show/4HiGqgvgRCf8aoYEm42cRz?si=702d9584c52847bd";

    return {
      title: item.querySelector("title")?.textContent || "",
      url: spotifyShowUrl,
      thumbnail: epImage || "https://placehold.co/400x400?text=No+Image",
    };
  });
}

const EpisodesPage = () => {
  const [episodes, setEpisodes] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [coverArt, setCoverArt] = React.useState(null);

  React.useEffect(() => {
    fetch(CORS_PROXY + encodeURIComponent(RSS_URL))
      .then((res) => res.json())
      .then((data) => {
        let xmlString = data.contents;
        // If contents is base64, decode it
        if (/^data:.*;base64,/.test(xmlString)) {
          const base64 = xmlString.split(",")[1];
          xmlString = atob(base64);
        }
        const parsed = parseRSS(xmlString);
        setEpisodes(parsed);

        // Extract cover art from RSS feed
        const parser = new window.DOMParser();
        const xml = parser.parseFromString(xmlString, "text/xml");

        // Try to get cover art from various sources
        let artUrl = null;

        // Method 1: iTunes image
        const itunesImage = xml.querySelector("itunes\\:image, image[*|href]");
        if (itunesImage) {
          artUrl =
            itunesImage.getAttribute("href") || itunesImage.getAttribute("url");
        }

        // Method 2: Regular image tag
        if (!artUrl) {
          const regularImage = xml.querySelector("channel image url");
          if (regularImage) {
            artUrl = regularImage.textContent;
          }
        }

        // Method 3: First episode image as fallback
        if (!artUrl && parsed.length > 0) {
          artUrl = parsed[0].thumbnail;
        }

        setCoverArt(artUrl);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  return (
    <main style={pageStyles}>
      <div style={backgroundOverlay} />
      <div style={containerStyle}>
        {coverArt && (
          <div style={coverArtContainerStyle}>
            <img
              src={coverArt}
              alt="The Bench Podcast Cover Art"
              style={coverArtStyle}
              onMouseEnter={(e) => {
                e.target.style.transform = "scale(1.05)";
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = "scale(1)";
              }}
            />
          </div>
        )}
        <h1 style={headingStyles}>The Bench</h1>
        <p style={subHeadingStyles}>Episodes</p>
        {loading ? (
          <div style={loadingStyle}>
            <div style={loadingSpinner} />
            <span>Loading episodes...</span>
          </div>
        ) : (
          <div style={episodesGrid}>
            {episodes.map((ep, idx) => (
              <div key={idx} style={episodeBox}>
                <a
                  href={ep.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={episodeCard}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-4px)";
                    e.currentTarget.style.boxShadow =
                      "0 12px 35px rgba(0, 0, 0, 0.2), 0 4px 15px rgba(0, 0, 0, 0.15)";
                    const img = e.currentTarget.querySelector("img");
                    if (img) img.style.transform = "scale(1.05)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow =
                      "0 8px 25px rgba(0, 0, 0, 0.15), 0 2px 10px rgba(0, 0, 0, 0.1)";
                    const img = e.currentTarget.querySelector("img");
                    if (img) img.style.transform = "scale(1)";
                  }}
                >
                  <img
                    src={ep.thumbnail}
                    alt={ep.title}
                    style={thumbnailStyle}
                  />
                </a>
                <span style={titleStyle} title={ep.title}>
                  {ep.title}
                </span>
              </div>
            ))}
          </div>
        )}
      </div>
      <style>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        
        @media (max-width: 600px) {
          main[style] {
            padding: 0 !important;
          }
          
          div[style*='grid'] {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 16px !important;
            padding: 0 12px !important;
          }
          
          img[style*='160px'] {
            width: 140px !important;
            height: 140px !important;
            margin: 0 auto 16px auto !important;
          }
          
          h1[style] {
            font-size: 2rem !important;
            margin: 16px 0 6px 0 !important;
          }
          
          p[style*='sub'] {
            font-size: 1rem !important;
            margin: 0 0 28px 0 !important;
          }
          
          a[style*='aspect-ratio'] {
            border-radius: 18px !important;
            margin: 0 0 10px 0 !important;
          }
          
          img[style*='border-radius'] {
            border-radius: 18px !important;
          }
          
          span[style*='title'] {
            font-size: 0.9rem !important;
            line-height: 1.25 !important;
          }
        }
        
        @media (max-width: 400px) {
          div[style*='grid'] {
            gap: 12px !important;
            padding: 0 8px !important;
          }
          
          img[style*='160px'] {
            width: 120px !important;
            height: 120px !important;
          }
          
          h1[style] {
            font-size: 1.8rem !important;
          }
          
          a[style*='aspect-ratio'] {
            border-radius: 16px !important;
          }
          
          img[style*='border-radius'] {
            border-radius: 16px !important;
          }
        }
        
        /* Touch device optimizations */
        @media (hover: none) and (pointer: coarse) {
          a[style*='aspect-ratio']:active {
            transform: translateY(-2px) !important;
            transition: transform 0.1s ease !important;
          }
          
          img[style*='160px']:active {
            transform: scale(1.03) !important;
            transition: transform 0.1s ease !important;
          }
        }
      `}</style>
    </main>
  );
};

export default EpisodesPage;
export const Head = () => <title>Podcast Episodes</title>;
