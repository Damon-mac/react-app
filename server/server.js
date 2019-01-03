const express = require('express')
const userRouter = require('./user')

const app = express()
app.use('/user',userRouter)
app.listen(9003, function(req, res) {
  console.log('server run on localhost:9003')
})
