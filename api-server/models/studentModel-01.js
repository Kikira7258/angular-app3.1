const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
    name: {
      type: String,
      required: true,
    },
  
    email: {
      type: String,
      required: [true, 'Email is equired'],
      unique: true
    },
    
    cohort: {
      type: String,
      default: '2'
    },
  
    phoneNumber: String,
    grade: {
      type: Number,
      required: true
    },
  
    registrationFee: {
      type:Number,
      required: [true, 'A student must specify a Registration Fee'],
      default: 3000
    }
  })
  
  
  const Student = mongoose.model('Student', studentSchema);

  module.exports = Student