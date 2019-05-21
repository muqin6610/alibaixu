//处理所有与分类相关的操作

//引入db
const db = require('./db');

module.exports = {
    query:db.query,
    //用来获取所有的数据分类
    selectAll:function(callback) {
        //执行sql语句
        let selSql =  `SELECT * FROM categories`;
        db.query(selSql,(err,result) => {
            callback(err,result);
        });
    },
    //用来添加分类
    addData:function(obj,callback){
        //执行sql语句
        let inertSql = `INSERT INTO categories (name,slug) VALUES ('${obj.name}','${obj.slug}')`;
        db.query(inertSql,(err,result) => {
            callback(err,result);
        });
    },
    //用来删除分类
    delCate:function(id,callback){
        //执行sql语句
       let delSql = `DELETE FROM categories WHERE id = ${id}`; 
       db.query(delSql,(err,result) => {
           callback(err,result);
       })
    },
    //用来批量删除分类
    delCateAll:function(ids,callback) {
        //执行sql语句
        let dellAllSql = `DELETE FROM categories WHERE id in (${ids})`;
        db.query(dellAllSql,(err,result) => {
            callback(err,result);
        });
    },
    // 根据id获取对应分类信息
    getCateById:function(id,callback){
        //执行sql语句
        let setSql = `SELECT * FROM categories WHERE id = ${id}`;
        db.query(setSql,(err,result) => {
            callback(err,result);
        });
    },
    //修改分类
    setCate:function(obj,callback){    
        //执行sql语句
        let setSql = `UPDATE categories SET name='${obj.name}', slug='${obj.slug}' WHERE id = ${obj.id}`;
        db.query(setSql,(err,result) => {
            callback(err,result);
        });
    }
};
