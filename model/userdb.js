// 执行所有与用户表相关的数据库操作
const db = require('./db.js');

module.exports = {
    query: db.query,
    //获取所有用户信息并渲染
    selUsers: function (callback) {
        //执行sql语句
        let selSql = `SELECT * FROM users`;
        db.query(selSql, (err, result) => {
            callback(err, result);
        });
    },
    //添加用户
    addDta: function (obj, callback) {
        //执行sql语句
        let addSql = `INSERT INTO users (slug, email, password, nickname, status,avatar) VALUES ('${obj.slug}','${obj.email}','${obj.password}','${obj.nickname}','activated','/static/uploads/avatar.jpg')`;
        db.query(addSql, (err, result) => {
            callback(err, result);
        });
    },
    //动态获取所有用户信息
    selAllUsers: function (callback) {
        //执行sql语句
        let selSql = `SELECT * FROM users`;
        db.query(selSql, (err, result) => {
            callback(err, result);
        });
    },
    //根据id删除用户
    delById: function (id, callback) {
        //执行sql语句
        let delSql = `DELETE FROM users WHERE id = ${id}`;
        db.query(delSql, (err, result) => {
            callback(err, result);
        });
    },
    // 根据id查询数据
    selById: function (id, callback) {
        //执行sql语句
        let selSql = `SELECT * FROM users WHERE id = ${id}`;
        db.query(selSql, (err, result) => {
            callback(err, result);
        });
    },
    //修改用户
    updateU: function (obj, callback) {
        //执行sql语句
        let updateSql = `UPDATE users SET email='${obj.email}', nickname='${obj.nickname}', password='${obj.password}' WHERE id=${obj.id}`;
        db.query(updateSql, (err, result) => {
            callback(err, result);
        });
    },
    //批量删除用户
    delAllUser: function (ids, callback) {
        //执行sql语句
        let delSql = `DELETE FROM users WHERE id in (${ids})`;
        db.query(delSql, (err, result) => {
            callback(err, result);
        });
    },
    //响应个人中心
    getByIdUser: function (id, callback) {
        //执行sql语句
        let selSql = `SELECT * FROM users WHERE id = ${id}`;
        db.query(selSql, (err, result) => {
            callback(err, result);
        });
    },
    //更新个人 中心
    updateMsgId: (obj, callback) => {
        //执行sql语句
        let updateSql = `UPDATE users SET slug = '${obj.slug}', nickname = '${obj.nickname}', avatar = '${obj.img}', bio = '${obj.bio}' WHERE id = ${obj.id}`;
        db.query(updateSql, (err, result) => {
            callback(err, result);
        });
    },
    //响应修改密码页面
    setPassword: function (id, callback) {
        //执行sql语句
        let selSql = `SELECT * FROM users WHERE id = ${id}`;
        db.query(selSql, (err, result) => {
            callback(err, result);
        });
    },
    //修改密码
    selPassword:function(params,callback){
        //执行sql语句
        let updatePass = `UPDATE users SET password = ${params.password}  WHERE id = ${params.id}`;
        db.query(updatePass,(err,result) => {
            callback(err,result);
        });
    }
};