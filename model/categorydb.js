//执行分类的db文件
const mysql = require('mysql');

module.exports.query = (sql,callback) => {
    //创建连接对象
    const connection = mysql.createConnection({
        host:'localhost',
        user:'root',
        password:'root',
        database:'baixiu'
    });
    //用户连接
   connection.connect();
    //执行sql语句
   connection.query(sql,(err,result) => {
        if(err){
            return callback(err,null);
        };
        callback(null,result);
    });
    //关闭连接
   connection.end();
};