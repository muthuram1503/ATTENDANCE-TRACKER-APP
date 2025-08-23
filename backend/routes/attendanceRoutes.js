




// module.exports = router;
const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();

const getAttendanceModel = require("../models/attendanceModel");
const getStudentModel = require("../models/studentModel");

// ✅ Fetch attendance with true/false values
router.get("/view/:subjectId", async (req, res) => {
  const { subjectId } = req.params;
  const { month, year } = req.query;

  try {
    const studentCollection = `student${subjectId}`;
    const attendanceCollection = `attendance${subjectId}`;

    const studentModel = mongoose.connection.db.collection(studentCollection);

    const data = await studentModel.aggregate([
      {
        $lookup: {
          from: attendanceCollection,
          localField: "_id",
          foreignField: "studentId",
          as: "attendanceRecords",
        },
      },
      {
        $project: {
          name: 1,
          RegNo: 1,
          dept: 1,
          year: 1,
          attendanceRecords: {
            $filter: {
              input: "$attendanceRecords",
              as: "record",
              cond: {
                $and: [
                  { $eq: ["$$record.month", parseInt(month)] },
                  { $eq: ["$$record.year", parseInt(year)] },
                ],
              },
            },
          },
        },
      },
    ]).toArray();

    res.status(200).json(data);
  } catch (error) {
    console.error("Error fetching attendance:", error);
    res.status(500).json({ error: error.message });
  }
});

// ✅ Update attendance (true/false stored)
router.post("/update/:subjectId", async (req, res) => {
  try {
    const { subjectId } = req.params;
    const Attendance = getAttendanceModel(subjectId);
    const { updatedAttendance, month, year } = req.body;

    for (const studentId in updatedAttendance) {
      const updates = updatedAttendance[studentId];
      for (const day in updates) {
        const isPresent = updates[day]; // true OR false
        const dateObj = new Date(year, month - 1, day);

        await Attendance.findOneAndUpdate(
          { studentId, day: Number(day), month: Number(month), year: Number(year) },
          {
            studentId,
            day: Number(day),
            month: Number(month),
            year: Number(year),
            date: dateObj,
            present: isPresent, // ✅ correctly saved
          },
          { upsert: true, new: true }
        );
      }
    }

    res.json({ message: "Attendance updated successfully" });
  } catch (error) {
    console.error("Error updating attendance:", error);
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
