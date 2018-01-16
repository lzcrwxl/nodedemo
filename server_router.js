/**
 * Created by hasee on 2018/1/7.
 */
const express=require('express')

var server=express()

var routeUser=express.Router()

routeUser.get('/1.html',function (req, res) {
  res.send('user1')
})

routeUser.get('/2.html',function (req, res) {
  res.send('user222')
})

var routeArticle=express.Router()

routeArticle.get('/a.html',function (req, res) {
  res.send('aq')
})

server.use('/user',routeUser)

server.use('/article',routeArticle)

server.listen(8080)