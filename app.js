var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var index = require('./routes/index');
var users = require('./routes/users');

var app = express();

var db = require('./db/data-factory');

// 初始化
db.init();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

//静态文件托管
app.use('/public', express.static('public'));
app.use('/views',express.static('views'));

//服务器路由
app.use('/home', index);
app.use('/users', users);

//重定向
app.use(function (req, res, next) {
    res.redirect('views/home/index.html#!/questionary');
});


module.exports = app;
