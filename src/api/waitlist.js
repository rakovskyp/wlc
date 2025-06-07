require("dotenv").config({ path: `.env.${process.env}` }); // Load environment variables

const { google } = require("googleapis");

module.exports = async function handler(req, res) {
  console.log("Waitlist handler invoked at", new Date().toISOString());
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  console.log("Processing waitlist signup");
  console.log(req.body);

  const { email, type } = req.body;

  // Validate email and type
  if (!email || !type) {
    return res.status(400).json({ error: "Invalid email or product type" });
  }

  // Validate email format
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ error: "Invalid email format" });
  }

  // Validate type is either 'couples' or 'individuals'
  if (type !== "couples" && type !== "individuals") {
    return res.status(400).json({ error: "Invalid product type" });
  }

  try {
    // Add email and type to Google Sheets
    await addToWaitlistGoogleSheets(email, type);

    return res.status(200).json({ message: "success" });
  } catch (error) {
    console.error("Waitlist signup error:", error);
    return res.status(500).json({
      error: error.message || "Unknown error occurred",
    });
  }
};

async function addToWaitlistGoogleSheets(email, type) {
  // Authenticate with Google Sheets API
  const auth = new google.auth.JWT(
    process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
    null,
    process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, "\n"),
    ["https://www.googleapis.com/auth/spreadsheets"],
  );

  const sheets = google.sheets({ version: "v4", auth });
  const timestamp = new Date().toISOString();

  // Append the new row with email, type, and timestamp
  await sheets.spreadsheets.values.append({
    spreadsheetId: "1wsw4VEMxezdHAy_Ckw-l_H4bMRXc0bKHyyT-RBcldo8", // You'll need to add this to your .env file
    range: "Sheet1!A:C", // Columns: email, type, timestamp
    valueInputOption: "USER_ENTERED",
    insertDataOption: "INSERT_ROWS",
    requestBody: {
      values: [[email, type, timestamp]],
    },
  });

  console.log(
    `Successfully added ${email} to waitlist for ${type} products at ${timestamp}`,
  );
}
