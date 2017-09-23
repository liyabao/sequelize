var express=require('require');
var Sequelize=require('sequelize');

var sequelize=new Sequelize("test","postgres","lyb123",{
	host:'localhost',
	dialect:'postgres',
	pool:{
	max:
