const express = require("express");
const { connectToMongoDB } = require("./connect");
const urlRoute = require("./routes/url");
const URL = require("./models/url");

const app = express(); // created the application
const PORT = 8001;

connectToMongoDB("mongodb://127.0.0.1:27017/reddot")
  .then(() => console.log("Mongodb connected"))
  .catch((err) => console.log("Mongo Error"));

app.use(express.json());
app.use("/url", urlRoute); // if anything starts with url then use urlRoute for that

app.get("/:shortId", async (req, res) => {
  const shortId = req.params.shortId;
  const entry = await URL.findOneAndUpdate(
    {
      shortId,
    },
    {
      $push: {
        visited: {
          timestamp: Date.now(),
        },
      },
    }
  );
  res.redirect(entry.redirectURL);
});
app.listen(PORT, () => console.log(`Server started at PORT: ${PORT}`));
