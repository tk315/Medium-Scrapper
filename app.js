const express=require('express');
const path=require('path');
const mod = require(path.join(__dirname,'Controller','script.js'));

const app=express();

const port=process.env.PORT || 3000;

app.use(express.json());

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'View','index.html'));
});

app.post('/api',(req,res)=>{
    console.log(req.body.tagname);
    mod.search(req.body.tagname);
});




app.listen(port);