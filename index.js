const express = require("express");
const app = express();

function hexToRgb(hex) {
  if (!/^#?[0-9A-Fa-f]{6}$/.test(hex)) {
    throw new Error("Invalid hex code");
  }
  const cleanHex = hex.replace("#", "");
  const r = parseInt(cleanHex.substring(0, 2), 16);
  const g = parseInt(cleanHex.substring(2, 4), 16);
  const b = parseInt(cleanHex.substring(4, 6), 16);
  return { r, g, b };
}

app.get("/hex-to-rgb", (req, res) => {
  const { hex } = req.query;
  try {
    const rgb = hexToRgb(hex);
    res.json({ hex, rgb });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

if (require.main === module) {
  app.listen(3000, () => console.log("Server running on port 3000"));
}

module.exports = { app, hexToRgb };
