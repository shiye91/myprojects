/**
 * Created by Administrator on 2019/8/14.
 */
//����express,body-parser,
const express=require("express");
const bp=require("body-parser");
const car=require("./routes/car");


//����web������
var app=express();
app.listen(3000,()=>{
    console.log("success")
});
app.use(bp.urlencoded({
    extended:false
}));
//���ؾ�̬��Դ�ļ�
app.use(express.static("static"));
app.use("/car",car);
