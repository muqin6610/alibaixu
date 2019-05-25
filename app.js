//服务器

//引入包
const express = require('express');
const ejs = require('ejs');
const bodyParser = require('body-parser');
const cookieSession = require('cookie-session');
//引入文件
const usersRouter = require('./router/usersRouter.js');
const categoryRouter = require('./router/categoryRouter.js');
const loginRouter = require('./router/loginRouter.js'); 
const articleRouter = require('./router/articleRouter.js');
const setRouter = require('./router/setRouter.js')
const commentsRouter = require('./router/commentsRouter.js');

const app = express();


//配置ejs
app.set('views','./views');
app.set('view engine','ejs');

//配置body-parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//配置cookie-session
app.use(cookieSession({
    name: 'session',
    keys: ['key1', 'key2']
}));

//配置静态文件
app.use('/assets',express.static('./assets'));
app.use('/static/uploads',express.static('./uploads'));
app.use('/public',express.static('./public'));

//注册中间件
app.use(loginRouter);//登录相关
app.use(usersRouter);//用户相关
app.use(categoryRouter);//分类相关
app.use(articleRouter);//与文章相关
app.use(setRouter);//与设置相关
app.use(commentsRouter);//与评论相关

app.listen(3000,() => {
    console.log('服务器开启成功!');
})