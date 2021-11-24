const express=require('express');
const path=require('path')

const app=express();

const port=process.env.PORT || 1131;


app.get('/',(req,res)=>{
    res.send('hello world');
    //res.sendFile(path.join(__dirname,'View','index.html'));
});

app.listen(port);