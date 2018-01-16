/**
 * Created by hasee on 2018/1/11.
 */
const express=require('express')
const common=require('../../libs/common')

module.exports=function () {
  var router=express.Router()
  //检查登陆状态
  router.use((req,res,next)=>{
    console.log(req.url)
    if(!req.session['admin_id']&&req.url!='/login'){
      res.redirect('/admin/login')
    }else {
      next();
    }
  })

  router.get('/',(req,res)=>{
    res.render('admin/index.ejs',{})
  })

  router.use('/banners',require('./banners')())
  router.use('/login',require('./login')())
  router.use('/custom',require('./custom')())

  return router;
}