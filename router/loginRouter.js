//与登录相关的所有路由
const express = require('express');
const router = express.Router();
const loginContr = require('../controller/loginContr.js');

//获取登录页面
router.get('/login',loginContr.login)
//验证登录信息
.post('/loginPostData',loginContr.loginPostData)
//退出登录
.get('/logout',loginContr.logout)

module.exports = router;