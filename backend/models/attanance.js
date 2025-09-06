

const mongoose = require('mongoose');

const createAttendanceModel = (subjectId) => {
  const collectionName = `attendance${subjectId}`;

  const schema = new mongoose.Schema({
    studentId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "newstudents",
      required: true
    },
    present: {
      type: Boolean,
      default: false
    },
    day: {
      type: Number,
      required: true
    },
    date: {
      type: Date,
      required: true
    }
  });

  return mongoose.models[collectionName] || mongoose.model(collectionName, schema, collectionName);
};

module.exports = createAttendanceModel;
