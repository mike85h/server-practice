const express = require('express')
const server = express()
const mike = require('./mike.json')

server.get('/', function(request, response){
  response.send("Go to /mike to find out more about me")
})

server.get('/mike', function(request, response){
  response.send(mike)
})

server.get('*', function(request, response){
  response.status(404)
  response.send("DUDER, WRONG PAGE!")
})

// server.get('/contact', function(request, response){
//   response.send("Contact info: Call me, fool!")
// })
//
// server.get('/about', function(request, response){
//   response.send("About, SON!")
// })
//
// server.get('*', function(request, response){
//   response.status(400)
//   response.send("DUDER, WRONG PAGE")
// })

server.listen(8080)
