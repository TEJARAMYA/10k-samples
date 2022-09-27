const express = require('express')
const app = express();
app.set('view engine', 'ejs');
const ejs =require('ejs')
const fs = require('fs')
var a= JSON.parse(fs.readFileSync("sample.json"))
app.get('/', function(req, res){
    res.render('index',{"ram":a})
});
app.get('/user/:id', function(req, res){
    const up=req.params.id
    res.render('ramdata',{'ra':up,"dat":a.Sheet1[up]})
});


app.listen(8080)