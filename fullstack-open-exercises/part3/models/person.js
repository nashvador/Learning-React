const mongoose = require('mongoose')

const url = process.env.MONGODB_URI

console.log("connecting to", url)

mongoose.connect(url).then(result => {console.log("connection works")}).catch((error) => {console.log(error.message)})


const validateFunction = (v) => {
  return /\d{2}-/.test(v) || /\d{3}-/.test(v) ;

}

const personSchema = new mongoose.Schema({
  name: {
    type: String,
    minLength: 4,
    required: true
  } ,
  number: {
    type: Number,
    minLength: 8,
    validate: validateFunction
  }

})

personSchema.set('toJSON', {
    transform: (document, returnedObject) => {
      returnedObject.id = returnedObject._id.toString()
      delete returnedObject._id
      delete returnedObject.__v
    }
  })


module.exports = mongoose.model('Person', personSchema)