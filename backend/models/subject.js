// models/Subject.js
const mongoose = require('mongoose');

const SubjectSchema = new mongoose.Schema({
  staffName: { type: String, required: true },
  subjectName: { type: String, required: true },
  subjectCode: { type: String, required: true },
  department: { type: String, required: true },
  year: { type: Number, required: true },
  startDate: { type: Date, required: true },
  endDate: { type: Date, required: true },
  timetable: { type: Object, required: true },
}, {
  timestamps: true
});

module.exports = mongoose.model('Subject', SubjectSchema);
