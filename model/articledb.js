//处理所有与文章相关的操作
//引入db
const db = require('./db.js');

module.exports = {
    query:db.query,
    //新增文章
    addpost:(obj,callback) => {
        //执行sql语句
        let sql =`INSERT INTO posts (slug, title, feature, created, content, status, user_id, category_id) VALUES ('${obj.slug}', '${obj.title}', '${obj.feature}', '${obj.created}', '${obj.content}', '${obj.status}', ${obj.user_id}, ${obj.category_id})`;
        db.query(sql,(err,result) => {
            callback(err,result);
        });
    }
};