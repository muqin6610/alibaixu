//处理所有与评论相关的操作
//引入db
const db = require('./db.js');

module.exports = {
    query:db.query,
    //获取所有评论数据
    getComments:(page,pagesize,callback) => {
        //执行sql语句
        let sql = `SELECT * FROM comments LIMIT ${(page - 1) * pagesize}, ${pagesize}`;
        db.query(sql,(err,result) => {
            callback(err,result);
        });
    },
    //删除评论
    delComment:(id,callback) => {
        //执行sql语句
        let delSql = `DELETE * FROM comments WHERE id = ${id}`;
        db.query(delSql,(err,result) => {
            callback(err,result);
        });
    }
};