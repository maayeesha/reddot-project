const mongoose = require("mongoose");
mongoose.set("strictQuery", true);

const urlSchema = new mongoose.Schema(
  {
    shortId: {
      type: String,
      required: true, //property that is required
      unique: true, // unique short ids
    },
    redirectURL: {
      type: String,
      required: true,
    },
    customShortUrl: {
      type: String,
      unique: true,
    },
    visited: [{ timestamp: { type: Number } }],
  },
  { timestamp: true }
);

const URL = mongoose.model("url", urlSchema); //Models: creating and reading documents from the underlying MongoDB database.
module.exports = URL;
