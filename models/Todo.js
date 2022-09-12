const mongoose = require('mongoose')
const moment = require('moment')

const TodoSchema = new mongoose.Schema({
  fullName:{
    type: String,
    required: true
  },
  todaysDate: {
    type : String
  },
  phoneNumber:{
    type: String,
    required: true
  }, 
  email:{
    type: String,
    required: true
  },
  todo: {
    type: String,
    required: true,
  },
  completed: {
    type: Boolean,
    required: true,
  },
  userId: {
    type: String,
    required: true
  }
})

module.exports = mongoose.model('Todo', TodoSchema)
