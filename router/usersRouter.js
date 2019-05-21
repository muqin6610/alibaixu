//所有的路由

//引入模块和文件
const express = require('express');
const userContr = require('../controller/usersContr.js');
const router = express.Router();

//登录验证中间件
// router.use((req,res,next) => {
//     //验证是否登录
//     if(req.session.user){
//         next();
//     }else {
//         res.send('<script>alert("您还没有登录");window.location="/login";</script>')
//     }
// });

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
//响应个人中心
.get('/profile',userContr.profile)
//修改个人中心得到路由
.post('/updateProfile',userContr.updateProfile)
//响应修改密码页面
.get('/passwordreset',userContr.passwordreset)
//修改密码
.post('/setPassword',userContr.setPassword)

//暴露接口
module.exports = router;