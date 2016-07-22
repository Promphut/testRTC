var express = require('express');
var app = express();
var io =require('socket.io')();
var fs = require('fs');

app.use(express.static('public'))
app.use(express.static('uploads'))
app.use(express.static('img'))
app.engine('html', require('ejs').renderFile)
app.get('/',(req,res)=>res.render('index.html'))
app.get('/rtc',(req,res)=>res.render('rtc.html'))
app.get('/test',(req,res)=>res.render('test1.html'))
io.listen(app.listen(4500))

