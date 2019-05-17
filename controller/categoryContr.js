const categorydb = require('../model/categorydb.js');

module.exports = {
    //返回categories页面
    categories:(req,res) => {
        res.render('categories',{});
    },
    //获取所有分类数据
    getAllData:(req,res) => {
        //执行sql
        let selSql = `SELECT * FROM categories`;
        categorydb.query(selSql,(err,result) => {
            //如果err存在说明出错了,返回错误信息
            if(err){
                return res.send({
                    status:400,
                    msg:'出错了!'
                });
            };
            res.send({
                status:200,
                msg:'查询成功!',
                data:result
            });
        });
    }
};