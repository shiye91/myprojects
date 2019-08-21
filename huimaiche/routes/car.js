/**
 * Created by Administrator on 2019/8/14.
 */
//引入express  pool
const express=require("express");
const pool=require("../pool");
//创建路由器
var router=express.Router();

/*请求方法：post
 请求url:  /car/add
 //请求数据：｛cname:xxx,cprice:xxx,cpic:xxx,tid:xxx｝
 //返回数据：
 //添加成功
 {code:200,msg:'添加成功'}
 否则：
 {code:400,msg:'添加失败'}
 */
router.post("/add",(req,res)=>{
    var obj=req.body;
    if(!obj.cname){
        res.send({code:401,msg:'名称必须'});
        return;
    }
    pool.query("insert into car values(null,?,?,?,?)",[obj.cname,obj.cprice,obj.cpic,obj.tid],(err,result)=>{
        if(err) throw  err;
        //console.log(result);
        if(result.affectedRows>0){
            res.send({code:200,msg:'添加成功'})
        }else{
            res.send({code:400,msg:'添加失败'})
        }
    })
});
/*
* 查询：
* 请求方法：get
*  请求url:/car/list/tid
*  请求数据：｛tid:1｝
*  返回数据：
*    ｛code:200,data:result｝
* */
router.get("/list/:tid",(req,res)=>{
    pool.query("select cid,cname,price,pic,tid from car where tid=?",[req.params.tid],(err,result)=>{
        if(err) throw err;
        /*
        * result:[{cid:1,cname:xxx},{cid:2,cname:xxx},{cid:3,cname:xxx},{cid:4,cname:xxx}]
        * */
        //var obj={
        //    uname:"tmo",
        //        data:[{price:200},{price:3200}]
        //}
        //obj.data[1].price
        if(result.length>0){
            res.send({code:200,data:result});
            //       {code:200,data:[{cid:1,cname:xxx},{cid:2,cname:xxx},{cid:3,cname:xxx},{cid:4,cname:xxx}]}
        }else{
            res.send({code:400,msg:'错误'})
        }
    })
});



router.delete("/del/:cid",(req,res)=>{
    var cid=req.params.cid;
    if(!cid){
        res.send({code:400,msg:'cid必须'});
        return;
    }
    pool.query("delete from car where cid=?",[cid],(err,result)=>{
        if(err) throw err;
        if(result.affectedRows>0){
            res.send({code:200,msg:'sucss'})
        }else{
            res.send({code:401,msg:'failed'})
        }
    })
})


router.get("/details/:cid",(req,res)=>{
    var cid=req.params.cid;
    pool.query("select pic,price,tid,cname from car where cid=?",[cid],(err,result)=>{
        if(err) throw  err;
        if(result.length>0){
            res.send({code:200,data:result});
        }else{
            res.send({code:400,msg:'failed'})
        }
    })

})








//导出
module.exports=router;