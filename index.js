// Import dependencies
const express = require("express");

// Start express server
const app = express();

app.use("/test", (req, res) => console.log("test server running"));
const PORT = 3001;

// Listen to PORT
app.listen(PORT);
