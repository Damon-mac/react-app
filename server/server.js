const express = require('express')
const mongoose = require('mongoose')

const DB_URL = 'mongodb://localhost:27017/react-app'
mongoose.connect(DB_URL)
mongoose.connection.on('connected', function() {
  console.log('mongo connect success')
})

const app = express()

app.get('/', function(req, res) {
  res.send('hello world')
})

app.get('/data', function(req, res) {
  res.json({name: 'mac', type: 'IT'})
})

app.listen(3000, function(req, res) {
  console.log('server run on localhost:3000')
})