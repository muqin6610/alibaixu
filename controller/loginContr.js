//引入logindb
const logindb = require('../model/logindb.js');

//处理和用登录相关的逻辑
module.exports = {
    //返回登录页面
    login:(req,res) => {
        res.render('login',{});
    },
    //验证登录信息
    loginPostData:(req,res) => {
        //接收参数
        let params = req.body;
        //判断
        logindb.getDate(params.email,(err,result) => {
            if(err) {
                return res.send({
                    status:400,
                    msg:'验证出错!'
                });
            };
            if(result.length == 0){
                return res.send({
                    status:401,
                    msg:'邮箱或密码错误!'
                });
            };
            if(result[0].password != params.password){
                return res.send({
                    status:402,
                    msg:'密码错误!'
                });
            };
            //登录成功将用户信息保存起来
            req.session.user = {
                email:params.email,
                password:params.password,  
                nickname:result[0].nickname,
                id:result[0].id,
                avatar:result[0].avatar
            }
            res.send({
                status:200,
                msg:'登录成功!'
            });
        });
    },
    //退出登录
    logout:(req,res) => {
        //清除服务器session
        req.session.user = null;
        //响应信息回浏览器
        res.send({
            status:200,
            msg:'已退出登录'
        });
    }
};