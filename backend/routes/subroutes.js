
//app/add-subject/routes/subroutes.js
const express = require("express");
const mongoose = require("mongoose");
const Subject = require("../models/subject");
const createAttendanceModel = require("../models/attendanceModel");

const router = express.Router();



//Other working routes (GET, PUT, DELETE, etc)...
router.get("/", async (req, res) => {
  const subjects = await Subject.find();
  res.json(subjects);
});

router.get("/:id", async (req, res) => {
  const subject = await Subject.findById(req.params.id);
  if (!subject) {
    return res.status(404).json({ message: "Not found" });
  }
  res.json(subject);
});

router.put("/:id", async (req, res) => {
  const updated = await Subject.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.json(updated);
});

router.delete("/:id", async (req, res) => {
  const deletedSubject = await Subject.findByIdAndDelete(req.params.id);
  const studentCollection = `student${req.params.id}`;
  const attendanceCollection = `attendance${req.params.id}`;

  if (await mongoose.connection.db.listCollections({ name: studentCollection }).toArray()) {
    await mongoose.connection.db.dropCollection(studentCollection);
  }

  if (await mongoose.connection.db.listCollections({ name: attendanceCollection }).toArray()) {
    await mongoose.connection.db.dropCollection(attendanceCollection);
  }

  res.json({ message: "Deleted subject and collections" });
});

module.exports = router;
