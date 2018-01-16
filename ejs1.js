/**
 * Created by hasee on 2018/1/7.
 */
const ejs=require("ejs")

ejs.renderFile("./views/1.ejs",{json:{
  arr:[
    {user:"zhangsan",psw:"ggg"},
    {user:"fangghua",psw:"ggg"},
    {user:"gogog",psw:"ggg"},
  ]
}},function (err,data) {
  if(err){
    console.log("failed")
  }else {
    console.log(data)
  }
})