const request =require('request');
const cheerio = require('cheerio');

let links = [];
let img = [];
let title=[];
let creator=[];
let tags=[];
let upload=[]; 
let time=[];
let blog=[];

function search(tag)
{
    links.length=0;
    title.length=0;
    creator.length=0;
    tags.length=0;
    upload.length=0;
    time.length=0;
    blog.length=0;
    if(tag.length===0)return;

    const str=`https://medium.com/tag/${tag}/latest`;
    request(str,(error, response, html)=>{
        if(error)
        {
            console.log('error:',error);
        }
        else
        {         
            let $=cheerio.load(html);

            $('.ea.l a').each((i,el)=>{
                links.push($(el).attr('href'));
            });
           
            $('h2').each((i,el)=>{
                if(i<10)title.push($(el).text());
            });
  
            $('.ae.fj h4').each((i,el)=>{
                if(i<10)creator.push($(el).text());
            }).get(0);
           
            $('.ef.cq.eg.l a').each((i,el)=>{
                tags.push($(el).text());
            });

            $('.ae.t p').each((i,el)=>{
                if(i<10)upload.push($(el).text());
            });
          
            $('.ae.fj span').each((i,el)=>{
                let temp=$(el).text();
                if(temp.length>1)time.push(temp);   
            });
           
            $('.ae.fj h3').each((i,el)=>{
                blog.push($(el).text());
            });
        }
    });    
}

function getjson()
{   
    let obj={
        "links":links,
        "title":title,
        "creator":creator,
        "tags":tags,
        "upload":upload,
        "time":time,
       "blog":blog
    };
    console.log(obj);
    return obj;
}

module.exports = {search,getjson};