//所有与设置相关的路由
//引入文件和模块
const express = require('express');
const router = express.Router();
const setContr = require('../controller/setContr.js');

//获取导航菜单静态页面
router.get('/nav-menus',setContr.nav_menus)
//获取页面数据
.get('/getMenuList',setContr.getMenuList)
//新增数据
.post('/addMenu',setContr.addMenu)

module.exports = router;
