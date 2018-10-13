/*创建数据库*/
DROP DATABASE IF EXISTS mall;
CREATE DATABASE IF NOT EXISTS mall DEFAULT CHARSET utf8mb4 COLLATE utf8mb4_unicode_ci;

USE mall;


/*
* 用户表
*/
DROP TABLE IF EXISTS  `sys_users`;
CREATE TABLE `sys_users` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `account` varchar(32) DEFAULT NULL,
  `nike_name` varchar(20) DEFAULT NULL,
  `password` varchar(100) DEFAULT NULL,
  `create_time` datetime DEFAULT NULL,
  `login_time` datetime DEFAULT NULL,
  `portrait` varchar(1000) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

insert into sys_users (account,nike_name,password,create_time,login_time,portrait) values('admin','admin','admin',now(),now(),'')