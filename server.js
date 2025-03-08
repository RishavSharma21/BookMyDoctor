const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path"); 
const doctorRoutes = require("./routes/doctor");
const appointmentRoutes = require("./routes/appointment");
const patientRoutes = require("./routes/patient"); 
const errorHandler = require("./middleware/errorHandler"); 

const app = express();
const PORT = 3000;

// Middleware
app.use(bodyParser.json());
app.use(cors());

app.use(express.static(path.join(__dirname, "public")));

// Routes
app.use("/doctors", doctorRoutes);
app.use("/appointments", appointmentRoutes);
app.use("/patients", patientRoutes);

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "index.html"));
});

// Use centralized error handling middleware
app.use(errorHandler);

// Start Server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
