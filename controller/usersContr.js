//引入userdb
const userdb = require('../model/userdb.js');

//处理和用户相关的逻辑

module.exports = {
    //得到所有用户信息并渲染
    getUsers: (req, res) => {
        if(isBroLogin(req,res)){
            return;
        };
        //判断
        userdb.selUsers((err,result) => {
            if(err){
                return res.send('<script>alert("' + err.message + '");</script>');
            }
            //渲染页面
            res.render('users', { result: result });
        });
    },
    //添加用户数据
    addUser: (req, res) => {
        if(isXhrLogin(req,res)){
            return;
        };
        //接受用户参数
        let params = req.body;
        //判断
        userdb.addDta(params,(err, reuslt) => {
            if(err){
                return res.send({
                    status:400,
                    msg:'新增用户失败'
                });
            };
            res.send({
                status: 200,
                msg: '新增用户成功!'
            });
        });
    },
    //动态获取所有用户信息
    getAllUsers: (req, res) => {
        if(isXhrLogin(req,res)){
            return;
        };
        //判断  
        //将结果响应回浏览器
        userdb.selAllUsers((err,result) => {
            if(err){
                return res.send({
                    status:400,
                    msg:'获取数据失败'
                });
            };
            res.send({
                data: result,
                status: 200,
                msg: '数据获取成功!'
            });
        });
    },
    //根据用户id删除用户
    delUser: (req, res) => {
        if(isXhrLogin(req,res)){
            return;
        };
        //接收id
        let id = req.query.id;
        //判断
        userdb.delById(id, (err,result) => {
            if(err) {
                return res.send({
                    status:400,
                    msg:'删除用户失败!'
                });
            };
            res.send({
                status: 200,
                msg: '删除成功!'
            });
        });
    },
    //根据id获取对应数据
    getUserById: (req, res) => {
        if(isXhrLogin(req,res)){
            return;
        };
        //接收id
        let id = req.query.id
        // 判断
        userdb.selById(id, (err,result) => {
            if(err) {
                return res.send({
                    status:400,
                    msg:'查询失败!'
                });
            }
            res.send({
                status: 200,
                msg: '查询成功',
                data: result[0]
            });
        });
    },
    //修改用户
    updateUser: (req, res) => {
        if(isXhrLogin(req,res)){
            return;
        };
        // 接收参数
        let params = req.body
        // 判断
        userdb.updateU(params, (err,result) => {
            if(err) {
                return res.send({
                    status:400,
                    msg:'修改用户失败!'
                });
            };
            res.send({
                status: 200,
                msg: '修改成功'
            });
        });
    },
    //批量删除用户
    delUsersByIds:(req,res) => {
        if(isXhrLogin(req,res)){
            return;
        };
        //获取参数id
        let ids = req.body.id;
        
        // 将数组转为字符串,用逗号隔开
        // let idStr = ids.join(','); 
             
        // 判断
        userdb.delAllUser(ids,(err,result) => {
            if(err) {
                return res.send({
                    status:400,
                    msg:"批量删除失败!"
                });
            };
            res.send({
                status:200,
                msg:'删除成功!'
            });
        });
    }
};

//验证登录状态
function isXhrLogin(req,res){
    if(!req.session.user){
        res.send({
            status:304,
            msg:'您还没有登录!'
        });
        return true;
    };
    return false;
};

function isBroLogin(req,res){
    if(!req.session.user){
        return res.send('<script>alert("您还没有登录!");window.location="/login";</script>');
    };
}