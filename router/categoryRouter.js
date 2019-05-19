//所有与分类有关的路由
 const express = require('express');
 const categoryContr = require('../controller/categoryContr.js');
 const router = express.Router();

 //获取静态页面
 router.get('/categories',categoryContr.categories)
//获取所有信息
 .get('/getAllData',categoryContr.getAllData)
 //添加新分类
 .post('/addCategory',categoryContr.addCategory)
 //删除分类
 .get('/delCate',categoryContr.delCate)
 //批量删除
 .post('/delCateAll',categoryContr.delCateAll)
 //根据id获取对应分类信息
 .get('/getCateById',categoryContr.getCateById)
 //修改分类
 .post('/updateCate',categoryContr.updateCate)

    //暴露接口
    module.exports = router;