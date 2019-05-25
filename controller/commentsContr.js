//引入commentsdb
const commentsdb = require('../model/commentsdb.js')

//处理所有和评论相关的逻辑
module.exports = {
    //响应评论静态页面
    comments:(req,res) => {
        //获取nickname和avatar
        let nickname = req.session.user.nickname;
        let avatar = req.session.user.avatar;
        //响应
        res.render('comments',{nickname,avatar});
    },
    //获取所有评论数据
    getComments:(req,res) => {
        //接受参数
        let page = req.query.page;
        let pagesize = req.query.pagesize;
        //判断
        commentsdb. getComments(page,pagesize,(err,result) => {
            if(err) {
               return res.send({
                    status:400,
                    msg:'出错了!'
                });
            };
            res.send({
                status:200,
                msg:'获取数据成功!',
                data:result
            });
        });
    },
    //删除评论
    delComment:(req,res) => {
        //获取id
        let id = req.query.id;
        //判断
        commentsdb.delComment(id,(err,result) => {
            if(err) {
                return res.send({
                    status:400,
                    msg:'删除评论失败'
                });
            };
            res.send({
                status:200,
                msg:'删除评论成功!'
            });
        })
    }
};