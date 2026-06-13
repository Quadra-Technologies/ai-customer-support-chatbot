require("dotenv").config();

const express = require("express");
const cors = require("cors");

const connectDB = require("./config/db");
const leadRoutes = require("./routes/leadRoutes");

const app = express();

// Connect Database
connectDB();

// Middleware
app.use(cors());
app.use(express.json());

// Home Route
app.get("/", (req, res) => {
  res.send("Backend Running");
});

// Lead Routes
app.use("/api/leads", leadRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});