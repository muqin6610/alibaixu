//所有与分类有关的路由
 const express = require('express');
 const categoryContr = require('../controller/categoryContr.js');
 const router = express.Router();

 //获取静态页面
 router.get('/categories',categoryContr.categories)
//获取所有信息
    .get('/getAllData',categoryContr.getAllData)

    //暴露接口
    module.exports = router;