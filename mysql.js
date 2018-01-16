/**
 * Created by hasee on 2018/1/9.
 */
const mysql=require('mysql')

var db=mysql.createConnection({host:'localhost',user:'root',pasword:'123456',database:'test01'});

db.query("SELECT * FROM `user_table`",(err,data)=>{
  console.log(JSON.stringify(data))
});