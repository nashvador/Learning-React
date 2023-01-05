require('dotenv').config()


const express = require('express')
const app = express()
const morgan = require('morgan')
const cors = require('cors')
const Person = require('./models/person')
const { response } = require('express')



app.use(express.static('build'))
app.use(express.json())
morgan.token('body', (req, res) => JSON.stringify(req.body));
app.use(morgan(':method :url :status :response-time :res[content-length] - ms :body' ))
app.use(cors())





app.get('/api/persons', (req, res) => {
  Person.find({}).then(result => {
    res.json(result)
    console.log(result)
  })  
  
})

app.get('/info', (req,res) => {
    const date = new Date();
    res.send(`There are ${persons.length} people in the phonebook \n
    ${date}`)
})

app.get(`/api/persons/:id`, (req, res, next) => {
  console.log("accepted")
    Person.findById(req.params.id).then(result => {
      if (result) {
        res.json(result)
      } else {
        res.status(404).end()
      }
      
    }).catch(err => next(err))  
})

app.delete('/api/persons/:id', (req, res) => {
  Person.findByIdAndRemove(req.params.id).then(result => {
    res.status(204).end()
    console.log(req.params.id)
  }).catch(err => next(err))  
  })

  const errorHandler = (error, request, response, next) => {
    console.error(error.message)
  
    if (error.name === 'CastError') {
      return response.status(400).send({ error: 'malformatted id' })
    } else if (error.name === 'ValidationError') {
      return response.status(400).json({ error: error.message })
    }
  
    next(error)
  }
  

app.use(errorHandler)

  const generateId = () => {
    const maxId = persons.length > 0
      ? Math.max(...persons.map(n => n.id))
      : 0
    return maxId + 1
  }




app.post('/api/persons', (req, res, next) => {
  const body = req.body  



const person = new Person({
  name: body.name,
  number: body.number,
})

person.save().then(savedPerson => {
  res.json(savedPerson)
  console.log(savedPerson)
}).catch(err => { next(err)})

  // if (body.content === undefined) {
  //   return res.status(400).json({error: 'content missing'})
  // }


  
    //Old code for local 
    
    // const body = req.body
    // let name_bool = false
    // if (!body.name || !body.number) {
    //     return res.status(400).json({ 
    //       error: 'content missing' 
    //     })
    //   }
    // persons.filter(person => person.name == body.name ? name_bool = true : name_bool = false)  
    // if (name_bool) {
    //     return res.status(400).json({ 
    //         error: 'Name is already in phonebook' 
    //       })
    // }
    // const person = {
    //      id: generateId(),
    //     name : body.name,
    //     number : body.number,

    // }
    // persons = persons.concat(person)
    // res.json(body)
})

app.put('/api/persons/:id', (req, res) => {
  const {name, number} = req.body


  Person.findByIdAndUpdate(req.params.id, {name: name, number: number},     { new: true, runValidators: true, context: 'query' }
  ).then(result => {
    res.json(result)
  }).catch(err => console.log(err))
  

})


const PORT = process.env.PORT
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})