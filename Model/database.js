const mysql=require('mysql');
 
var conn = mysql.createConnection({
    host: "mediumscrapper.mysql.database.azure.com", 
    user: "mediumscrapper@mediumscrapper", 
    password: "Password@123", 
    database: "mediumscrapper", 
    port: 3306
});

conn.connect(function(error){
    if(!!error){
        console.log('Error');
    }
    else{
        console.log('Connected');
    }
});

let tag=[];
let date=[];

function processquery()
{
    tag.length=0;
    date.length=0;
    conn.query("select tag from history order by id desc",function(error,data){
        if(!!error){
            console.log('Error in the Query');
        }
        else {
            console.log('Successful Query');
            
            for(let i=0;i<data.length;i++)
            {
                tag.push(data[i].tag);
            }
         
        }
    });
    conn.query("select date from history order by id desc",function(error,data){
        if(!!error){
            console.log('Error in the Query');
        }
        else {
            console.log('Successful Query');
            
            for(let i=0;i<data.length;i++)
            {
                date.push(data[i].date);
            }
           
        }
    });
}
function displayquery()
{
    let obj={
        "tag":tag,
        "date":date
    }
    return obj;
}
function insertquery(tag)
{
    let tdate= new Date;
    let s=`insert into history (tag,date) values (${JSON.stringify(tag)},${JSON.stringify(tdate).slice(0,11)+"\""})`;
    conn.query(s ,function(error){
        if(!!error){
            console.log('Error in the Query');
        }
        else {
            console.log('Successfully Inserted');
        }
    });
}
module.exports = {insertquery,displayquery,processquery};
