const shortid = require("shortid");
const URL = require("../models/url");

async function generateShortUrl(req, res) {
  const body = req.body; // data submitted in the request body
  if (!body.url) return res.status(400).json({ error: "Input URL required" }); //400 because it's a bad request
  const shortID = shortid(); // generate short id

  await URL.create({
    shortId: shortID,
    redirectURL: body.url,
    visited: [],
  });
  return res.json({ id: shortID }); //return generated shortID for original url
}

module.exports = {
  generateShortUrl,
};
