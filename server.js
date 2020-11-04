const express = require("express");

// instantiates express so we can use the middleware functions
const app = express();

// Node's native tool for working with files.
const path = require("path");

// set a default port in case the host isn't configured with one
const port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, "build")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname + "build/index.html"));
});

app.listen(port, () => console.log(`Listening on port ${port}`));
