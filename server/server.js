const express = require('express')
const mongoose = require('mongoose')

// 连接mongo
const DB_URL = 'mongodb://127.0.0.1:27017'

const app = express()

app.get('/', function(req, res) {
  res.send('hello word, NIHOK ')
})

app.listen(9093, function(req, res) {
  console.log('server run 9093')
})
