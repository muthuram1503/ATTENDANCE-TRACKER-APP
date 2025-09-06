// backend/routes/studentRoutes.js (or wherever you define your Express routes)
const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
const getStudentModel = require("../models/studentModel");




router.post("/dashboard/students/:subjectId", async (req, res) => {
  try
  {
  const { subjectId } = req.params;
  const Student = getStudentModel(subjectId);

    const newStudent = new Student(req.body);
    await newStudent.save();
    // console.log(newStudent);

    res.status(201).json({ message: "Student added", student: newStudent });
  } catch (error) {
    console.error("Error saving student:", error);
    res.status(400).json({ error: error.message });
  }
});



router.get("/dashboard/students/:collectionName", async (req, res) => {
  console.log("function call received");
  const { collectionName } = req.params;
  console.log("collectionName"+collectionName);
  try {
    const Student = getStudentModel(collectionName); // e.g., student688c9...
    const students = await Student.find();
    console.log(students);
    res.status(200).json({ students }); // ✅ wrap in an object
  } catch (error) {
    console.error("Error fetching students:", error);
    res.status(500).json({ error: "Failed to fetch students" });
  }
});



router.delete("/dashboard/students/:collectionName/:id", async (req, res) => {
  try {
    const { collectionName, id } = req.params;
    const Student = getStudentModel(collectionName);

    const result = await Student.findByIdAndDelete(id);
    console.log("result"+result)
    if (!result) {
      return res.status(404).json({ message: "Student not found" });
    }

    res.status(200).json({ message: "Student deleted successfully" });
  } catch (error) {
    console.error("Delete error:", error);
    res.status(500).json({ message: "Server Error" });
  }
});
module.exports = router;
