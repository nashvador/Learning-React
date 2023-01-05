const mongoose = require('mongoose')




const password = process.argv[2]

const url = `mongodb+srv://nash:${password}@cluster0.kcdfb.mongodb.net/?retryWrites=true&w=majority`

const personSchema = new mongoose.Schema({
    name: String,
    number: Number,
  })

const Person = mongoose.model('Person', personSchema)

if (process.argv.length == 3) {
    Person.find({}).then(result => {
        result.forEach(person => {
          console.log(person)
        })
        mongoose.connection.close()
      })
}

mongoose.connect(url).then((result)=> {
    console.log("connected")

    const person = new Person({
        name: process.argv[3],
        number: process.argv[4],
    })

    return person.save()
}).then(()=> {
    console.log('person saved')
    return mongoose.connection.close()
}).catch((err) => console.log(err))