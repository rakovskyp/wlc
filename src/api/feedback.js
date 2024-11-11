// src/api/feedback.js

require("dotenv").config({ path: `.env.${process.env}` }); // Load environment variables

const { google } = require("googleapis");

module.exports = async function handler(req, res) {
  console.log("Handler invoked at", new Date().toISOString());
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  console.log("starting");

  console.log(req.body);

  const { name, phone, feedback } = req.body;

  // Validate phone number, name and feedback
  if (!name || !phone || !feedback) {
    return res.status(400).json({ error: "Invalid name, phone number or feedback" });
  }

  try {
    // Add name, phone number and feedback to Google Sheets
    await addFeedbackToGoogleSheets(name, phone, feedback);

    return res.status(200).json({ message: "success" });
  } catch (error) {
    console.error("Feedback submission error:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

async function addFeedbackToGoogleSheets(name, phone, feedback) {
  // Authenticate with Google Sheets API
  const auth = new google.auth.JWT(
    process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
    null,
    process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, "\n"),
    ["https://www.googleapis.com/auth/spreadsheets"]
  );

  const sheets = google.sheets({ version: "v4", auth });
  const timestamp = new Date().toISOString();
  const formattedPhone = `'${phone}`;

  // Append the new row with name, phone, feedback and timestamp
  await sheets.spreadsheets.values.append({
    spreadsheetId: "1GHktYHI6_fIoRnlqtuNyJS9ZhYTok48_PA5gFdw1TB4", // Replace with your Spreadsheet ID
    range: "Sheet1!A:D", // Adjusted range to include feedback column
    valueInputOption: "USER_ENTERED",
    insertDataOption: "INSERT_ROWS",
    requestBody: {
      values: [[name, formattedPhone, feedback, timestamp]],
    },
  });

  console.log(
    `Successfully added feedback from ${name} with phone number ${phone} at ${timestamp}`
  );
}
