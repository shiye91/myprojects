/**
 * Created by Administrator on 2019/8/14.
 */
//引入express,body-parser,
const express=require("express");
const bp=require("body-parser");
const car=require("./routes/car");


//创建web服务器
var app=express();
app.listen(3000,()=>{
    console.log("success")
});
app.use(bp.urlencoded({
    extended:false
}));
//挂载静态资源文件
app.use(express.static("static"));
app.use("/car",car);
