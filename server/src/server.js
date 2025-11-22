const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 8080;

// Serve static files (HTML, CSS, JS)
app.use(express.static(path.join(__dirname, "../public")));

// Default route → index.html
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/index.html"));
});

// Health check route (useful for Kubernetes)
app.get("/health", (req, res) => {
    res.json({ status: "UP" });
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
