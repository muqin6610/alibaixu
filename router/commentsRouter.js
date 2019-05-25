//所有与评论相关的路由
const express = require('express');
const router = express.Router();
const commentsContr = require('../controller/commentsContr.js');

//响应静态页面
router.get('/comments', commentsContr.comments)
//动态获取评论数据
.get('/getComments', commentsContr.getComments)
//删除评论
.get('/delComment',commentsContr.delComment)

module.exports = router;