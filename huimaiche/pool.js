/**
 * Created by Administrator on 2019/8/14.
 */
//ӳ��mysql
const mysql=require("mysql");
//�������ӳ�
var pool=mysql.createPool({
    host:'127.0.0.1',
    user:'root',
    password:'',
    database:'huimaiche',
    port:3306,
    connectionLimit:15
});
//�������ӳ�
module.exports=pool;