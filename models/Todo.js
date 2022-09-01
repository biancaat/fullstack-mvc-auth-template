const mongoose = require('mongoose')

const TodoSchema = new mongoose.Schema({
  firstName:{
    type: String,
    required: true
  },
  lastName:{
    type: String,
    required: true
  },
  birthDate:{
    type: String,
    required: true
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
