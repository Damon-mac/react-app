const express = require('express')
const mongoose = require('mongoose')

// 连接mongo
const DB_URL = 'mongodb://localhost:27017/react-app'
mongoose.connect(DB_URL)
mongoose.connection.on('connected', function() {
  console.log('mongo connect success')
})
// 类似于mysql的表 mongo里有文档, 字段的概念
const User = mongoose.model('user', new mongoose.Schema({
  user: {type: String, require: true},
  age: {type: Number, require: true}
}))
// 新增数据
// User.create({
//   user: 'yinghua',
//   age: 28
// }, (err, doc) => {
//   if (!err) {
//     console.log(doc)
//   } else {
//     console.log(err)
//   }
// })

const app = express()
// 删除age为30的所有数据
// User.remove({age: 30}, (err, doc) => {
//   console.log(doc)
// })
// 更新数据
// User.update({'user': 'yinghua'}, {'$set': {age: 27}}, (err, doc) => {
//   console.log(doc)
// })

app.get('/', function(req, res) {
  res.send('hello word, NIHOK ')
})

app.get('/data', function(req, res) {
  // 查找数据, 第一个参数是过滤的对象
  User.find({user: 'yinghua'}, (err, doc) => {
    res.json(doc)
  })
  // res.json({name: 'mac', type: 'IT'})
})

app.listen(9003, function(req, res) {
  console.log('server run on localhost:3000')
})
