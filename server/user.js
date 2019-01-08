const express = require('express')
const Router = express.Router()
const utility = require('utility')
const model = require('./model')
const User = model.getModel('user')
// 内部筛选条件, 返回信息不显示密码和版本号
const _fileter = {'pwd': 0, '__v': 0}
// post请求参数是通过body来获取, get请求是通过query来获取
Router.get('/list', function(req, res) {
  const { type } = req.query
  User.find({type}, function(err, doc) {
    return res.json({code: 0, data: doc})
  })
})
Router.post('/register', function(req, res) {
  console.log(req)
  const { user, pwd, type } = req.body
  User.findOne({user}, function(err, doc) {
    if (doc) {
      return res.json({
        code: 1,
        msg: '用户名重复'
      })
    }
    const userModel = new User({user, type, pwd: md5Pwd(pwd)})
    userModel.save(function(e, d) {
      if (e) {
        return res.json({code: 1, msg: '后端出错了'})
      }
      const {user, type, _id} = d
      res.cookie('userid', _id)
      return res.json({code:0,data:{user, type, _id}})
    })
    // 这种方法只是创建无法拿到id
    // User.create({user, pwd: md5Pwd(pwd), type}, function(err, doc) {
    //   if (err) {
    //     return res.json({
    //       code: 1,
    //       msg: '后端出错了'
    //     })
    //   }
    //   return res.json({code: 0})
    // })
  })
})
Router.post('/update', (req, res) => {
  const userid = req.cookies.userid
  if(!userid) {
    return res.json.dumps({code: 1})
  }
  const body = req.body
  User.findByIdAndUpdate(userid, body, (err, doc) => {
    const data = Object.assign({}, {
      user: doc.user,
      type: doc.type
    }, body)
    return res.json({code: 0, data})
  })
})
Router.post('/login', function(req, res) {
  const { user, pwd } = req.body
  User.findOne({user, pwd: md5Pwd(pwd)}, _fileter, function(err, doc) {
    if (!doc) {
      return res.json({
        code: 1,
        msg: '用户名不存在或者密码错误'
      })
    } else {
      res.cookie('userid', doc._id)
      return res.json({
        code: 0,
        data: doc
      })
    }
  })
})
Router.get('/info',function(req, res){
  const { userid } = req.cookies
  if (!userid) {
    res.json({code: 1})
  }
  User.findOne({_id: userid}, _fileter, function(err, doc) {
    if (err) {
      return res.json({code: 1, msg: '后端出错了'})
    }
    if (doc) {
      return res.json({code: 0, data: doc})
    }
  })
})

function md5Pwd(pwd) {
  const salt = 'my_first_react_app9012x8skYT93@123~LMB'
  return utility.md5(utility.md5(pwd + salt))
}

module.exports = Router
