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
    getPostsData:(option,callback) => {
        //拼接sql语句

        //搜索数据
        let sql =  `SELECT posts.*,users.nickname, categories.name  FROM posts `
        //连表查询:与users
        sql += `LEFT JOIN users ON posts.user_id = users.id `
        //连表查询:与categories
        sql +=`LEFT JOIN categories ON posts.category_id = categories.id WHERE 1 = 1 `
        //判断条件
        let  condition = '';
        //判断分类是否存在
        if(option.sel && option.sel != 0){
            condition += `and posts.category_id = ${option.sel} `
        };
        //判断状态是否存在
        if(option.sta && option.sta != 0){
            condition += `and posts.status = '${option.sta}' `
        };
        //添加筛选条件
        sql += condition;
        //排序:以posts中的ID排序
        sql += `ORDER BY posts.id desc `
        //分页
        sql += `LIMIT ${(option.page - 1) * option.pagesize}, ${option.pagesize}; `
        //搜索数据的总条数
        sql += `SELECT count(*) FROM posts WHERE 1 = 1 `
        //拼接
        sql += condition;
        //执行sql语句
        db.query(sql,(err,result) => {
            callback(err,result);
        });
    },
    //删除id对应的文章
    delCateId:(id,callback) => {
        //执行sql语句
        let delSql = `DELETE FROM posts WHERE id = ${id}`;
        db.query(delSql,(err,result) => {
            callback(err,result);
        });
    },
    //批量删除文章
    delAllCate:(ids,callback) => {
        //执行sql语句
        let delAllSql = `DELETE FROM posts WHERE id in (${ids})`;
        db.query( delAllSql,(err,result) => {
            callback(err,result);
        });
    },
    //获取index统计数据
    getIndexData:(callback) => {
        //执行sql语句
        let selSql = ` SELECT count(*) FROM posts;SELECT count(*) FROM  categories;SELECT count(*) FROM  comments;SELECT count(*) FROM posts WHERE status='drafted';SELECT count(*) FROM  comments WHERE status='approved'`;
        db.query( selSql,(err,result) => {
            callback(err,result);
        });
    }
};