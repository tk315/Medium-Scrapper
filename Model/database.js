const mysql=require('mysql');
 
var conn = mysql.createConnection({
    host: "mediumscrapper.mysql.database.azure.com", 
    user: "mediumscrapper@mediumscrapper", 
    password: "Password@123", 
    database: "mediumscraper", 
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

function displayquery()
{
    conn.query("select tag, date from history order by id desc",function(error,rows,fields){
        if(!!error){
            console.log('Error in the Query');
        }
        else {
            console.log('Successful Query');
            console.log(rows); 
            console.log(fields); 
        }
    });
}
function searchquery(tag)
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
module.exports = {searchquery,displayquery};