//引入setdb
const setdb = require('../model/setdb.js');

module.exports = {
    //响应导航设置静态页面
    nav_menus:(req,res) => {
        //获取参数
        let nickname = req.session.user.nickname;
        let avatar = req.session.user.avatar;
        //响应
        res.render('nav-menus',{nickname,avatar});
    },
    //获取页面数据
    getMenuList:(req,res) => {
        //判断
        setdb.getAllMenuList((err,result) => {
            if(err) {
               return res.send({
                   status:400,
                   msg:'出错了!'
               });
            };
            res.send({
                status:200,
                msg:'查询数据成功!',
                data:result
            });
        });
    },
    //新增数据
    addMenu:(req,res) => {
        //接收参数
        let params = req.body;
        //判断
        setdb.addMenu(params,(err,result) => {
            if(err) {
                return res.send({
                    status:400,
                    msg:'新增失败!'
                });
            };
            res.send({
                status:200,
                msg:'新增成功!'
            });
        })
    },
};