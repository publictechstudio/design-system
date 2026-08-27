const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

// Serve all static files (HTML, CSS, JS, markdown, assets, components) from the repo root
app.use(express.static(__dirname, { extensions: ["html"] }));

// Make "Design System Site.dc.html" the homepage
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "Design System Site.dc.html"));
});

app.listen(PORT, () => {
  console.log(`Design system site listening on port ${PORT}`);
});
