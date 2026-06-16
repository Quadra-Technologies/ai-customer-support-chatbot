require("dotenv").config();

const express = require("express");
const cors = require("cors");

const connectDB = require("./config/db");

const leadRoutes = require("./routes/leadRoutes");
const chatRoutes = require("./routes/chatRoutes");
const conversationRoutes = require("./routes/conversationRoutes");
const analyticsRoutes = require("./routes/analyticsRoutes");
const authRoutes = require("./routes/authRoutes");

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

// Routes
app.use("/api/auth", authRoutes);

app.use("/api/leads", leadRoutes);

app.use("/api/chat", chatRoutes);

app.use("/api/conversations", conversationRoutes);

app.use("/api/analytics", analyticsRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on ${PORT}`);
});