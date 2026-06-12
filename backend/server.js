require("dotenv").config();

const express = require("express");
const cors = require("cors");

const connectDB = require("./config/db");
const authRoutes = require("./routes/authRoutes");
const verifyToken = require("./middleware/authMiddleware");

const app = express();

// Connect Database
connectDB();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/auth", authRoutes);

// Home Route
app.get("/", (req, res) => {
  res.send("Backend Running");
});

// Protected Route
app.get(
  "/api/test",
  verifyToken,
  (req, res) => {
    res.json({
      message: "Protected Route Working"
    });
  }
);

// Server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});