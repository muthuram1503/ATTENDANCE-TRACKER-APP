// const mongoose = require('mongoose');

// const createStudentModel = (subjectId) => {
//   const collectionName = {subjectId}; // Dynamic collection name
//   console.log(collectionName);

// const schema = new mongoose.Schema({
//   name: {
//     type: String,
//     required: true,
//   },
//   dept: {
//     type: String,
//     required: true,
//   },
//   year: {
//     type: Number,
//     required: true,
//   },
//   RegNo: {
//     type: String,
//     required: true,
//     validate: {
//       validator: (v) => /^\d{12}$/.test(v),
//       message: (props) => `${props.value} is not a valid 12-digit RegNo!`
//     }
//   },
//   email: {
//     type: String,
//     required: true,
//     validate: {
//       validator: (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v),
//       message: (props) => `${props.value} is not a valid email!`
//     }
//   },
//   phoneNumber: {
//     type: String,
//     required: true,
//     validate: {
//       validator: (v) => /^\d{10}$/.test(v),
//       message: (props) => `${props.value} is not a valid 10-digit phone number!`
//     }
//   }
// });

//   // Reuse model if already compiled, or create new one
//   return mongoose.models[collectionName] || mongoose.model(collectionName, schema, collectionName);
// };

// module.exports = createStudentModel;
// const mongoose = require("mongoose");

// const studentSchema = new mongoose.Schema({
//   name: {
//     type: String,
//     required: true,
//   },
//   RegNo: {
//     type: String,
//     required: true,
//     validate: {
//       validator: (v) => /^\d{12}$/.test(v),
//       message: (props) => `${props.value} is not a valid 12-digit RegNo!`
//     }
//   },
//   dept: {
//     type: String,
//     required: true,
//   },
//   year: {
//     type: Number,
//     required: true,
//   },
//   email: {
//     type: String,
//     required: true,
//     validate: {
//       validator: function (v) {
//         return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
//       },
//       message: (props) => `${props.value} is not a valid email!`,
//     },
//   },
//   phoneNumber: {
//     type: String,
//     required: true,
//     validate: {
//       validator: function (v) {
//         return /^\d{10}$/.test(v);
//       },
//       message: (props) =>
//         `${props.value} is not a valid 10-digit phone number!`,
//     },
//   },
// });

// // ✅ Unified student model loader
// function getStudentModel(subjectId) {
//   const collectionName = `student${subjectId}`;
//   if (mongoose.models[collectionName]) {
//     return mongoose.models[collectionName];
//   }
//   return mongoose.model(collectionName, studentSchema, collectionName);
// }

// module.exports = getStudentModel;
