//所有的路由

//引入模块和文件
const express = require('express');
const userContr = require('../controller/usersContr.js');
const router = express.Router();

//获取静态页面
router.get('/users',userContr.getUsers)
//添加用户的路由
.post('/addUser',userContr.addUser)
//获取所有用户信息的路由
.get('/getAllUsers',userContr.getAllUsers)
//删除数据的路由
.get('/delUser',userContr.delUser)
// 添加一个根据id得到用户的路由
.get('/getUserById', userContr.getUserById)
// 添加一个修改用户的路由
.post('/updateUser', userContr.updateUser)
// 添加一个批量删除的路由
.post('/delUsersByIds',userContr.delUsersByIds)

//暴露接口
module.exports = router;