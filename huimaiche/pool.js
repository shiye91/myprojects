/**
 * Created by Administrator on 2019/8/14.
 */
//映入mysql
const mysql=require("mysql");
//创建连接池
var pool=mysql.createPool({
    host:'127.0.0.1',
    user:'root',
    password:'',
    database:'huimaiche',
    port:3306,
    connectionLimit:15
});
//导出连接池
module.exports=pool;