
require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connection = require("./db");
const userRoutes = require("./routes/users");
const authRoutes = require("./routes/auth");
const engineRoutes = require("./routes/engine");
const profileRoutes = require("./routes/profile");


const app = express();

// Connect to MongoDB
connection();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/users", userRoutes); // registration
app.use("/api/auth", authRoutes);  // login
app.use("/api", engineRoutes);  // this makes /api/engine-info available
app.use("/api/profile", profileRoutes);



// Health check route (optional)
app.get("/", (req, res) => {
	res.send("API is running...");
});

// Start server
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
