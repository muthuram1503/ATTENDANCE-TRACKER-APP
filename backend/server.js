// <<<<<<< Updated upstream
// // server.js
// =======
// const express = require("express");
// const mongoose = require("mongoose");
// const cors = require("cors");
// require("dotenv").config();

// const Student = require("./models/student");
// const Attendance = require("./models/attanance");

// const Subject=require("./models/subject");
// const subjectRoutes = require('./routes/subroutes');
// const studentRoutes = require("./routes/studentRoutes");

// const createAttendanceModel = require('./models/attendanceModel');
// const attendanceRoutes = require("./routes/attendanceRoutes");





// const app = express();
// app.use(express.json());
// app.use(
//   cors({
//     origin:process.env.FRONTEND_URL,
//     methods: ["GET", "POST", "PUT", "DELETE"],
//     credentials: true,
//   })
// );

// const MONGO_URI = process.env.MONGO_URI;

// mongoose
//   .connect(MONGO_URI, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   })

 



// app.post('/api/subject/add', async (req, res) => {
//   try {
//     const newSubject = new Subject(req.body);
//     const savedSubject = await newSubject.save();

//     const subjectId = savedSubject._id.toString();

//     // Create student collection if needed (optional — depends on your logic)
//     const studentCollectionName = `student${subjectId}`;
//     const attendanceCollectionName = `attendance${subjectId}`;

//     const existingAttendance = await mongoose.connection.db
//       .listCollections({ name: attendanceCollectionName })
//       .toArray();

//     if (existingAttendance.length === 0) {
//       // Use getAttendanceModel with correct collection name
//       const attendanceModel = createAttendanceModel(attendanceCollectionName);
//       await mongoose.connection.createCollection(attendanceCollectionName);
//       console.log(`✅ Created attendance collection: ${attendanceCollectionName}`);
//     }

//     // Do the same if you need to force-create student collection:
//     const existingStudent = await mongoose.connection.db
//       .listCollections({ name: studentCollectionName })
//       .toArray();

//     if (existingStudent.length === 0) {
//       await mongoose.connection.createCollection(studentCollectionName);
//       console.log(`✅ Created student collection: ${studentCollectionName}`);
//     }

//     res.status(201).json({
//       message: "Subject added successfully!",
//       subject: savedSubject,
//     });
//   } catch (error) {
//     console.error("❌ Error saving subject:", error);
//     res.status(500).json({ message: "Failed to add subject" });
//   }
// });


// //fetch Subjects
// app.use('/api/subject', subjectRoutes); //subject routes



// app.use("/api/students", require("./routes/subject"));




// app.use("/", studentRoutes);

// app.use("/api/attendance", attendanceRoutes); 


// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
// const express = require("express");
// const mongoose = require("mongoose");
// const cors = require("cors");
// require("dotenv").config();

// // Models
// const Subject = require("./models/subject");
// const createAttendanceModel = require("./models/attendanceModel");

// // Routes
// const subjectRoutes = require("./routes/subroutes");
// const studentRoutes = require("./routes/studentRoutes");
// const Student = require("./models/student");
// const Attendance = require("./models/attanance");
// const Subject = require("./models/subject");

// const subjectRoutes = require("./routes/subroutes");
// const studentRoutes = require("./routes/studentRoutes");
// const createAttendanceModel = require("./models/attendanceModel");
// const attendanceRoutes = require("./routes/attendanceRoutes");

// const app = express();

// // Middleware
// app.use(express.json());
// app.use(
//   cors({
// <<<<<<< Updated upstream
//     origin: process.env.FRONTEND_URL || "*",
// =======
//     origin: process.env.FRONTEND_URL || "http://localhost:3000",
// >>>>>>> Stashed changes
//     methods: ["GET", "POST", "PUT", "DELETE"],
//     credentials: true,
//   })
// );

// <<<<<<< Updated upstream
// // MongoDB Connection
// =======
// // ✅ Use your Atlas URI
// >>>>>>> Stashed changes
// const MONGO_URI = process.env.MONGO_URI;

// // ✅ Proper connection handling
// mongoose
// <<<<<<< Updated upstream
//   .connect(MONGO_URI, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   })
//   .then(() => console.log("✅ MongoDB connected"))
//   .catch((err) => console.error("❌ MongoDB connection error:", err));

// /**
//  * Add Subject API
//  * - Saves subject
//  * - Creates dynamic student{subjectId} and attendance{subjectId} collections
//  */
// =======
//   .connect(MONGO_URI)
//   .then(() => console.log("✅ MongoDB connected successfully"))
//   .catch((err) => console.error("❌ MongoDB connection error:", err));

// // ✅ Add Subject API (with auto collection creation)
// >>>>>>> Stashed changes
// app.post("/api/subject/add", async (req, res) => {
//   try {
//     const newSubject = new Subject(req.body);
//     const savedSubject = await newSubject.save();

//     const subjectId = savedSubject._id.toString();
//     const studentCollectionName = `student${subjectId}`;
//     const attendanceCollectionName = `attendance${subjectId}`;

// <<<<<<< Updated upstream
//     // Create attendance collection dynamically if not exists
// =======
//     // Attendance collection
// >>>>>>> Stashed changes
//     const existingAttendance = await mongoose.connection.db
//       .listCollections({ name: attendanceCollectionName })
//       .toArray();

//     if (existingAttendance.length === 0) {
//       createAttendanceModel(attendanceCollectionName);
//       await mongoose.connection.createCollection(attendanceCollectionName);
//       console.log(`✅ Created attendance collection: ${attendanceCollectionName}`);
//     }

// <<<<<<< Updated upstream
//     // Create student collection dynamically if not exists
// =======
//     // Student collection
// >>>>>>> Stashed changes
//     const existingStudent = await mongoose.connection.db
//       .listCollections({ name: studentCollectionName })
//       .toArray();

//     if (existingStudent.length === 0) {
//       await mongoose.connection.createCollection(studentCollectionName);
//       console.log(`✅ Created student collection: ${studentCollectionName}`);
//     }

//     res.status(201).json({
//       message: "✅ Subject added successfully!",
//       subject: savedSubject,
//     });
//   } catch (error) {
//     console.error("❌ Error saving subject:", error);
//     res.status(500).json({ message: "Failed to add subject" });
//   }
// });

// <<<<<<< Updated upstream
// // Routes
// app.use("/api/subject", subjectRoutes); // subject routes
// app.use("/api/students", studentRoutes); // student routes
// app.use("/api/attendance", attendanceRoutes); // attendance routes

// // Start Server
// =======
// // ✅ Routes
// app.use("/api/subject", subjectRoutes);
// app.use("/api/students", require("./routes/subject"));
// app.use("/", studentRoutes);
// app.use("/api/attendance", attendanceRoutes);

// // ✅ Start server
// >>>>>>> Stashed changes
// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));


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
    origin: process.env.FRONTEND_URL || "http://localhost:3000",
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
