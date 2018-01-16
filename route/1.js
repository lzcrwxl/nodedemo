/**
 * Created by hasee on 2018/1/10.
 */
const express=require("express")

module.exports=function() {
  var router=express.Router();
  router.get('/1.html',function (req, res) {
    res.send("文章").end();
  });
  router.get('/2.html',function (req, res) {
    res.send('文章2').end();
  })
  return router;
}