//所有的路由

//引入模块和文件
const express = require('express');
const userContr = require('../controller/usersContr.js');
const router = express.Router();

//获取静态页面
router.get('/users',(req,res) => {
    userContr.getUsers(req,res);
});

//添加用户的路由
router.post('/addUser',(req,res) => {
    userContr.addUser(req,res);
});

//获取所有用户信息的路由
router.get('/getAllUsers',(req,res) => {
    userContr.getAllUsers(req,res);
});

//删除数据的路由
router.get('/delUser',(req,res) => {
    userContr.delUser(req,res);
})

// 添加一个根据id得到用户的路由
router.get('/getUserById', (req, res) => {
    userContr.getUserById(req, res)
})

// 添加一个修改用户的路由
router.post('/updateUser', (req, res) => {
    userContr.updateUser(req, res)
})

//暴露接口
module.exports = router;