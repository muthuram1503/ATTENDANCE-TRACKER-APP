

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

// Models
const Subject = require("./models/subject");
const createAttendanceModel = require("./models/attendanceModel");

// Routes
const subjectRoutes = require("./routes/subroutes");
const studentRoutes = require("./routes/studentRoutes");
const attendanceRoutes = require("./routes/attendanceRoutes");

const app = express();

// Middleware
app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:3000",   // process.env.FRONTEND_URL ||
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

// MongoDB Connection
const MONGO_URI = process.env.MONGO_URI;

mongoose
  .connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("✅ MongoDB connected"))
  .catch((err) => console.error("❌ MongoDB connection error:", err));

/**
 * Add Subject API
 * - Saves subject
 * - Creates dynamic student{subjectId} and attendance{subjectId} collections
 */
app.post("/api/subject/add", async (req, res) => {
  try {
    const newSubject = new Subject(req.body);
    const savedSubject = await newSubject.save();

    const subjectId = savedSubject._id.toString();
    const studentCollectionName = `student${subjectId}`;
    const attendanceCollectionName = `attendance${subjectId}`;

    // Create attendance collection dynamically if not exists
    const existingAttendance = await mongoose.connection.db
      .listCollections({ name: attendanceCollectionName })
      .toArray();

    if (existingAttendance.length === 0) {
      createAttendanceModel(attendanceCollectionName);
      await mongoose.connection.createCollection(attendanceCollectionName);
      console.log(`✅ Created attendance collection: ${attendanceCollectionName}`);
    }

    // Create student collection dynamically if not exists
    const existingStudent = await mongoose.connection.db
      .listCollections({ name: studentCollectionName })
      .toArray();

    if (existingStudent.length === 0) {
      await mongoose.connection.createCollection(studentCollectionName);
      console.log(`✅ Created student collection: ${studentCollectionName}`);
    }

    res.status(201).json({
      message: "✅ Subject added successfully!",
      subject: savedSubject,
    });
  } catch (error) {
    console.error("❌ Error saving subject:", error);
    res.status(500).json({ message: "Failed to add subject" });
  }
});

// Routes
app.use("/api/subject", subjectRoutes); 
app.use("/api/students", studentRoutes); 
app.use("/api/attendance", attendanceRoutes); 

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));