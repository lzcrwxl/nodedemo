const express=require('express')
const static=require('express-static')
const cookieParser=require('cookie-parser')
const cookieSession=require('cookie-session')
const bodyParser=require('body-parser')
const expressRoute=require('express-route')
const multer=require("multer")
const multerObj=multer({dest:'./static/upload'})
const ejs=require('ejs')
const consolidate=require('consolidate')
const mysql=require('mysql')


// const db=mysql.createPool({host:'localhost',user:'root',password:'123456',database:'blog'})

var server=express()

server.listen(8080)

server.use(bodyParser.urlencoded());
//get自带
server.use(multerObj.any());

//2.cookie、session
server.use(cookieParser());
(function (){
  var keys=[];
  for(var i=0;i<100000;i++){
    keys[i]='a_'+Math.random();
  }
  server.use(cookieSession({
    name: 'sess_id',
    keys: keys,
    maxAge: 20*60*1000  //20min
  }));
})();

server.engine('html',consolidate.ejs)
server.set('views','template')
server.set('view engine','html')
//接受客户请求

//route

server.use('/',require('./route/web/index.js')())
server.use('/admin/',require('./route/admin/index.js')())




server.use(static('./static/'))