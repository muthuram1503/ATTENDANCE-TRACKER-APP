

const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  RegNo: {
    type: String,
    required: true,
    validate: {
      validator: (v) => /^\d{12}$/.test(v),
      message: (props) => `${props.value} is not a valid 12-digit RegNo!`
    }
  },
  dept: {
    type: String,
    required: true,
  },
  year: {
    type: Number,
    required: true,
  },
  email: {
    type: String,
    required: true,
    validate: {
      validator: function (v) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
      },
      message: (props) => `${props.value} is not a valid email!`,
    },
  },
  phoneNumber: {
    type: String,
    required: true,
    validate: {
      validator: function (v) {
        return /^\d{10}$/.test(v);
      },
      message: (props) =>
        `${props.value} is not a valid 10-digit phone number!`,
    },
  },
});



function getStudentModel(collectionName) {
  if (mongoose.models[collectionName]) {
    return mongoose.models[collectionName];
  }
  return mongoose.model(collectionName, studentSchema, collectionName);
}




module.exports = getStudentModel;