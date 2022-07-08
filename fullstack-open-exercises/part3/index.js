const express = require('express')
const app = express()
const morgan = require('morgan')
const cors = require('cors')



app.use(express.json())
morgan.token('body', (req, res) => JSON.stringify(req.body));
app.use(morgan(':method :url :status :response-time :res[content-length] - ms :body' ))
app.use(cors())

let persons = [
    { 
      "id": 1,
      "name": "Arto Hellas", 
      "number": "040-123456"
    },
    { 
      "id": 2,
      "name": "Ada Lovelace", 
      "number": "39-44-5323523"
    },
    { 
      "id": 3,
      "name": "Dan Abramov", 
      "number": "12-43-234345"
    },
    { 
      "id": 4,
      "name": "Mary Poppendieck", 
      "number": "39-23-6423122"
    }
]

app.get('/api/persons', (req, res) => {
    res.json(persons)
})

app.get('/info', (req,res) => {
    const date = new Date();
    res.send(`There are ${persons.length} people in the phonebook \n
    ${date}`)
})

app.get(`/api/persons/:id`, (req, res) => {
    const id = Number(req.params.id)
    const person = persons.find(person => person.id === id)
    res.json(person)
})

app.delete('/api/persons/:id', (req, res) => {
    const id = Number(req.params.id)
    person = persons.filter(person => person.id !== id)
    res.status(204).end()
  })

  const generateId = () => {
    const maxId = persons.length > 0
      ? Math.max(...persons.map(n => n.id))
      : 0
    return maxId + 1
  }

//   Why are we making a request method



app.post('/api/persons', (req, res) => {
    const body = req.body
    let name_bool = false


    if (!body.name || !body.number) {
        return res.status(400).json({ 
          error: 'content missing' 
        })
      }

    persons.filter(person => person.name == body.name ? name_bool = true : name_bool = false)
    
    if (name_bool) {
        return res.status(400).json({ 
            error: 'Name is already in phonebook' 
          })
    }
    

    const person = {
         id: generateId(),
        name : body.name,
        number : body.number,

    }

    persons = persons.concat(person)
    res.json(body)
})

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})