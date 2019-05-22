//处理所有与文章相关的操作
// 引用 db
const db = require('./db.js');

module.exports = {
    query: db.query,
    // 新增文章数据
    addPost: (obj, callback) => {
        // 拼接 sql 语句
        let sql = `INSERT INTO posts (slug, title, feature, created, content, status, user_id, category_id) VALUES ('${obj.slug}', '${obj.title}', '${obj.feature}', '${obj.created}', '${obj.content}', '${obj.status}', ${obj.user_id}, ${obj.category_id})`;
        // 执行 sql 语句
        db.query(sql, (err, result) => {
            callback(err, result);
        });
    },
    //获取所有文章信息
    getPostsData:(callback) => {
        //执行sql语句
        let selSql =  `SELECT * FROM posts`;
        db.query(selSql,(err,result) => {
            callback(err,result);
        });
    }
};