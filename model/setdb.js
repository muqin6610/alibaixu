//引入db文件
const db = require('./db.js');

module.exports = {
    query:db.query,
    //获取导航菜单页面数据
    getAllMenuList:(callback) => {
        //执行sql语句
        let selSql = `SELECT * FROM options WHERE options.key = 'nav_menus'`;
        db.query(selSql,(err,result) => {
            callback(err,result);
        });
    },
    //新增数据
    addMenu:function (params,callback){
        //得到之前的导航菜单是数据
        this.getAllMenuList((err,result) => {
            if(err) {
                return callback(err,null);
            };
             //将获取的数据转为对象
        let dataArr = JSON.parse(result[0].value);
        //创建一个新对象存储数据
        let obj = {
            icon:'fa fa-phone',
            text:params.text,
            title:params.title,
            link:params.href
        };
        //把对象添加到数据源中
        dataArr.push(obj);
        //将对象转为字符串
        let dataStr = JSON.stringify(dataArr);
        //将数据更新到数据库中
        //拼接sql语句
        let sql = `UPDATE options SET options.value = '${dataStr}' WHERE options.key='nav_menus'`
        //执行sql语句
        db.query(sql,(err,result) => {
            callback(err,result);
        });
        });
    }
};