/**
 * Created by hasee on 2018/1/7.
 */
const express=require('express')
const static=require('express-static')
const multer=require("multer")
const fs=require("fs")
const pathLib=require('path')

var server=express()




var objMulter=multer({dest:"./www/upload"})

// server.use(bodyParser.urlencoded({extended:false}))
server.use(objMulter.any())
server.post('/', function (req, res){
  //新文件名
  var newName=req.files[0].path+pathLib.parse(req.files[0].originalname).ext;
  fs.rename(req.files[0].path,newName,function (err) {
    if(err)
      res.send('上传失败');
    else
      res.send('上传成功');
  })
  console.log(req.files)
});

server.listen(8080)