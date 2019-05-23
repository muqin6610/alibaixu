//与文章相关的路由
const express = require('express');
const articleContr = require('../controller/articleContr.js');
const router = express.Router();

//响应文章页面
router.get('/postAdd',articleContr.postAdd)
//新增文章
.post('/postSave',articleContr.postSave)
//响应所有文章页面
.get('/posts',articleContr.posts)
//获取所有文章信息
.get('/getPostsData',articleContr.getPostsData)
//删除文章
.get('/delCateId',articleContr.delCateId)
//批量删除文章
.post('/delAllCate',articleContr.delAllCate)
//获取index页面
.get('/index',articleContr.index)
//获取统计数据
.get('/getIndexData',articleContr.getIndexData)

//暴露
module.exports = router;