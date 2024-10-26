// src/api/subscribe.js

require("dotenv").config({ path: `.env.${process.env}` }); // Add this line at the very top

const { google } = require("googleapis");

module.exports = async function handler(req, res) {
  console.log("Handler invoked at", new Date().toISOString());
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { email } = req.body;

  // Validate email
  if (!email || !validateEmail(email)) {
    return res.status(400).json({ error: "Invalid email address" });
  }

  try {
    // Add email to Google Sheets
    await addEmailToGoogleSheets(email);

    return res.status(200).json({ message: "success" });
  } catch (error) {
    console.error("Subscription error:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

function validateEmail(email) {
  const re = /\S+@\S+\.\S+/;
  return re.test(email);
}

async function addEmailToGoogleSheets(email) {
  // Authenticate with Google Sheets API
  const auth = new google.auth.JWT(
    process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
    null,
    process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, "\n"),
    ["https://www.googleapis.com/auth/spreadsheets"]
  );

  console.log("using serv acc ", process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL);

  const sheets = google.sheets({ version: "v4", auth });

  const timestamp = new Date().toISOString();

  // Append the new row
  await sheets.spreadsheets.values.append({
    spreadsheetId: "1ukq9hKL2-29gWxn53ssdS4KTYGpCAOYXvkkzhNQjSYw", // Replace with your Spreadsheet ID
    range: "Sheet1!A:B", // Adjust the sheet name and range as needed
    valueInputOption: "USER_ENTERED",
    insertDataOption: "INSERT_ROWS",
    requestBody: {
      values: [[email, timestamp]],
    },
  });

  console.log(`Successfully added ${email} at ${timestamp}`);
}
