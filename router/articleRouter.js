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

//暴露
module.exports = router;