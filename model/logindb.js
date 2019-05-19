//处理所有与登录相关的操作
const db = require('./db.js');

module.exports = {
    query:db.query,
    //根据邮箱验证密码
    getDate:function(email,callback){
        //执行sql语句
        let selSql = `SELECT password FROM users WHERE email = '${email}'`;
        db.query(selSql,(err,result) => {
            callback(err,result);
        });
    }
};