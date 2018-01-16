/**
 * Created by hasee on 2018/1/11.
 */
const express=require('express');

module.exports=function () {
  var router=express.Router();
  router.get('/a.html',function (req, res) {
    res.send("我是blog").end();
  });
  router.get('/b.html',function (req, res) {
    res.send('我是blog2').end();
  })
  return router;
}