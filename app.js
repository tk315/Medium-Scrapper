const express=require('express');
const path=require('path');
const bodyParser = require('body-parser');
const httpMsgs = require('http-msgs');

const mod = require(path.join(__dirname,'Controller','script.js'));

const app=express();

const port=process.env.PORT || 3000;

app.use(bodyParser.urlencoded({extended:false}));

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'View','index.html'));
});


app.post('/api',(req,res)=>{
    mod.search(req.body.tagname);
    httpMsgs.sendJSON(req,res);
});

app.get('/api2',(req,res)=>{
    let arr=mod.getjson();
    httpMsgs.sendJSON(req,res,arr);
});

app.listen(port);