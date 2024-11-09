// src/api/subscribe.js

require("dotenv").config({ path: `.env.${process.env}` }); // Load environment variables

const { google } = require("googleapis");

module.exports = async function handler(req, res) {
  console.log("Handler invoked at", new Date().toISOString());
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { name, phone } = req.body;

  // Validate phone number and name
  if (!name || !phone) {
    return res.status(400).json({ error: "Invalid name or phone number" });
  }

  try {
    // Add name and phone number to Google Sheets
    await addSubscriberToGoogleSheets(name, phone);

    return res.status(200).json({ message: "success" });
  } catch (error) {
    console.error("Subscription error:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

async function addSubscriberToGoogleSheets(name, phone) {
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

  // Append the new row with name, phone, and timestamp
  await sheets.spreadsheets.values.append({
    spreadsheetId: "1ukq9hKL2-29gWxn53ssdS4KTYGpCAOYXvkkzhNQjSYw", // Replace with your Spreadsheet ID
    range: "Sheet1!A:C", // Adjust the sheet name and range as needed
    valueInputOption: "USER_ENTERED",
    insertDataOption: "INSERT_ROWS",
    requestBody: {
      values: [[name, formattedPhone, timestamp]],
    },
  });

  console.log(
    `Successfully added subscriber ${name} with phone number ${phone} at ${timestamp}`
  );
}
