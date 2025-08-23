const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const Student = require("./models/student");
const Attendance = require("./models/attanance");

const Subject=require("./models/subject");
const subjectRoutes = require('./routes/subroutes');
const studentRoutes = require("./routes/studentRoutes");

const createAttendanceModel = require('./models/attendanceModel');
const attendanceRoutes = require("./routes/attendanceRoutes");





const app = express();
app.use(express.json());
app.use(
  cors({
    origin:process.env.FRONTEND_URL,
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

const MONGO_URI = process.env.MONGO_URI;

mongoose
  .connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })

 



app.post('/api/subject/add', async (req, res) => {
  try {
    const newSubject = new Subject(req.body);
    const savedSubject = await newSubject.save();

    const subjectId = savedSubject._id.toString();

    // Create student collection if needed (optional — depends on your logic)
    const studentCollectionName = `student${subjectId}`;
    const attendanceCollectionName = `attendance${subjectId}`;

    const existingAttendance = await mongoose.connection.db
      .listCollections({ name: attendanceCollectionName })
      .toArray();

    if (existingAttendance.length === 0) {
      // Use getAttendanceModel with correct collection name
      const attendanceModel = createAttendanceModel(attendanceCollectionName);
      await mongoose.connection.createCollection(attendanceCollectionName);
      console.log(`✅ Created attendance collection: ${attendanceCollectionName}`);
    }

    // Do the same if you need to force-create student collection:
    const existingStudent = await mongoose.connection.db
      .listCollections({ name: studentCollectionName })
      .toArray();

    if (existingStudent.length === 0) {
      await mongoose.connection.createCollection(studentCollectionName);
      console.log(`✅ Created student collection: ${studentCollectionName}`);
    }

    res.status(201).json({
      message: "Subject added successfully!",
      subject: savedSubject,
    });
  } catch (error) {
    console.error("❌ Error saving subject:", error);
    res.status(500).json({ message: "Failed to add subject" });
  }
});


//fetch Subjects
app.use('/api/subject', subjectRoutes); //subject routes



app.use("/api/students", require("./routes/subject"));




app.use("/api/students", studentRoutes);


app.use("/api/attendance", attendanceRoutes); 


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
