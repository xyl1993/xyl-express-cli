const router = require('express').Router();
const { verifyToken } = require('../../../utils/verifyToken');
var express = require('express');
const admin = express.Router();
const web = express.Router();
const controller = require('./auth.controller');


admin.post('/user', controller.createUser);   //创建用户
admin.get('/user/auth', controller.webLogin);   //邮箱登陆

router.use('/admin', admin); //后台接口

router.use('/', web);  //小程序接口

module.exports = router;
