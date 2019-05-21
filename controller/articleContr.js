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
    }
};