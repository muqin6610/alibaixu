//引入userdb
const userdb = require('../model/userdb.js');

//处理和用户相关的逻辑

module.exports = {
    //得到所有用户信息并渲染
    getUsers: (req, res) => {
        //获取所有数据
        userdb.query(`SELECT * FROM users`, result => {
            //渲染页面
            res.render('users', { result: result });
        });
    },
    //添加用户数据
    addUser: (req, res) => {
        //接受用户参数
        let params = req.body;
        //将数据提交到数据库
        let addSql = `INSERT INTO users (slug, email, password, nickname, status) VALUES ('${params.slug}','${params.email}','${params.password}','${params.nickname}','activated')`
        
        //执行sql语句
        userdb.query(addSql, reuslt => {
            res.send({
                status: 200,
                msg: '新增用户成功!'
            });
        });
    },
    //动态获取所有用户信息
    getAllUsers: (req, res) => {
        //从数据库获取所有信息
        let selSql = `SELECT * FROM users`;
        //将结果响应回浏览器
        userdb.query(selSql, result => {
            res.send({
                data: result,
                status: 200,
                msg: '数据获取成功!'
            });
        });
    },
    //根据用户id删除用户
    delUser: (req, res) => {
        //接收id
        let id = req.query.id;
        //执行sql语句
        let delSql = `DELETE FROM users WHERE id = ${id}`;
        userdb.query(delSql, result => {
            res.send({
                status: 200,
                msg: '删除成功!'
            });
        });
    },
    //根据id获取对应数据
    getUserById: (req, res) => {
        //接收id
        let id = req.query.id
        // 根据id查询数据
        let selSql = `SELECT * FROM users WHERE id = ${id}`
        userdb.query(selSql, result => {
            res.send({
                status: 200,
                msg: '查询成功',
                data: result[0]
            });
        });
    },
    //修改用户
    updateUser: (req, res) => {
        // 接收参数
        var params = req.body
        // 修改数据到 mysql
        let updateSql = `UPDATE users SET email='${params.email}', nickname='${params.nickname}', password='${params.password}' WHERE id=${params.id}`
        userdb.query(updateSql, result => {
            res.send({
                status: 200,
                msg: '修改成功'
            });
        });
    },
    //批量删除用户
    delUsersByIds:(req,res) => {
        //获取参数id
        let ids = req.body.id;
        
        // 将数组转为字符串,用逗号隔开
        // let idStr = ids.join(','); 
             
        // 执行sql语句
        let delSql = `DELETE FROM users WHERE id in (${ids})`;
        console.log(delSql );
        
        userdb.query(delSql,result => {
            res.send({
                status:200,
                msg:'删除成功!'
            });
        });
    }
};