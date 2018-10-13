require('dotenv').config();

var createError = require('http-errors');
var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
// var ejs = require('ejs');  //我是新引入的ejs插件
const log4js = require('log4js');
var logger = require('./log4js');

const routesV1 = require('./modules/v1');
const config = require('./config/environment');

var app = express();

// view engine setup
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'ejs');

app.use(log4js.connectLogger(logger, { level: 'auto', format: ':method :url  :status  :response-time ms' }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.urlencoded({ extended: false}));



app.use(express.json());
app.use('/api/v1', routesV1);
app.use('/rd-admin', express.static(config.adminUI.root))
app.use('/rd-admin',(req, res)=>{res.sendFile(config.adminUI.index)});

app.use(function(req, res, next) {
  next(createError(404));
});
module.exports = app;
