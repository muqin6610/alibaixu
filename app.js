//服务器

//引入experss
const express = require('express');
const ejs = require('ejs');
const bodyParser = require('body-parser');
const usersRouter = require('./router/usersRouter.js');
const categoryRouter = require('./router/categoryRouter.js');

const app = express();


//配置ejs
app.set('views','./views');
app.set('view engine','ejs');

//配置body-parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//配置静态文件
app.use('/assets',express.static('./assets'));
app.use('/static/uploads',express.static('./uploads'));

//注册中间件
app.use(usersRouter);
app.use(categoryRouter);


app.listen(3000,() => {
    console.log('服务器开启成功!');
})