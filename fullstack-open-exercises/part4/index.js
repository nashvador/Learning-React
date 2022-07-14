const {app} = require(`./app`)
const {MONGODB_URI, PORT} = require('./utils/config')
const logger = require('./utils/logger')
const http = require('http')
const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const server = http.createServer(app)
const Blog = require('./models/blog')



mongoose.connect(MONGODB_URI)

app.use(cors())
app.use(express.json())

app.get('/api/blogs', (request, response) => {
  Blog
    .find({})
    .then(blogs => {
      response.json(blogs)
    })
})

app.post('/api/blogs', (request, response) => {
  const blog = new Blog(request.body)

  blog
    .save()
    .then(result => {
      response.status(201).json(result)
    })
})

server.listen(PORT, () => {
  logger.info(`Server running on port ${PORT}`)
})