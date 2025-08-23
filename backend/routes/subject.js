// /routes/students.js
const express = require("express");
const router = express.Router();
const createSubjectStudentModel = require("../models/student");

// POST /api/students/:collectionName
router.post("/:collectionName", async (req, res) => {
  try {
    const { collectionName } = req.params;
    const StudentModel = createSubjectStudentModel(collectionName);
    const newStudent = new StudentModel(req.body);
    await newStudent.save();
    res.status(201).json({ message: "Student added", student: newStudent });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// GET /api/students/:collectionName
router.get("/:collectionName", async (req, res) => {
  try {
    const { collectionName } = req.params;
    const StudentModel = createSubjectStudentModel(collectionName);
    const students = await StudentModel.find();
    res.json(students);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;
