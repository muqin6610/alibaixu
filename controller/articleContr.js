//引入
const path = require('path');
const formidable = require('formidable');
const articledb = require('../model/articledb.js');

//处理和文章相关的逻辑
module.exports = {
    //返回postAdd页面
    postAdd: (req, res) => {
        //获取nickname和avatar并渲染 到页面
        let nickname = req.session.user.nickname;
        let avatar = req.session.user.avatar;
        res.render('postAdd', { nickname, avatar });
    },
    //添加文章
    postSave: (req, res) => {
        //接收参数
        let form = new formidable.IncomingForm();
        //将图片保存到uploads
        form.uploadDir = path.join(__dirname, '../uploads');
        //保留图片后缀
        form.keepExtensions = true;
        //判断
        form.parse(req, (err, fields, files) => {
            if (err) {
                return res.send({
                    status: 400,
                    msg: '新增失败'
                });
            };
            //创建一个文章对象
            let obj = {
                slug: fields.slug,
                title: fields.title,
                created: fields.created,
                content: fields.content,
                status: fields.status,
                user_id: req.session.user.id,
                category_id: fields.category
            };
            // console.log(obj)
            //处理图片
            if (files.feature) {
                let name = path.basename(files.feature.path);
                obj.feature = name;
            } else {
                obj.feature = '';
            }
            articledb.addPost(obj, (err1, result) => {
                console.log(err1)
                if (err1) {
                    return res.send({
                        status: 400,
                        msg: '添加文章失败!'
                    });
                };
                res.send({
                    status: 200,
                    msg: '添加文章成功!'
                });
            });
        });
    },
    //返回posts页面
    posts: (req, res) => {
        //获取nickname和avatar并渲染 到页面
        let nickname = req.session.user.nickname;
        let avatar = req.session.user.avatar;
        res.render('posts', { nickname, avatar });
    },
    //获取所有文章信息
    getPostsData: (req, res) => {
        //接收参数
        let page = req.query.page;
        let pagesize = req.query.pagesize;
        let sel = req.query.sel;
        let sta = req.query.sta;
        //把参数添加到对象中
        let options = {
            page ,
            pagesize,
            sel,
            sta
        }
        //判断
        articledb.getPostsData(options, (err, result) => {
            if (err) {
                res.send({
                    status: 400,
                    msg: '出错了!'
                });
            };
            res.send({
                status: 200,
                msg: '查询成功!',
                params: result
            });
        });
    },
    //删除id对应的文章
    delCateId: (req, res) => {
        //接受参数
        let id = req.query.id;
        //判断
        articledb.delCateId(id, (err, result) => {
            if (err) {
                res.send({
                    status: 400,
                    msg: '出错了!'
                });
            };
            res.send({
                status: 200,
                msg: '删除成功!'
            });
        })
    },
    //批量删除文章
    delAllCate: (req, res) => {
        //接收参数
        let ids = req.body.id;
        //判断
        articledb.delAllCate(ids, (err, result) => {
            if (err) {
                res.send({
                    status: 400,
                    msg: '出错了!'
                });
            };
            res.send({
                status: 200,
                msg: '文章批量删除成功!'
            });
        });
    },
    //响应index页面
    index: (req, res) => {
        //获取nickname和avatar并渲染 到页面
        let nickname = req.session.user.nickname;
        let avatar = req.session.user.avatar;
        res.render('index', { nickname, avatar });
    },
    //获取统计数据
    getIndexData:(req,res) => {
        //判断
        //将结果响应回浏览器
        articledb.getIndexData((err,result) => { 
            if(err) {
                res.send({
                    status:400,
                    msg:'出错了!'
                });
            };
            res.send({
                status:200,
                msg:'查询数据成功!',
                data:result
            });
        });
    }
};