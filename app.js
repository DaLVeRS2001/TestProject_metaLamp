
import express from 'express';
import path from 'path';
import http from 'http';
import Bundler from "parcel-bundler";

// let http = require('http')
// const Bundler = require('parcel-bundler');
// let path = require('path');
// let express =require('express')

let app = express();



let bundler = new Bundler('views/*.pug');




app.use(bundler.middleware());

app.get('/', function (req, res) {
	res.render(__dirname + 'views/homepage.pug')
})

app.get('/user', function (req, res) {
	res.render(__dirname + 'views/homepage.pug')
})

var server = http.createServer(app)

// Reload code here

	// reloadReturned is documented in the returns API in the README

	// Reload started, start web server
	server.listen(3000, function () {
		console.log('Web server listening on port ' + 3000)
	})



