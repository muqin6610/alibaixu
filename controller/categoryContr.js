const categorydb = require('../model/categorydb.js');

//处理和用分类相关的逻辑
module.exports = {
    //返回categories页面
    categories: (req, res) => {
        res.render('categories', {});
    },
    //获取所有分类数据
    getAllData: (req, res) => {
        categorydb.selectAll((err, result) => {
            //如果err存在说明出错了,返回错误信息
            if (err) {
                return res.send({
                    status: 400,
                    msg: '出错了!'
                });
            };
            res.send({
                status: 200,
                msg: '查询成功!',
                data: result
            });
        });
    },
    //添加新分类
    addCategory: (req, res) => {
        //接收到数据
        let params = req.body;
        //判断
        categorydb.addData(params, (err, result) => {
            if (err) {
                return res.send({
                    status: 400,
                    msg: '出错了!'
                });
            };
            res.send({
                status: 200,
                msg: '添加成功!'
            });
        });
    },
    //根据用户id删除分类
    delCate: (req, res) => {
        //接收id
        let id = req.query.id;
        //判断
        categorydb.delCate(id, (err, result) => {
            if (err) {
                return res.send({
                    status: 400,
                    msg: '删除出错了!'
                });
            };
            res.send({
                status: 200,
                msg: '删除成功!'
            });
        });
    },
    //根据id批量删除分类
    delCateAll: (req, res) => {
        //接收id
        let ids = req.body.id;
        //将数组转为字符串,用逗号隔开
        // let idStr = ids.join(',')
        //判断
        categorydb.delCateAll(ids, (err, result) => {
            if (err) {
                return res.send({
                    status: 400,
                    msg: '批量删除失败!'
                });
            };
            res.send({
                status: 200,
                msg: '批量删除成功!'
            });
        })
    },
    // 根据id获取对应分类信息
    getCateById: (req, res) => {
        //接受id
        let id = req.query.id;
        //判断
        categorydb.getCateById(id, (err, result) => {
            if (err) {
               return res.send({
                    status: 400,
                    msg: '查询出错了!'
                });
            };
            res.send({
                status: 200,
                msg: '查询成功!',
                data: result[0]
            });
        });
    },
    //修改分类
    updateCate: (req, res) => {
        //获取数据
        let params = req.body;
        //判断
        categorydb.setCate(params,(err,result) => {
            if(err) {
                return res.send({
                    status:400,
                    msg:'出错了!'
                });
            };
            res.send({
                status:200,
                msg:'修改成功!'
            });
        });
    }
};